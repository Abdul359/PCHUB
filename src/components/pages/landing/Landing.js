import React from "react";
import useData from "../../context/data/useData";
import Hero from "../hero/Hero";
import Prebuilds from "./Prebuilds";

const Landing = () => {
	const { gaming, coding, editing, featured } = useData();
	return (
		<>
			{featured && <Hero />}
			{gaming && <Prebuilds preBuilds={gaming} title="gaming" />}
			{coding && <Prebuilds preBuilds={coding} title="coding" />}
			{editing && <Prebuilds preBuilds={editing} title="editing" />}
			<a href="/allpcbuildproperties" className="show__all">
				See more
			</a>
		</>
	);
};

export default Landing;
