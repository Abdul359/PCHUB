import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useData from "../../context/data/useData";
import "./showmore.css";
const Showmore = (props) => {
	const params = useParams();
	const dataContext = useData();
	const data = dataContext[Object.keys(props)[0]];
	const [item, setItem] = useState(null);

	useEffect(() => {
		if (params?.id) {
			data.forEach((property) => {
				if (property?.uid === params.id) {
					setItem({
						...property,
					});
				}
			});
		}
	}, [params.id, data]);

	return (
		item && (
			<div className="showmore">
				{item && item.name && (
					<h1 className="showmore__title">{item.name}</h1>
				)}
				<div className="showmore__price">
					{item && `Estimated Indian Price ${item.price}`}
				</div>
				<div className="showmore__child">
					<div className="showmore__showcase">
						{item && item.imageURL && item.name && (
							<img
								src={item.imageURL}
								alt={item.name}
								className="showmore__img"
							/>
						)}
					</div>
					<div className="showmore__info">
						{item &&
							Array.from(Object.keys(item)).map(
								(eachItem, index) => {
									if (
										eachItem === "description1" ||
										eachItem === "description2" ||
										eachItem === "description3" ||
										eachItem === "uid" ||
										eachItem === "imageURL" ||
										eachItem === "name" ||
										eachItem === "price"
									) {
										return null;
									} else {
										return (
											<div
												key={index}
												className="showmore__info__child"
											>
												<span className="info__label">
													{" "}
													{eachItem}
												</span>
												<span className="info__value">
													{" "}
													{item[eachItem]}
												</span>
											</div>
										);
									}
								}
							)}
					</div>
				</div>
			</div>
		)
	);
};

export default Showmore;
