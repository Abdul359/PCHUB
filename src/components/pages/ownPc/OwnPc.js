import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBuild from "../../context/pcBuild/useBuild";
import useUserContext from "../../context/user/useUserContext";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";
import Toaster from "../../utils/toaster/Toaster";
import "./ownpc.css";

const OwnPc = () => {
	const { isAuthenticated, user } = useUserContext();
	const { resetProgress, isCompleted } = useBuild();
	const { getUserDocument, userStateChange } = useUserContext();
	const [position, setPosition] = useState("");
	const { showToaster, removeToaster, toaster } = useUtilsContext();
	useEffect(() => {
		if (isCompleted) {
			setPosition(isCompleted.propertyName);
		}
		if (position && isCompleted) {
			const elementSibling =
				document.getElementById(position).nextElementSibling;
			const allElements = Array.from(
				document.querySelectorAll(".build__guide")
			);
			allElements.forEach((ele) => {
				if (elementSibling) {
					if (!(ele.id === elementSibling.id)) {
						ele.style.opacity = 0.3;
						ele.addEventListener("click", () => {
							ele.style.opacity = 1;
							setTimeout(() => {
								ele.style.opacity = 0.3;
							}, 3000);
						});
					}
				}
			});
			if (elementSibling) {
				elementSibling.classList.add("set__border");
				elementSibling.style.opacity = 1;
				elementSibling.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			}
			if (!elementSibling) {
				showToaster("Congrats you have build your pc");
				document.querySelector(".ownpc").scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
				setTimeout(() => {
					removeToaster();
				}, 4000);
			}
			resetProgress();
		}
		if (user && isAuthenticated) {
			async function fetchUser() {
				const userRef = await getUserDocument(user.uid);
				const res = await userRef.get();
				userStateChange(res);
			}
			fetchUser();
		}
		//eslint-disable-next-line
	}, [
		isAuthenticated,
		userStateChange,
		isCompleted,
		resetProgress,
		setPosition,
		position,
	]);
	return (
		<div className="ownpc">
			{toaster && toaster?.isOpen && (
				<Toaster message={toaster?.message} />
			)}
			<section className="build__guide" id="cpu">
				<h1 className="build__guide__title">CPU</h1>
				<div className="build__child">
					{user && user.cpu && (
						<img src={user.cpu.imageURL} alt="cpu" />
					)}

					<div className="build__guide__child">
						{isAuthenticated && user && user.cpu && (
							<span className="user__property">
								{" "}
								{user.cpu.brand}-{user.cpu.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/cpu`
										: "/profile",
									name: "cpu",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.cpu
									? "update cpu"
									: "add cpu"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="motherBoard">
				<h1 className="build__guide__title">MOTHERBOARD</h1>
				<div className="build__child">
					{user && user.motherBoard && (
						<img
							src={user.motherBoard.imageURL}
							alt="motherBoard"
						/>
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.motherBoard && (
							<span className="user__property">
								{" "}
								{user.motherBoard.brand}-
								{user.motherBoard.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/motherBoard`
										: "/profile",
									name: "motherBoard",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.motherBoard
									? "update motherboard"
									: "add motherboard"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="ram">
				<h1 className="build__guide__title">RAM</h1>
				<div className="build__child">
					{user && user.ram && (
						<img src={user.ram.imageURL} alt="motherBoard" />
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.ram && (
							<span className="user__property">
								{" "}
								{user.ram.brand}-{user.ram.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/ram`
										: "/profile",
									name: "ram",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.ram
									? "update ram"
									: "add ram"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="gpu">
				<h1 className="build__guide__title">GPU</h1>
				<div className="build__child">
					{user && user.gpu && (
						<img src={user.gpu.imageURL} alt="gpu" />
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.gpu && (
							<span className="user__property">
								{" "}
								{user.gpu.brand}-{user.gpu.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/gpu`
										: "/profile",
									name: "gpu",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.gpu
									? "update gpu"
									: "add gpu"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="hdd">
				<h1 className="build__guide__title">HDD</h1>
				<div className="build__child">
					{user && user.hdd && (
						<img src={user.hdd.imageURL} alt="hdd" />
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.hdd && (
							<span className="user__property">
								{" "}
								{user.hdd.brand}-{user.hdd.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/hdd`
										: "/profile",
									name: "hdd",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.hdd
									? "update hdd"
									: "add hdd"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="ssd">
				<h1 className="build__guide__title">SSD</h1>
				<div className="build__child">
					{user && user.ssd && (
						<img src={user.ssd.imageURL} alt="ssd" />
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.ssd && (
							<span className="user__property">
								{" "}
								{user.ssd.brand}-{user.ssd.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/ssd`
										: "/profile",
									name: "ssd",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.ssd
									? "update ssd"
									: "add ssd"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="psu">
				<h1 className="build__guide__title">PSU</h1>
				<div className="build__child">
					{user && user.psu && (
						<img src={user.psu.imageURL} alt="psu" />
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.psu && (
							<span className="user__property">
								{" "}
								{user.psu.brand}-{user.psu.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/psu`
										: "/profile",
									name: "psu",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.psu
									? "update psu"
									: "add psu"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="coolingSystem">
				<h1 className="build__guide__title">COOLING SYSTEM</h1>
				<div className="build__child">
					{user && user.coolingSystem && (
						<img
							src={user.coolingSystem.imageURL}
							alt="coolingSystem"
						/>
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.coolingSystem && (
							<span className="user__property">
								{" "}
								{user.coolingSystem.brand}-
								{user.coolingSystem.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/coolingSystem`
										: "/profile",
									name: "coolingSystem",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.coolingSystem
									? "update coolingSystem"
									: "add coolingSystem"}
							</Link>
						}
					</div>
				</div>
			</section>
			<section className="build__guide" id="case">
				<h1 className="build__guide__title">CASE</h1>
				<div className="build__child">
					{user && user.case && (
						<img src={user.case.imageURL} alt="case" />
					)}
					<div className="build__guide__child">
						{isAuthenticated && user && user.case && (
							<span className="user__property">
								{" "}
								{user.case.brand}-{user.case.model}
							</span>
						)}
						{
							<Link
								to={{
									pathname: isAuthenticated
										? `/buildpc/${user?.uid}/case`
										: "/profile",
									name: "case",
									uid: user?.uid,
								}}
								className="select__item__btn"
							>
								<i className="fas fa-plus"></i>
								{isAuthenticated && user && user.case
									? "update case"
									: "add case"}
							</Link>
						}
					</div>
				</div>
			</section>
		</div>
	);
};

export default OwnPc;
