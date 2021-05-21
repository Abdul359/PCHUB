import React from "react";
import ReactDom from "react-dom";
import "./toaster.css";

const Toaster = ({ message }) => {
	return ReactDom.createPortal(
		<div className="toaster">
			<i className="far fa-check-circle"></i>
			{/* <i className="fas fa-sticky-note"></i> */}
			{/* <i className="fas fa-info"></i> */}
			<p className="toaster__message"> {message} </p>
		</div>,
		document.getElementById("toaster")
	);
};

export default Toaster;
