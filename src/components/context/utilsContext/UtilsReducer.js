import {
	CLEAR_DISPLAYNAME,
	CLEAR_ERROR,
	CLEAR_LOADING,
	CLOSE_MODAL,
	INCREMENT_TOASTER_COUNT,
	OPEN_MODAL,
	REMOVE_AlERT,
	REMOVE_TOASTER,
	SET_DISPLAYNAME,
	SET_ERROR,
	SET_LOADING,
	SHOW_ALERT,
	SHOW_TOASTER,
} from "../types";

const UtilsReducer = (state, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: {
					isLoading: true,
					message: action.payload,
				},
			};
		case CLEAR_LOADING:
			return {
				...state,
				loading: null,
			};
		case SET_DISPLAYNAME:
			return {
				...state,
				userName: {
					displayName: action.payload,
					isDisplayName: true,
				},
			};
		case CLEAR_DISPLAYNAME:
			return {
				...state,
				name: null,
			};
		case OPEN_MODAL:
			return {
				...state,
				modal: {
					isOpen: true,
					data: action.payload,
				},
			};
		case CLOSE_MODAL:
			return {
				...state,
				modal: null,
			};
		case SHOW_TOASTER:
			return {
				...state,
				toaster: {
					isOpen: true,
					message: action.payload,
				},
			};
		case REMOVE_TOASTER:
			return {
				...state,
				toaster: null,
			};
		case INCREMENT_TOASTER_COUNT:
			return {
				...state,
				toasterCount: state.toasterCount + 1,
			};
		case SHOW_ALERT:
			return {
				...state,
				alert: {
					isOpen: true,
					data: { ...action.payload },
				},
			};
		case REMOVE_AlERT:
			return {
				...state,
				alert: null,
			};
		default:
			return state;
	}
};

export default UtilsReducer;
