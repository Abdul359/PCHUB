import React, { useMemo, useReducer } from "react";
import BuildContext from "./BuildContext";
import BuildReducer from "./BuildReducer";

const initialState = {
	inProgress: null,
	isCompleted: null,
};
const BuildProvider = (props) => {
	const [state, dispatch] = useReducer(BuildReducer, initialState);
	const value = useMemo(() => {
		return {
			state,
			dispatch,
		};
	}, [state]);
	return (
		<BuildContext.Provider value={value}>
			{props.children}
		</BuildContext.Provider>
	);
};

export default BuildProvider;
