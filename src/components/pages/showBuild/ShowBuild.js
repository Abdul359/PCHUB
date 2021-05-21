import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useUserContext from "../../context/user/useUserContext";
import EachChild from "./EachChild";
import "./showBuild.css";

const ShowBuild = () => {
	const params = useParams();
	const [user, setUser] = useState(null);
	const { getUserDocument } = useUserContext();
	useEffect(() => {
		async function getUser() {
			if (params?.id) {
				const userRef = await getUserDocument(params?.id);
				const user = await userRef.get();
				setUser(user.data());
			}
		}
		getUser();
		return () => {
			setUser(null);
		};
		//eslint-disable-next-line
	}, [params?.id]);
	return (
		<>
			{user && (
				<div className="show__build">
					<h1 className="show__build__title">
						{" "}
						{user?.displayName}'s build
					</h1>
					{user?.photoURL && user?.photoURL.imageURL && (
						<div className="show__build__hero">
							<img
								src={`${user?.photoURL.imageURL}`}
								alt={`${user?.displayName}`}
								className="show__build__img"
							/>
							<div className="show__build__hero__info">
								<div className="show__build__info__child">
									<span className="show__build__info__child__key">
										Name:{" "}
									</span>
									<span className="show__build__info__child__value">
										{user?.displayName}{" "}
									</span>
								</div>
								<div className="show__build__info__child">
									<span className="show__build__info__child__key">
										Email:{" "}
									</span>
									<span className="show__build__info__child__value">
										{user?.email}{" "}
									</span>
								</div>
							</div>
						</div>
					)}
					{!user.cpu &&
						!user.gpu &&
						!user.motherBoard &&
						!user.case &&
						!user.psu &&
						!user.ram &&
						!user.ssd &&
						!user.coolingSystem &&
						!user.hdd && (
							<div className="no__build">
								<h1 className="no__build__title">
									No PC Build{" "}
									<i className="fas fa-sad-tear"></i>{" "}
								</h1>
								<a href="/buildpc" className="no__build__link">
									Build Now
								</a>
							</div>
						)}
					{user &&
						Object.keys(user).map((property, index) => {
							if (
								!(
									property === "uid" ||
									property === "photoURL" ||
									property === "displayName" ||
									property === "emailVerified" ||
									property === "email"
								)
							) {
								const {
									brand,
									model,
									price,
									uid,
									imageURL,
								} = user[property];
								return (
									<EachChild
										key={index}
										propertyName={property}
										data={{
											brand,
											model,
											price,
											uid,
											imageURL,
										}}
									/>
								);
							}
							return null;
						})}
				</div>
			)}
		</>
	);
};

export default ShowBuild;
