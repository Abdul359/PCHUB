import React, { useMemo, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const initialState = {
	isAuthenticated: null,
	user: null,
	error: null,
};
const UserProvider = (props) => {
	const [state, dispatch] = useReducer(UserReducer, initialState);
	const value = useMemo(() => {
		return { state, dispatch };
	}, [state]);

	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
