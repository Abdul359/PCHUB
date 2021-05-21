import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useUserContext from "../../context/user/useUserContext";
import pc_hub from "./images/pc_hub.svg";
import "./navbar.css";

const Navbar = () => {
	const location = useLocation();
	const [show, setShow] = useState(false);
	const { user, isAuthenticated } = useUserContext();
	useEffect(() => {
		let path = location.pathname;
		const regex = /^\/.*\//;
		function navURLFinder() {
			if (regex.test(path)) {
				const reg = regex.exec(path)[0];
				path = reg.replace(/\/$/, "");
				navURLFinder();
			} else {
				return;
			}
		}
		navURLFinder();
		const presentPath = path.replace(/^\//, "");
		const hamburger = document.querySelector(".hamburger");
		const navbarOptions = document.querySelector(".navbar__options");
		window.addEventListener("resize", (e) => {
			if (hamburger.classList.contains("open__ham")) {
				hamburger.classList.remove("open__ham");
				navbarOptions.classList.remove("open__nav");
			}
		});
		const navbarLinks = Array.from(
			document.querySelectorAll(".navbar__links")
		);
		const navLinks = Array.from(document.querySelectorAll(".nav__links"));
		navLinks.forEach((link, index) => {
			link.classList.remove("nav__focus");
			if (link.id === presentPath) {
				link.classList.add("nav__focus");
			}
			if (presentPath === "" && index === 0) {
				link.classList.add("nav__focus");
			}
		});
		navbarLinks.forEach((link, index) => {
			link.classList.remove("navbar__focus");
			if (link.id === presentPath) {
				link.classList.add("navbar__focus");
			}
			if (presentPath === "" && index === 0) {
				link.classList.add("navbar__focus");
			}
		});
		const navbarTransition = () => {
			if (window.scrollY >= 70) {
				setShow(true);
			} else {
				setShow(false);
			}
		};
		window.addEventListener("scroll", navbarTransition);
		return () => {
			window.removeEventListener("scroll", navbarTransition);
		};
	}, [location.pathname]);
	const toggleNav = () => {
		const hamburger = document.querySelector(".hamburger");
		hamburger.classList.toggle("open__ham");
		const navbarOptions = document.querySelector(".navbar__options");
		navbarOptions.classList.toggle("open__nav");
	};
	const handleRedirect = () => {
		const hamburger = document.querySelector(".hamburger");
		hamburger.classList.remove("open__ham");
		const navbarOptions = document.querySelector(".navbar__options");
		navbarOptions.classList.remove("open__nav");
	};
	return (
		<nav className={`navbar ${show && "show"}`}>
			<div className="navbar__logo">
				<a href="/">
					{" "}
					<img
						src={pc_hub}
						alt="PC_HUB"
						className="navbar__logo__img"
					/>
				</a>
			</div>
			<div className="navbar__options">
				<ul className="navbar__collection">
					<li className="navbar__items">
						<Link
							onClick={handleRedirect}
							to="/"
							id="/"
							className="navbar__links navbar__focus"
						>
							HOME
						</Link>
						<div className="rule"></div>
					</li>
					<li className="navbar__items">
						<Link
							onClick={handleRedirect}
							to="/aboutus"
							id="aboutus"
							className="navbar__links"
						>
							ABOUT US
						</Link>
						<div className="rule"></div>
					</li>
					<li className="navbar__items">
						<Link
							onClick={handleRedirect}
							to="/howtobuild"
							id="howtobuild"
							className="navbar__links"
						>
							HOW TO BUILD A PC
						</Link>
						<div className="rule"></div>
					</li>
					<li className="navbar__items">
						<Link
							onClick={handleRedirect}
							to="/buildpc"
							id="buildpc"
							className="navbar__links"
						>
							BUILD YOUR OWN PC
						</Link>
						<div className="rule"></div>
					</li>
					<li className="navbar__items">
						<Link
							onClick={handleRedirect}
							to="/contactus"
							id="contactus"
							className="navbar__links"
						>
							CONTACT US
						</Link>
						<div className="rule"></div>
					</li>
					<li className="navbar__items">
						<Link
							onClick={handleRedirect}
							to="/profile"
							id="profile"
							className="navbar__links profile"
						>
							{user && user?.photoURL?.imageURL && (
								<div
									className="navbar__profile__img"
									style={{
										backgroundImage: `url(${user?.photoURL?.imageURL})`,
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center",
										backgroundSize: "contain",
									}}
								></div>
							)}
							{!user || !user?.photoURL?.imageURL ? (
								<i className="far fa-user navbar__profile"></i>
							) : null}
							{!user && !isAuthenticated && "SIGN UP"}

							{user &&
								!user?.photoURL?.imageURL &&
								user.displayName}
						</Link>
					</li>
				</ul>
			</div>
			<a href="#!" className="hamburger" onClick={toggleNav}>
				<div className="bars"></div>
				<div className="bars"></div>
				<div className="bars"></div>
			</a>
			<ul className="nav__collection">
				<li className="nav__items nav__home">
					<Link id="/" to="/" className="nav__links nav__focus">
						HOME
					</Link>
					<div className="nav__rule"></div>
				</li>
				<li className="nav__items">
					<Link id="aboutus" to="/aboutus" className="nav__links">
						ABOUT US
					</Link>
					<div className="nav__rule"></div>
				</li>
				<li className="nav__items">
					<Link
						id="howtobuild"
						to="/howtobuild"
						className="nav__links"
					>
						HOW TO BUILD A PC
					</Link>
					<div className="nav__rule"></div>
				</li>
				<li className="nav__items">
					<Link id="buildpc" to="/buildpc" className="nav__links">
						BUILD YOUR OWN PC
					</Link>
					<div className="nav__rule"></div>
				</li>
				<li className="nav__items">
					<Link id="contactus" to="/contactus" className="nav__links">
						CONTACT US
					</Link>
					<div className="nav__rule"></div>
				</li>
				<li className="nav__items">
					<Link
						id="profile"
						to="/profile"
						className="nav__links profile "
					>
						{user && user?.photoURL?.imageURL && (
							<div
								className="nav__profile__img"
								style={{
									backgroundImage: `url(${user?.photoURL?.imageURL})`,
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
									backgroundSize: "contain",
								}}
							></div>
						)}
						{!user || !user?.photoURL?.imageURL ? (
							<i className="far fa-user nav__profile"></i>
						) : null}
						{!user && !isAuthenticated && "SIGN UP"}

						{user &&
							!user?.photoURL?.imageURL &&
							`${"...".padStart(8, user?.displayName)}`}
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
