import { useCallback, useContext } from "react";
import {
	CLEAR_ERROR,
	SET_ERROR,
	SET_LOADING,
	CLEAR_LOADING,
	SET_DISPLAYNAME,
	CLEAR_DISPLAYNAME,
	OPEN_MODAL,
	CLOSE_MODAL,
	SHOW_TOASTER,
	REMOVE_TOASTER,
	SHOW_ALERT,
	REMOVE_AlERT,
	INCREMENT_TOASTER_COUNT,
} from "../types";
import UtilsContext from "./UtilsContext";

const useUtilsContext = () => {
	const { state, dispatch } = useContext(UtilsContext);
	const setError = (error) => {
		clearLoading();
		dispatch({
			type: SET_ERROR,
			payload: error,
		});
	};
	const clearError = () => {
		dispatch({
			type: CLEAR_ERROR,
		});
	};
	const setLoading = useCallback(
		(message) => {
			dispatch({
				type: SET_LOADING,
				payload: message,
			});
		},
		[dispatch]
	);
	const clearLoading = useCallback(() => {
		dispatch({
			type: CLEAR_LOADING,
		});
	}, [dispatch]);

	const setDisplayName = (name) => {
		if (name) {
			dispatch({
				type: SET_DISPLAYNAME,
				payload: name,
			});
		}
	};
	const clearDisplayName = () => {
		dispatch({
			type: CLEAR_DISPLAYNAME,
		});
	};
	const openModal = (data) => {
		dispatch({
			type: OPEN_MODAL,
			payload: data,
		});
	};
	const closeModal = () => {
		dispatch({
			type: CLOSE_MODAL,
		});
	};
	const showToaster = (message) => {
		dispatch({
			type: SHOW_TOASTER,
			payload: message,
		});
	};
	const incrementToasterCount = () => {
		dispatch({
			type: INCREMENT_TOASTER_COUNT,
		});
	};
	const removeToaster = () => {
		dispatch({
			type: REMOVE_TOASTER,
		});
	};
	const showAlert = (propertyName, updatedProperty, updatingProperty) => {
		dispatch({
			type: SHOW_ALERT,
			payload: { propertyName, updatedProperty, updatingProperty },
		});
	};
	const removeAlert = () => {
		dispatch({
			type: REMOVE_AlERT,
		});
	};
	return {
		...state,
		setError,
		clearError,
		setLoading,
		clearLoading,
		setDisplayName,
		clearDisplayName,
		openModal,
		closeModal,
		showToaster,
		removeToaster,
		showAlert,
		removeAlert,
		incrementToasterCount,
	};
};

export default useUtilsContext;
