import React from "react";
import EachBuild from "./EachBuild";
import "./prebuilds.css";

const Prebuilds = ({ preBuilds, title }) => {
	return (
		<div className="prebuilds">
			<h1 className="prebuilds__title"> {title} Builds </h1>
			<div className="prebuilds__child">
				{preBuilds &&
					preBuilds.map((build) => {
						return (
							<EachBuild key={build.uid} type={title}>
								{build}
							</EachBuild>
						);
					})}
			</div>
		</div>
	);
};

export default Prebuilds;
