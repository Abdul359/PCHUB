import React from "react";

const EachBuild = ({ children, type }) => {
	return (
		<section className="build__section">
			<a
				href={`${type}/${children?.uid}`}
				className="build__section__link"
			>
				<img
					className="build__section__img"
					src={children?.imageURL}
					alt={children?.name}
				/>
				<h1 className="build__section__title">{children?.name}</h1>
				<div className="build__section__info">
					<h1 className="build__section__info__title">
						{" "}
						{children?.name}
					</h1>
					<div className="build__section__info__child">
						<span className="build__section__info__child__key">
							CPU -
						</span>
						<span className="build__section__info__child__value">
							{" "}
							{children?.cpu}{" "}
						</span>
					</div>
					<div className="build__section__info__child">
						<span className="build__section__info__child__key">
							Graphics Card -
						</span>
						<span className="build__section__info__child__value">
							{" "}
							{children?.graphic}{" "}
						</span>
					</div>
				</div>
			</a>
		</section>
	);
};

export default EachBuild;
