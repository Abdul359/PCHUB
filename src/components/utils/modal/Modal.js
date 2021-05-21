import React, { useEffect, useState } from "react";
import "./modal.css";
import ReactDom from "react-dom";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";

const Modal = () => {
	const {
		closeModal,
		modal: { isOpen, data },
	} = useUtilsContext();
	const [dataList, setDataList] = useState([]);
	useEffect(() => {
		if (data) {
			setDataList(Object.keys(data));
		}
		document.addEventListener("keyup", (e) => {
			if (e.which === 27 && isOpen) {
				handleCloseModal();
			}
		});
		// eslint-disable-next-line
	}, [data, isOpen]);
	const handleCloseModal = () => {
		closeModal();
	};
	return ReactDom.createPortal(
		<div className="property__modal__parent">
			<div className="property__modal">
				<h1 className="property__modal__title">
					{" "}
					{data?.brand} - {data?.model}{" "}
				</h1>
				<div className="property__modal__hero">
					<img
						className="property__modal__img"
						src={data.imageURL}
						alt={data?.model}
					/>
					<div className="hero__info">
						<div className="property__price">
							Indian Price - {data?.price}
						</div>
						<div className="property__btn__group">
							<a className="property__link__btn" href={data.link}>
								Buy now
							</a>
							{/* <button className="property__add__btn">
								Add to your build
							</button> */}
						</div>
					</div>
				</div>
				<button
					className="modal__close__btn modal__btn "
					onClick={handleCloseModal}
				>
					<i className="fas fa-times"></i>
				</button>
				<div className="property__modal__info">
					{dataList.length > 0 &&
						dataList.map((eachData, index) => {
							if (
								!(
									eachData === "imageURL" ||
									eachData === "price" ||
									eachData === "uid" ||
									eachData === "link" ||
									eachData === "price"
								)
							) {
								return (
									<div
										key={index}
										className="modal__info__child"
									>
										<span className="modal__info__child__key">
											{" "}
											{eachData}{" "}
										</span>
										<span className="modal__info__child__value">
											{" "}
											{data[eachData]}{" "}
										</span>
									</div>
								);
							}
							return null;
						})}
				</div>
			</div>
		</div>,
		document.getElementById("property__modal")
	);
};

export default Modal;
