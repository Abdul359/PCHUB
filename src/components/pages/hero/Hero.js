import React, { useRef, useEffect } from "react";
import useData from "../../context/data/useData";
import HeroSection from "./HeroSection";
import "./hero.css";

const Hero = () => {
	const originalIntervalRef = useRef();
	const resizeIntervalRef = useRef();
	const { featured } = useData();
	useEffect(() => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0;
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
			const dotsCount = Array.from(
				document.querySelectorAll(".dot__child")
			);
			dotsCount.forEach((eachDot) => {
				eachDot.classList.remove("selected__dot");
			});
			dotClickHandle(slider, true);
			intervalCount = 0;
			resizeIntervalRef.current = setInterval(sliderRider, 3000);
		};
		featured.forEach((featuredItem, index) => {
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
		originalIntervalRef.current = setInterval(sliderRider, 3000);
		window.addEventListener("resize", handleResize);
		return () => {
			clearInterval(originalIntervalRef.current);
			clearInterval(resizeIntervalRef.current);
			window.removeEventListener("resize", handleResize);
		};
	}, [featured]);
	return (
		<div className="slide slide-md">
			<div className="rectangle__top"></div>
			<div className="rectangle__bottom"></div>
			<div className="slide__child slide__child-md">
				<div className="slide__grand__child slide__grand__child-md">
					{featured &&
						featured.map((child) => {
							return <HeroSection key={child.uid} data={child} />;
						})}
				</div>
				<div className="dots"></div>
			</div>
		</div>
	);
};

export default Hero;
