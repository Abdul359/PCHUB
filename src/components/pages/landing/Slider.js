import React, { useEffect, useRef } from "react";
import "./slider.css";
import limage1 from "./images/limage1.jpg";

const Slider = () => {
	const originalIntervalRef = useRef();
	const resizeIntervalRef = useRef();
	useEffect(() => {
		const sliders = Array.from(document.querySelectorAll(".slider"));
		let slidersCount = sliders.length;
		const slider = document.querySelector(".slide__child");
		const slideGrandChild = document.querySelector(".slide__grand__child");
		let presentSelectedDot;
		let sliderWidth = slider.offsetWidth;
		const dots = document.querySelector(".dots");
		const dotClickHandle = (e, resize) => {
			clearInterval(originalIntervalRef.current);
			clearInterval(resizeIntervalRef.current);
			const dotsCount = Array.from(
				document.querySelectorAll(".dot__child")
			);
			if (!resize) {
				dotsCount.forEach((dot) => {
					if (dot.id === e.target.id) {
						dot.classList.add("selected__dot");
					} else {
						dot.classList.remove("selected__dot");
					}
				});
				presentSelectedDot = e.target.id;
				let translateWidth = -presentSelectedDot * sliderWidth;
				slideGrandChild.style.transform = `translateX(${translateWidth}px)`;
			} else {
				let translateWidth = 0;
				slideGrandChild.style.transform = `translateX(${translateWidth}px)`;
			}
		};
		const slideToFirst = () => {
			slideGrandChild.style.transform = `translateX(0px)`;
		};
		let intervalCount = 0;
		const handleResize = () => {
			clearInterval(originalIntervalRef.current);
			const slider = document.querySelector(".slide__child");
			sliderWidth = slider.offsetWidth;
			slideToFirst();
			dotClickHandle(slider, true);
			intervalCount = 0;
			// resizeIntervalRef.current = setInterval(sliderRider, 3000);
		};
		sliders.forEach((slider, index) => {
			const dotChild = document.createElement("div");
			dotChild.classList.add("dot__child");
			dotChild.id = index;
			dots.append(dotChild);
			dotChild.addEventListener("click", dotClickHandle);
		});
		const sliderRider = () => {
			const dotsCount = Array.from(
				document.querySelectorAll(".dot__child")
			);
			if (intervalCount < slidersCount) {
				dotsCount.forEach((dot) => {
					if (Number(dot.id) === Number(intervalCount)) {
						dot.classList.add("selected__dot");
					} else {
						dot.classList.remove("selected__dot");
					}
				});
				let translateWidth = -intervalCount * sliderWidth;
				slideGrandChild.style.transform = `translateX(${translateWidth}px)`;
				intervalCount++;
			} else {
				intervalCount = 0;
				dotsCount.forEach((dot) => {
					if (Number(dot.id) === Number(intervalCount)) {
						dot.classList.add("selected__dot");
					} else {
						dot.classList.remove("selected__dot");
					}
				});
				let translateWidth = -intervalCount * sliderWidth;
				slideGrandChild.style.transform = `translateX(${translateWidth}px)`;
				intervalCount++;
			}
		};
		// originalIntervalRef.current = setInterval(sliderRider, 3000);
		window.addEventListener("resize", handleResize);
		return () => {
			//eslint-disable-next-line
			clearInterval(originalIntervalRef.current);
			//eslint-disable-next-line
			clearInterval(resizeIntervalRef.current);
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const featuredRedirectHandle = () => {
		clearInterval(originalIntervalRef.current);
		clearInterval(resizeIntervalRef.current);
	};
	const featuredShowmoreHandle = () => {
		clearInterval(originalIntervalRef.current);
		clearInterval(resizeIntervalRef.current);
	};
	return (
		<div className="slide">
			<div className="slide__child">
				<div className="slide__grand__child">
					<section className="slider hero">
						<a
							className="hero__img"
							href="#!"
							onClick={featuredRedirectHandle}
						>
							<img src={limage1} alt="featured PC builds" />
							<h1 className="hero__title">I don't know </h1>
						</a>
						<article className="article__info">
							<h1 className="article__info__title">
								I don't know
							</h1>
							<ul className="article__info__list__collection">
								<li className="article__info__list__item">
									www.gmail.com
								</li>
								<li className="article__info__list__item">
									gmail.@gmail.com
								</li>
								<li className="article__info__list__item">
									beast intel i9 processor
								</li>
							</ul>
							<div className="article__info__btn__group">
								<a
									href="#!"
									className="article__info__btn"
									onClick={featuredShowmoreHandle}
								>
									Show more
								</a>
							</div>
						</article>
					</section>
					<section className="slider hero">
						<a
							className="hero__img"
							href="#!"
							onClick={featuredRedirectHandle}
						>
							<img src={limage1} alt="featured PC builds" />
							<h1 className="hero__title">I don't know </h1>
						</a>
						<article className="article__info">
							<h1 className="article__info__title">
								I don't know
							</h1>
							<ul className="article__info__list__collection">
								<li className="article__info__list__item">
									www.gmail.com
								</li>
								<li className="article__info__list__item">
									gmail.@gmail.com
								</li>
								<li className="article__info__list__item">
									beast intel i9 processor
								</li>
							</ul>
							<div className="article__info__btn__group">
								<a
									onClick={featuredShowmoreHandle}
									href="#!"
									className="article__info__btn"
								>
									Show more
								</a>
							</div>
						</article>
					</section>
					<section className="slider hero">
						<a
							className="hero__img"
							href="#!"
							onClick={featuredRedirectHandle}
						>
							<img src={limage1} alt="featured PC builds" />
							<h1 className="hero__title">I don't know </h1>
						</a>
						<article className="article__info">
							<h1 className="article__info__title">
								I don't know
							</h1>
							<ul className="article__info__list__collection">
								<li className="article__info__list__item">
									www.gmail.com
								</li>
								<li className="article__info__list__item">
									gmail.@gmail.com
								</li>
								<li className="article__info__list__item">
									beast intel i9 processor
								</li>
							</ul>
							<div className="article__info__btn__group">
								<a
									onClick={featuredShowmoreHandle}
									href="#!"
									className="article__info__btn"
								>
									Show more
								</a>
							</div>
						</article>
					</section>
					<section className="slider hero">
						<a
							className="hero__img"
							href="#!"
							onClick={featuredRedirectHandle}
						>
							<img src={limage1} alt="featured PC builds" />
							<h1 className="hero__title">I don't know </h1>
						</a>
						<article className="article__info">
							<h1 className="article__info__title">
								I don't know
							</h1>
							<ul className="article__info__list__collection">
								<li className="article__info__list__item">
									www.gmail.com
								</li>
								<li className="article__info__list__item">
									gmail.@gmail.com
								</li>
								<li className="article__info__list__item">
									beast intel i9 processor
								</li>
							</ul>
							<div className="article__info__btn__group">
								<a
									onClick={featuredShowmoreHandle}
									href="#!"
									className="article__info__btn"
								>
									Show more
								</a>
							</div>
						</article>
					</section>
					<section className="slider hero">
						<a
							className="hero__img"
							href="#!"
							onClick={featuredRedirectHandle}
						>
							<img src={limage1} alt="featured PC builds" />
							<h1 className="hero__title">I don't know </h1>
						</a>
						<article className="article__info">
							<h1 className="article__info__title">
								I don't know
							</h1>
							<ul className="article__info__list__collection">
								<li className="article__info__list__item">
									www.gmail.com
								</li>
								<li className="article__info__list__item">
									gmail.@gmail.com
								</li>
								<li className="article__info__list__item">
									beast intel i9 processor
								</li>
							</ul>
							<div className="article__info__btn__group">
								<a
									onClick={featuredShowmoreHandle}
									href="#!"
									className="article__info__btn"
								>
									Show more
								</a>
							</div>
						</article>
					</section>
					<section className="slider hero">
						<a
							className="hero__img"
							href="#!"
							onClick={featuredRedirectHandle}
						>
							<img src={limage1} alt="featured PC builds" />
							<h1 className="hero__title">I don't know </h1>
						</a>
						<article className="article__info">
							<h1 className="article__info__title">
								I don't know
							</h1>
							<ul className="article__info__list__collection">
								<li className="article__info__list__item">
									www.gmail.com
								</li>
								<li className="article__info__list__item">
									gmail.@gmail.com
								</li>
								<li className="article__info__list__item">
									beast intel i9 processor
								</li>
							</ul>
							<div className="article__info__btn__group">
								<a
									onClick={featuredShowmoreHandle}
									href="#!"
									className="article__info__btn"
								>
									Show more
								</a>
							</div>
						</article>
					</section>
				</div>
				<div className="dots"></div>
			</div>
		</div>
	);
};

export default Slider;
