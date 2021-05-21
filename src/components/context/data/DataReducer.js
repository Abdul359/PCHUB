import {
	GET_CASE_DATA,
	GET_CODING_DATA,
	GET_COOLING_SYSTEM_DATA,
	GET_CPU_DATA,
	GET_EDITING_DATA,
	GET_FEATURED_DATA,
	GET_GAMING_DATA,
	GET_RAM_DATA,
	GET_GPU_DATA,
	GET_HDD_DATA,
	GET_MOTHERBOARD_DATA,
	GET_PERIPHERALS_DATA,
	GET_PSU_DATA,
	GET_SSD_DATA,
} from "../types";

const DataReducer = (state, action) => {
	switch (action.type) {
		case GET_FEATURED_DATA:
			return {
				...state,
				featured: action.payload,
			};
		case GET_CODING_DATA:
			return {
				...state,
				coding: action.payload,
			};
		case GET_EDITING_DATA:
			return {
				...state,
				editing: action.payload,
			};
		case GET_GAMING_DATA:
			return {
				...state,
				gaming: action.payload,
			};
		case GET_CPU_DATA:
			return {
				...state,
				cpu: action.payload,
			};
		case GET_MOTHERBOARD_DATA:
			return {
				...state,
				motherBoard: action.payload,
			};
		case GET_RAM_DATA:
			return {
				...state,
				ram: action.payload,
			};
		case GET_GPU_DATA:
			return {
				...state,
				gpu: action.payload,
			};
		case GET_HDD_DATA:
			return {
				...state,
				hdd: action.payload,
			};
		case GET_SSD_DATA:
			return {
				...state,
				ssd: action.payload,
			};
		case GET_PSU_DATA:
			return {
				...state,
				psu: action.payload,
			};
		case GET_COOLING_SYSTEM_DATA:
			return {
				...state,
				coolingSystem: action.payload,
			};
		case GET_CASE_DATA:
			return {
				...state,
				cases: action.payload,
			};
		case GET_PERIPHERALS_DATA:
			return {
				...state,
				peripherals: action.payload,
			};

		default:
			return state;
	}
};

export default DataReducer;
