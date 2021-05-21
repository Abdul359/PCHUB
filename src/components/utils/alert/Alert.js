import React from "react";
import ReactDom from "react-dom";
import useUserContext from "../../context/user/useUserContext";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";
import "./alert.css";

const Alert = () => {
	const { removeAlert, alert } = useUtilsContext();
	const { confirmAlert } = useUserContext();

	document.addEventListener("keyup", (e) => {
		if (e.which === 27 && alert.isOpen) {
			removeAlert();
		}
		if (e.which === 13 && alert.isOpen) {
			handleConfirmAlert();
		}
	});
	const handleCloseAlert = () => {
		removeAlert();
	};
	const handleConfirmAlert = () => {
		confirmAlert(alert?.data?.updatingProperty, alert?.data?.propertyName);
		removeAlert();
	};
	return ReactDom.createPortal(
		<div className="alert">
			{alert && (
				<div className="alert__child">
					<h3 className="alert__title">User build alert</h3>
					<p className="alert__message">
						{" "}
						<span className="updated">
							{alert?.data?.updatedProperty?.brand}-
							{alert?.data?.updatedProperty?.model}{" "}
						</span>
						exist in your build, do you want to update with{" "}
						<span className="updating">
							{alert.data?.updatingProperty?.brand}-
							{alert.data?.updatingProperty?.model}
						</span>
					</p>
					<div className="alert__btn__group">
						<button
							className="alert__btn alert__btn-close"
							onClick={handleCloseAlert}
						>
							Cancel
						</button>
						<button
							className="alert__btn alert__btn-accept"
							onClick={handleConfirmAlert}
						>
							Update
						</button>
					</div>
				</div>
			)}
		</div>,
		document.getElementById("alert")
	);
};

export default Alert;
