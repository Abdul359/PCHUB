import { useCallback, useContext } from "react";
import {
	CLEAR_INPROGRESS,
	RESET_PROGRESS,
	SET_INPROGRESS,
	SET_ISCOMPLETED,
} from "../types";
import BuildContext from "./BuildContext";

const useBuild = () => {
	const { state, dispatch } = useContext(BuildContext);
	const setPropertyToBeSelected = (propertyName, uid) => {
		dispatch({
			type: SET_INPROGRESS,
			payload: {
				propertyName,
				uid,
			},
		});
	};
	const onPropertySelected = (propertyName) => {
		dispatch({
			type: SET_ISCOMPLETED,
			payload: propertyName,
		});
	};
	const clearInProgress = () => {
		dispatch({
			type: CLEAR_INPROGRESS,
		});
	};
	const resetProgress = useCallback(() => {
		dispatch({
			type: RESET_PROGRESS,
		});
	}, [dispatch]);
	return {
		...state,
		setPropertyToBeSelected,
		onPropertySelected,
		clearInProgress,
		resetProgress,
	};
};

export default useBuild;
