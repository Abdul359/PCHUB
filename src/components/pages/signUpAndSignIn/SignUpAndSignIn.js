import React, { useState } from "react";
import useUserContext from "../../context/user/useUserContext";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";
import Inputs from "../../utils/Inputs";
import Loading from "../../utils/Loading";
import "./signUpAndSignIn.css";

const SignUpAndSignIn = (props) => {
	const [signUp, setSignUp] = useState(true);
	const { googleSignIn } = useUserContext();
	const { loading } = useUtilsContext();
	const handleGoogle = async (e) => {
		e.preventDefault();
		await googleSignIn();
	};
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="signup">
					<div className="signup__child">
						{signUp ? (
							<Inputs name email password btn="Sign up" />
						) : (
							<Inputs email password btn="Log in" />
						)}
						<div className="signup__btn__group">
							{signUp ? (
								<>
									<p>Already have an account?</p>
									<button
										className="login__btn"
										onClick={() => setSignUp(false)}
									>
										Log in
									</button>
								</>
							) : (
								<>
									<p>Don't have an account</p>
									<button
										className="login__btn"
										onClick={() => setSignUp(true)}
									>
										Sign Up
									</button>
								</>
							)}
						</div>
						<button className="signup__btn" onClick={handleGoogle}>
							{signUp
								? "Signup with Google"
								: "Login with Google"}
							<i className="fab fa-google"></i>{" "}
						</button>
					</div>
				</div>
			)}
		</>
	);
};
export default SignUpAndSignIn;
