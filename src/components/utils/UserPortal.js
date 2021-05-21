import useUserContext from "../context/user/useUserContext";
import SignUpAndSignIn from "../pages/signUpAndSignIn/SignUpAndSignIn";
import Profile from "../pages/profile/Profile";
import { useEffect } from "react";

const UserPortal = () => {
	useEffect(() => {});
	const { isAuthenticated } = useUserContext();
	return <>{isAuthenticated ? <Profile /> : <SignUpAndSignIn />}</>;
};

export default UserPortal;
