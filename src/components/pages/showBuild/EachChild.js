import React from "react";

const EachChild = (props) => {
	const { data, propertyName } = props;
	return (
		<section className="user__build">
			<h1 className="user__build__title">{propertyName}</h1>
			<div className="user__build__info">
				<img
					className="user__build__info__img"
					src={data?.imageURL}
					alt={propertyName}
				/>

				<div className="user__build__info__child">
					{data &&
						Object.keys(data).map((eachProperty, index) => {
							if (
								!(
									eachProperty === "imageURL" ||
									eachProperty === "uid"
								)
							) {
								return (
									<div
										key={index}
										className="build__info__child"
									>
										<span className="build__info__child__key">
											{eachProperty}:
										</span>
										<span className="build__info__child__value">
											{data[eachProperty]}
										</span>
									</div>
								);
							}
							return null;
						})}
					{/* <button
						onClick={handleShowmore}
						className="user__build__info__showmore"
					>
						See more
					</button> */}
				</div>
			</div>
		</section>
	);
};

export default EachChild;
