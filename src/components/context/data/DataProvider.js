import React, { useMemo, useReducer } from "react";
import DataReducer from "./DataReducer";
import DataContext from "./DataContext";

const initialState = {
	featured: [],
	coding: [],
	editing: [],
	gaming: [],
	cpu: [],
	motherBoard: [],
	ram: [],
	gpu: [],
	hdd: [],
	ssd: [],
	psu: [],
	coolingSystem: [],
	cases: [],
	peripherals: [],
};
// const initialState = {
// 	data: null,
// };
const DataProvider = (props) => {
	const [state, dispatch] = useReducer(DataReducer, initialState);
	const value = useMemo(() => {
		return {
			state,
			dispatch,
		};
	}, [state]);
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataProvider;
