import React from "react";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";
import useUserContext from "../../context/user/useUserContext";
import { useHistory } from "react-router";
const EachProperty = (props) => {
	const { property, selected } = props;
	const { openModal } = useUtilsContext();
	const { addPropertyToUser } = useUserContext();
	const { isAuthenticated, user } = useUserContext();
	const history = useHistory();
	const handleModal = () => {
		openModal(property);
	};
	const addPropertyInUserProfile = () => {
		if (isAuthenticated && user) {
			const { brand, model, imageURL, price, uid } = property;
			addPropertyToUser(
				{
					brand,
					model,
					imageURL,
					price,
					uid,
				},
				selected
			);
		} else {
			history.push("/profile");
		}
	};
	return (
		<>
			<div className="child__instance">
				{property && (
					<>
						<a href="#!" onClick={handleModal}>
							<img
								src={`${property?.imageURL}`}
								alt={`${property?.brand}-${property?.model}`}
								className="child__instance__img"
							/>
						</a>
					</>
				)}
				<div className="child__instance__info">
					{property && (
						<div className="info__parent">
							<div className="info__child">
								<span className="info__child__key">Brand</span>
								<span className="info__child__value">
									{" "}
									{property?.brand}{" "}
								</span>
							</div>
							<div className="info__child">
								<span className="info__child__key">Model</span>
								<span className="info__child__value">
									{" "}
									{property?.model}{" "}
								</span>
							</div>
						</div>
					)}
					<div className="info__btn__group">
						<button
							className="info__btn info__btn-showmore"
							onClick={handleModal}
						>
							See more
						</button>
						{selected !== "peripherals" && (
							<button
								className="info__btn info__btn-add"
								onClick={addPropertyInUserProfile}
							>
								Add to your build
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default EachProperty;
