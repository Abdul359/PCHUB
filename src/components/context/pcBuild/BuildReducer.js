import {
	SET_INPROGRESS,
	CLEAR_INPROGRESS,
	SET_ISCOMPLETED,
	RESET_PROGRESS,
} from "../types";

const BuildReducer = (state, action) => {
	switch (action.type) {
		case SET_INPROGRESS:
			return {
				...state,
				inProgress: {
					status: true,
					toBeSelected: action.payload.propertyName,
					uid: action.payload.uid,
				},
			};
		case SET_ISCOMPLETED:
			return {
				...state,
				isCompleted: {
					status: true,
					propertyName: action.payload,
				},
			};
		case CLEAR_INPROGRESS:
			return {
				...state,
				inProgress: null,
			};
		case RESET_PROGRESS:
			return {
				...state,
				inProgress: null,
				isCompleted: null,
			};
		default:
			return state;
	}
};

export default BuildReducer;
