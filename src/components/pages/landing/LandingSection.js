import React from "react";

const LandingSection = (props) => {
	const { data } = props;
	const { imageURL, name, description1, description2, description3, uid } =
		data;
	return (
		<section className="slider hero section">
			<article className="section__article">
				<a
					href={`featured/${uid}`}
					className="section__article__child__link"
				>
					<div
						className="section__article__child-1"
						style={{
							backgroundImage: `url(${imageURL})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
						}}
					>
						<h1 className="section__article__child-1__title">
							{name}
						</h1>
					</div>
				</a>
				<div className="section__article__child-2">
					<h1 className="section__article__child-2__title">
						{" "}
						{name}{" "}
					</h1>
					<ul className="section__article__collection">
						<li className="section__article__list__items">
							{" "}
							{description1}{" "}
						</li>
						<li className="section__article__list__items">
							{" "}
							{description2}{" "}
						</li>
						<li className="section__article__list__items">
							{" "}
							{description3}{" "}
						</li>
					</ul>
					<a href={`featured/${uid}`} className="showmore__btn">
						Show more
					</a>
				</div>
			</article>
		</section>
	);
};

export default LandingSection;
