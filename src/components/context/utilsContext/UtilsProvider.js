import React, { useMemo, useReducer } from "react";
import UtilsContext from "./UtilsContext";
import UtilsReducer from "./UtilsReducer";

const initialState = {
	loading: null,
	error: null,
	userName: null,
	modal: null,
	toaster: null,
	alert: null,
	toasterCount: 0,
};
const UtilsProvider = (props) => {
	const [state, dispatch] = useReducer(UtilsReducer, initialState);
	const value = useMemo(() => {
		return {
			state,
			dispatch,
		};
	}, [state]);
	return (
		<UtilsContext.Provider value={value}>
			{props.children}
		</UtilsContext.Provider>
	);
};

export default UtilsProvider;
