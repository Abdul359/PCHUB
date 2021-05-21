import React from "react";
import "./aboutus.css";

const AboutUs = () => {
	return (
		<div className="aboutus">
			<section className="aboutus__who">
				<h1 className="who__title">
					{" "}
					<i className="fas fa-user-friends"></i> WHO ARE WE ?
				</h1>
				<p className="who__info">
					We are a couple of engineering undergrads who are passionate
					about gaming and computers and building computers. We took
					this on as a project so that we might maybe help out a
					layman build his own PC, learn about all the parts that go
					in a PC and also the build instructions and the process
					behind it.
				</p>
			</section>
			<section className="who__mails">
				<h2 className="mail__title">
					{" "}
					<i className="fab fa-teamspeak"></i> Project team
				</h2>
				<div className="person">
					<a href="mailto:abdul.layeeq359@gmail.com">Abdul Layeeq</a>{" "}
					-{" "}
					<span>
						{" "}
						<i className="fas fa-code"></i>Web Developer{" "}
					</span>
				</div>
				<div className="person">
					<a href="mailto:koppularahul12@gmail.com">Rahul</a> -{" "}
					<span>
						<i className="fab fa-figma"></i> Web Designer
					</span>
				</div>
				<div className="person">
					<a href="mailto:dastaripranay@gmail.com">Pranay</a> -{" "}
					<span>
						<i className="fab fa-android"></i> Mobile App Developer
					</span>
				</div>
				<div className="person">
					<a href="mailto:aawaiz.ashraf18@ifheindia.org">
						Awaiz Ashraf
					</a>{" "}
					-{" "}
					<span>
						<i className="fas fa-code"></i> Web Developer
					</span>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
