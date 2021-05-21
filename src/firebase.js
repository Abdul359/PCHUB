import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
	apiKey: "AIzaSyCdtQ0BIVVHDTSLQhZPpWSdf0JclvMx7WA",
	authDomain: "pchub-ae34e.firebaseapp.com",
	projectId: "pchub-ae34e",
	storageBucket: "pchub-ae34e.appspot.com",
	messagingSenderId: "448375461451",
	appId: "1:448375461451:web:248ede83aa0256d7a81fce",
	measurementId: "G-N8719LYP9B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const getDocs = (doc) => {
	return {
		uid: doc.id,
		...doc.data(),
	};
};
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
