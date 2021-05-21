import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useData from "../../context/data/useData";
import useBuild from "../../context/pcBuild/useBuild";
import {
	GET_CASE_DATA,
	GET_COOLING_SYSTEM_DATA,
	GET_CPU_DATA,
	GET_GPU_DATA,
	GET_HDD_DATA,
	GET_MOTHERBOARD_DATA,
	GET_PERIPHERALS_DATA,
	GET_PSU_DATA,
	GET_RAM_DATA,
	GET_SSD_DATA,
} from "../../context/types";
import useUtilsContext from "../../context/utilsContext/useUtilsContext";
import Alert from "../../utils/alert/Alert";
import Modal from "../../utils/modal/Modal";
import Toaster from "../../utils/toaster/Toaster";
import SelectedProperty from "./SelectedProperty";

const BuildPc = (props) => {
	const history = useHistory();
	const {
		getData,
		cpu,
		motherBoard,
		ram,
		gpu,
		hdd,
		ssd,
		psu,
		coolingSystem,
		cases,
		peripherals,
	} = useData();
	const { scrollIntoViewElement } = props;
	const { setPropertyToBeSelected, isCompleted, clearInProgress } =
		useBuild();
	const {
		setLoading,
		clearLoading,
		modal,
		toaster,
		removeToaster,
		alert,
		showToaster,
		toasterCount,
		incrementToasterCount,
	} = useUtilsContext();
	useEffect(() => {
		if (isCompleted) {
			clearInProgress();
			history.push("/buildpc");
		}
		if (!isCompleted) {
			setLoading("Please wait...");
			getData("cpu", GET_CPU_DATA);
			getData("motherBoard", GET_MOTHERBOARD_DATA);
			getData("ram", GET_RAM_DATA);
			getData("graphicsCard", GET_GPU_DATA);
			getData("hdd", GET_HDD_DATA);
			getData("ssd", GET_SSD_DATA);
			getData("psu", GET_PSU_DATA);
			getData("coolingSystem", GET_COOLING_SYSTEM_DATA);
			getData("case", GET_CASE_DATA);
			getData("peripherals", GET_PERIPHERALS_DATA);
			clearLoading();
		}
		let scrollToElement;
		if (toasterCount === 0 && cpu.length > 0) {
			setTimeout(() => {
				showToaster("Press SHIFT and scroll to see more");
				incrementToasterCount();
			}, 2000);
		}
		if (
			scrollIntoViewElement &&
			cpu.length > 0 &&
			props?.location?.name &&
			!isCompleted
		) {
			const { name, uid } = props?.location;
			scrollToElement = document.querySelector(`.${name}__section`);
			setPropertyToBeSelected(name, uid);
			Array.from(document.querySelectorAll(`.property__section`)).forEach(
				(element) => {
					if (
						element.classList.contains(
							`${props.location.name}__section`
						)
					) {
						return;
					}
					element.style.opacity = "0.1";
					element.style.pointerEvents = "none";
				}
			);
			scrollToElement.style.borderBottom = "1px solid rosybrown";
			scrollToElement.style.borderTop = "1px solid rosybrown";
			scrollToElement.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
			const highlightTitle = document.querySelector(
				`.${props?.location?.name}__title`
			);
			highlightTitle.textContent = `Please select ${props?.location?.name}`;
			highlightTitle.style.color = "rosybrown";
		}
		if (props.location && props.location.pathname) {
			const { pathname, name, uid } = props.location;
			if (pathname.length > 0 && !name && !uid) {
				history.push("/howtobuild");
			}
		}

		if (toaster?.isOpen) {
			setTimeout(() => {
				removeToaster();
			}, 5000);
		}
		//eslint-disable-next-line
	}, [cpu.length, toasterCount, scrollIntoViewElement, toaster, isCompleted]);
	return (
		<div>
			{toaster && toaster?.isOpen && (
				<Toaster message={toaster?.message} />
			)}
			{alert && alert?.isOpen && <Alert data={alert?.data} />}
			{cpu.length > 0 && (
				<>
					<SelectedProperty selected="cpu" properties={cpu} />
					<SelectedProperty
						selected="motherBoard"
						properties={motherBoard}
					/>
					<SelectedProperty selected="ram" properties={ram} />
					<SelectedProperty selected="gpu" properties={gpu} />
					<SelectedProperty selected="hdd" properties={hdd} />
					<SelectedProperty selected="ssd" properties={ssd} />
					<SelectedProperty selected="psu" properties={psu} />
					<SelectedProperty
						selected="coolingSystem"
						properties={coolingSystem}
					/>
					<SelectedProperty selected="case" properties={cases} />
					<SelectedProperty
						selected="peripherals"
						properties={peripherals}
					/>
					{modal && modal.isOpen && <Modal />}
				</>
			)}
		</div>
	);
};

export default BuildPc;
