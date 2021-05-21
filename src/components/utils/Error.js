import React from "react";
import useUtilsContext from "../context/utilsContext/useUtilsContext";
import "./error.css";

const Error = () => {
	const { error, clearError } = useUtilsContext();
	if (error) {
		setTimeout(() => {
			clearError();
		}, 5000);
	}
	return <div className="error"> {`${error}`.toUpperCase()} </div>;
};

export default Error;
