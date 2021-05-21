import React from "react";
import "./contactus.css";

const ContactUs = () => {
	return (
		<section className="contactus">
			<div className="contactus__address">
				<h1 className="address__title">
					<i className="fas fa-map-marked"></i> Address
				</h1>
				<div className="contactus__info">
					<div className="contactus__info__child">
						<span className="contactus__info__key">H-NO: </span>
						<span className="contactus__info__value">3-06</span>
					</div>

					<div className="contactus__info__child">
						<span className="contactus__info__key">Street: </span>
						<span className="contactus__info__value">
							Galaxy Appartments, BJ Road band stand
						</span>
					</div>
					<div className="contactus__info__child">
						<span className="contactus__info__key">city: </span>
						<span className="contactus__info__value">
							Bandra west, mumbai
						</span>
					</div>
				</div>
			</div>
			<div className="contactus__socials">
				<h1 className="socials__title">
					{" "}
					<i className="fas fa-users"></i> Socials
				</h1>
				<div className="socials__info">
					<div className="socials__info__child">
						<span className="socials__info__key">Email: </span>
						<span className="socials__info__value">
							selmon@gmail.com
						</span>
					</div>
					<div className="socials__info__handles">
						<a href="https://www.instagram.com/beingsalmankhan/?hl=en">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https://www.facebook.com/BeingSalmanKhan">
							<i className="fab fa-facebook-f"></i>
						</a>
						<i className="fab fa-whatsapp"></i>
						<i className="fab fa-snapchat-ghost"></i>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
