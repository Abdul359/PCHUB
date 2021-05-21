import { useCallback, useContext } from "react";
import { auth, firestore, signInWithGoogle, storage } from "../../../firebase";
import useBuild from "../pcBuild/useBuild";
import { USER_LOGIN, USER_LOGOUT, USER_STATE_CHANGE } from "../types";
import useUtilsContext from "../utilsContext/useUtilsContext";
import UserContext from "./UserContext";

const useUserContext = () => {
	const userContext = useContext(UserContext);
	const { setError, setLoading, clearLoading, showToaster, showAlert } =
		useUtilsContext();
	const { inProgress, onPropertySelected, clearInProgress } = useBuild();
	const { state, dispatch } = userContext;
	const authStateChange = async (state) => {
		if (state) {
			setLoading("Please wait...");
			const userRef = await getUserDocument(state.uid);
			const user = await userRef.get();
			dispatch({
				type: USER_LOGIN,
				payload: {
					...user.data(),
				},
			});
			clearLoading();
		} else {
			dispatch({
				type: USER_LOGOUT,
			});
		}
	};
	const googleSignIn = async () => {
		setLoading("Signing in with google...");
		try {
			const res = await signInWithGoogle();
			const userRef = await createUserDocument(res.user, null);
			const user = await userRef.get();
			const { displayName, email, emailVerified, photoURL, uid } =
				user.data();
			dispatch({
				type: USER_LOGIN,
				payload: {
					displayName,
					email,
					emailVerified,
					photoURL,
					uid,
				},
			});
			clearLoading();
		} catch (err) {
			setError(err.message);
		}
	};
	const signupAndLoginWithEmail = async (credentials, method) => {
		try {
			if (method === "Sign up") {
				const { email, password, name } = credentials;
				console.log(email, password, name);
				setLoading("Signing up...");
				const res = await auth.createUserWithEmailAndPassword(
					email,
					password
				);
				console.log(res);
				const userRef = await createUserDocument(res.user, name);
				const user = await userRef.get();
				dispatch({
					type: USER_LOGIN,
					payload: {
						...user.data(),
					},
				});
				clearLoading();
			} else {
				setLoading("Loging in...");
				const { email, password } = credentials;
				const res = await auth.signInWithEmailAndPassword(
					email,
					password
				);
				const userRef = await getUserDocument(res.user.uid);
				const user = await userRef.get();
				dispatch({
					type: USER_LOGIN,
					payload: {
						...user.data(),
					},
				});
				clearLoading();
			}
		} catch (err) {
			clearLoading();
			console.log(err);
			const regex = /(?<=\/).*/;
			if (regex.exec(err.code).length >= 1) {
				setError(regex.exec(err.code)[0]);
			}
		}
	};
	const createUserDocument = async (user, displayName) => {
		try {
			const { uid, email, photoURL, emailVerified } = user;
			const userRef = firestore.collection("users").doc(uid);
			const snapshot = await userRef.get();
			if (!snapshot.exists) {
				if (displayName) {
					await userRef.set({
						uid,
						email,
						photoURL: {
							imageURL: photoURL,
						},
						emailVerified,
						displayName,
					});
				} else {
					const { displayName } = user;
					await userRef.set({
						uid,
						email,
						photoURL: {
							imageURL: photoURL,
						},
						emailVerified,
						displayName,
					});
				}
			}
			return await getUserDocument(uid);
		} catch (err) {
			console.log(err);
		}
	};
	const getUserDocument = async (uid) => {
		try {
			if (uid) {
				return await firestore.collection("users").doc(uid);
			}
		} catch (err) {
			console.log(err);
		}
	};
	const updatePhotoURL = async (file, uid) => {
		try {
			const regex = /(?<=\.).*/;
			const fileExtension = regex.exec(file.name)[0];
			async function checkAndUpdateUserImage() {
				const res = await storage
					.ref()
					.child("users")
					.child(uid)
					.listAll();
				if (res.items.length > 0) {
					res.items.forEach(async (image) => {
						await image.delete();
					});
				}
				const imageRef = await storage
					.ref()
					.child("users")
					.child(uid)
					.child(`${uid}.${fileExtension}`)
					.put(file);
				const imageURL = await imageRef.ref.getDownloadURL();
				await updateUserPhotoURL(imageURL, uid);
			}

			if (
				fileExtension === "png" ||
				fileExtension === "jpg" ||
				fileExtension === "jpeg"
			) {
				setLoading("Updating profile image...");
				const imageUpdateTimeout =
					state?.user?.photoURL?.imageUpdateTimeout;
				const currentTime = Math.floor(new Date().getTime() / 1000);
				const timeLeftInHours = Math.floor(
					(imageUpdateTimeout - currentTime) / 60 / 60
				);
				const timeLeftInMinutes = Math.floor(
					((imageUpdateTimeout - currentTime) / 60) % 60
				);
				if (!imageUpdateTimeout) {
					await checkAndUpdateUserImage();
				}
				if (imageUpdateTimeout) {
					if (currentTime >= imageUpdateTimeout) {
						await checkAndUpdateUserImage();
					}
					if (currentTime < imageUpdateTimeout) {
						setError(
							`Please update your profile after ${timeLeftInHours} hours ${timeLeftInMinutes} minutes`
						);
					}
				}
			} else {
				setError("PNG or JPEG is required for image");
			}
		} catch (err) {
			setError(err.message);
		}
	};
	const updateUserPhotoURL = async (imageURL, uid) => {
		try {
			await firestore
				.collection("users")
				.doc(uid)
				.update({
					photoURL: {
						imageURL,
						imageUpdateTimeout: Math.round(
							new Date().getTime() / 1000 + 24 * 60 * 60
						),
					},
				});
			clearLoading();
		} catch (err) {
			console.log(err);
		}
	};
	const userStateChange = useCallback(
		(user) => {
			if (user) {
				dispatch({
					type: USER_STATE_CHANGE,
					payload: {
						...user.data(),
					},
				});
			}
		},
		[dispatch]
	);
	const addPropertyToUser = async (property, propertyName) => {
		setLoading("Writing to database...");
		try {
			if (property && propertyName) {
				const userRef = firestore
					.collection("users")
					.doc(state?.user?.uid);
				const res = await userRef.get();
				const userData = res.data();
				if (userData[propertyName]) {
					clearLoading();
					showAlert(propertyName, userData[propertyName], property);
				}
				if (!userData[propertyName]) {
					await userRef.update({
						[propertyName]: property,
					});
					clearLoading();
					showToaster(`Added ${propertyName} in your build`);
					if (inProgress && inProgress.status) {
						onPropertySelected(inProgress.toBeSelected);
						clearInProgress();
					}
				}
			}
		} catch (er) {}
	};
	const confirmAlert = async (property, propertyName) => {
		setLoading(`updating ${propertyName} in your build...`);
		try {
			await firestore
				.collection("users")
				.doc(state?.user?.uid)
				.update({
					[propertyName]: property,
				});
			clearLoading();
			showToaster(`Updated ${propertyName} in your build`);
			if (inProgress && inProgress.status) {
				onPropertySelected(inProgress.toBeSelected);
				clearInProgress();
			}
		} catch (err) {
			console.log(err);
		}
	};
	return {
		...state,
		googleSignIn,
		authStateChange,
		signupAndLoginWithEmail,
		updatePhotoURL,
		getUserDocument,
		userStateChange,
		addPropertyToUser,
		confirmAlert,
	};
};
export default useUserContext;
