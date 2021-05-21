import React, { useEffect, useRef, useState } from "react";
import "./profile.css";
import useUserContext from "../../context/user/useUserContext";
import { auth, firestore } from "../../../firebase";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";
import { useHistory } from "react-router";

const Profile = (props) => {
	const history = useHistory();
	const fileRef = useRef(null);
	const [file, setFile] = useState(false);
	const { user, updatePhotoURL, userStateChange } = useUserContext();
	const { setError } = useUtilsContext();
	const unsubscribeFromUser = useRef();
	useEffect(() => {
		unsubscribeFromUser.current = firestore
			.collection("users")
			.doc(user?.uid)
			.onSnapshot((snapshot) => {
				userStateChange(snapshot);
			});
		return () => {
			unsubscribeFromUser.current();
		};
		//eslint-disable-next-line
	}, []);
	const handleLogout = (e) => {
		e.preventDefault();
		auth.signOut();
		history.push("/");
	};
	const handleUpdateProfile = (e) => {
		e.preventDefault();
		if (fileRef.current) {
			updatePhotoURL(fileRef.current, user?.uid);
			setFile(false);
		} else {
			setError("Profile image not selected");
			setFile(false);
			return;
		}
		document.querySelector(".update__profile__input").value = "";
	};
	const handleFileChange = (e) => {
		fileRef.current = e.target.files[0];
		if (fileRef.current) {
			setFile(true);
		}
	};
	return (
		<div className="user__profile">
			<section className="user">
				{user?.photoURL?.imageURL ? (
					<div
						className="user__img"
						style={{
							backgroundImage: `url(${user?.photoURL?.imageURL})`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					></div>
				) : (
					<i className="fas fa-user-circle unknown__user"></i>
				)}
				<div className="user__info">
					<ul className="user__info__collection">
						<li className="user__info__items">
							<span className="user__info__label">
								<i className="fas fa-id-badge"></i>
								Username:
							</span>
							<span className="user__info__value">
								{user?.displayName}
							</span>
						</li>
						<li className="user__info__items">
							<span className="user__info__label">
								<i className="fas fa-envelope"></i>
								Email:
							</span>
							<span className="user__info__value">
								{user?.email}
							</span>
						</li>
					</ul>
				</div>
			</section>
			<div className="update__profile">
				<span className="update__profile__label">
					<i className="fas fa-camera"></i>
					Update profile image
				</span>
				<input
					className="update__profile__input"
					type="file"
					onChange={handleFileChange}
				/>
				{file && (
					<button
						className="update__profile__btn"
						onClick={handleUpdateProfile}
					>
						Update profile
					</button>
				)}
				<a href={`/profile/${user.uid}/build`} className="saved__build">
					{" "}
					Saved Build{" "}
				</a>
			</div>

			<button className="user__logout" onClick={handleLogout}>
				Log out
			</button>
		</div>
	);
};

export default Profile;
