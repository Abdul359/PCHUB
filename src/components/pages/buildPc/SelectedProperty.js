import React from "react";
import EachProperty from "./EachProperty";
import "./selectedProperty.css";

const SelectedProperty = (props) => {
	const { selected, properties } = props;
	return (
		<section className={`property__section ${selected}__section`}>
			{properties && (
				<h1 className={`property__section__title ${selected}__title`}>
					{" "}
					{selected}{" "}
				</h1>
			)}
			<div className="property__section__fader">
				<div className="scroll__fader"></div>
				<div className="property__section__child">
					{properties &&
						properties.map((property) => {
							return (
								<EachProperty
									key={property.uid}
									property={property}
									selected={selected}
								/>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default SelectedProperty;
