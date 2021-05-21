import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./errorPage.css";

const ErrorPage = () => {
	const location = useLocation();
	const [urlPath, setUrlPath] = useState("");
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
		const navbarLinks = Array.from(
			document.querySelectorAll(".navbar__links")
		);
		navbarLinks.forEach((link) => {
			if (link.id === presentPath) {
				setUrlPath(presentPath);
			}
		});
	}, [location.pathname]);
	return (
		<section className="error__page">
			<h1 className="error__page__title">
				Page not found <i className="fas fa-exclamation-triangle"></i>{" "}
			</h1>
			<p className="error__page__message">
				{" "}
				Looks like page you are searching for
				<span className="error__page__link">{`"${location.pathname}"`}</span>
				is not found !!!
			</p>
			<p className="error__page__redirect">
				Suggested link :-
				{urlPath ? (
					<a className="error__redirect" href={`/${urlPath}`}>
						{urlPath}
					</a>
				) : (
					<a className="error__redirect" href="/">
						Home
					</a>
				)}
			</p>
			<p className="error__page__redirect-more">
				More links :-
				<a className="error__redirect-more" href="/howtobuild">
					how to build,
				</a>
				<a className="error__redirect-more" href="/buildpc">
					buildpc,
				</a>
				<a className="error__redirect-more" href="/contactus">
					contact us
				</a>
			</p>
		</section>
	);
};

export default ErrorPage;
