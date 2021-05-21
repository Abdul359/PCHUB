import React from "react";
import useUtilsContext from "../context/utilsContext/useUtilsContext";
import "./loading.css";

const Loading = () => {
	const { loading } = useUtilsContext();
	return (
		<>
			<div className="container">
				<div className="loader one">
					<span></span>
					<span></span>
				</div>
			</div>
			<h1 className="load">{loading.message}</h1>
		</>
	);
};

export default Loading;
