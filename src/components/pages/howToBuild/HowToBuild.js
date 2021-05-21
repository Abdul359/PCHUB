import React from "react";
import "./howtobuild.css";

const HowToBuild = () => {
	return (
		<div className="howToBuild">
			<h1 className="howToBuild__title">How to build pc ?</h1>
			<div className="build__caution">
				<h4 className="build__info__labels build__info__labels__caution">
					Before you start:
				</h4>
				<p className="build__info__p build__info__p__caution">
					<i className="fas fa-exclamation-circle"></i>
					One of the first things to do is making sure all the
					components you buy actually, you know, work with each other.
				</p>
			</div>
			<p className="build__info__p">
				Also, don’t worry too much about getting the latest and
				greatest. Trying to extremely future-proofing your PC isn’t a
				very good idea; the most expensive components provide
				diminishing returns. You’re better off getting mid-to-high end
				components that offer more bang for your buck.
			</p>
			<h4 className="build__info__labels tools">
				<i className="fas fa-tools"></i>Tools needed:
			</h4>
			<p className="build__info__p">
				A screw driver set, a pair of scissors, cable ties, anti-static
				mat and maybe nose pliers and tweezers (optional).
			</p>
			<h4 className="build__info__labels build__info__labels__watch">
				<i className="fas fa-bell"></i>
				Things to watch out for:
			</h4>
			<p className="build__info__p">
				Static electricity and mishandling parts are your biggest
				enemies! Don’t force parts into their slots, if it’s meant to go
				in, it will go in.
			</p>
			<h3 className="build__info__labels build__info__labels__start">
				{" "}
				<i className="fas fa-hourglass-start"></i> Right, let’s get
				started:
			</h3>
			<p className="build__info__p">
				First, unbox the motherboard and use the box as a work surface
				in case you don’t have an anti-static mat. Then pull out the
				CPU, carefully of course. Line up the golden triangles on the
				CPU and the MB and place the CPU in the socket.
			</p>
			<p className="build__info__p">
				Clamp down the retention lever next to the socket, this locks
				the CPU in. BE VERY CAREFUL NOT TO BEND THE CPU PINS. Now go
				ahead and install the M.2 SSD if that’s what you went with.
				There might be a couple M.2 drive slots for drives of different
				lengths. You have to screw the end to the MB, teeny tiny screw
				so be careful. From here you can basically wing it depending on
				your components and their clearance. Install RAM into the RAM
				slots keeping in mind if you’re going for single or dual
				channel. Depending on that RAM stick go in different slots.
			</p>
			<p className="build__info__p">
				Now attach the CPU cooler on the socket, if its Intel it’s
				pretty easy, for AMD you need to install a bracket on the
				underside of the MB and then screw the cooler onto it. If your
				cooler comes with pre-applied thermal paste you can just install
				it if not apply a small drop of thermal paste and attach it.
			</p>
			<p className="build__info__p">
				At this point you can install the CPU into the case by taking
				off the side panels and screwing the MB onto the standoff pegs.
				Now comes the boring and important part of wiring everything up
				to the PSU outside the case, that way it’ll be easier to install
				the PSU to the case. Install the GPU into the proper slot in the
				MB and don’t forget to screw it to the back panel of the case.
			</p>
			<p className="build__info__p">
				Now we’re almost finished, wire everything up together, and
				install the hard drive if you have it. Plug in the front I/O and
				any RGB LED strips to the MB. We recommend cable managing right
				now and labelling the cables now itself so that any future
				maintenance will be easy.
			</p>
			<p className="build__info__p build__info__success">
				<span>Congrats :)</span> you just built your PC but don’t fix
				the panels just yet. Make sure it turns on and everything is
				fine, then plug in the display device and install the bios,
				check the CPU temps and if all the components are recognized.
				Install the OS and there you go.
			</p>
			<h2 className="gg__fun">
				GG, have fun<i className="fas fa-smile-wink"></i>{" "}
				<i className="far fa-smile-wink"></i>{" "}
			</h2>
		</div>
	);
};

export default HowToBuild;
