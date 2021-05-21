import { USER_LOGIN, USER_LOGOUT, USER_STATE_CHANGE } from "../types";

const UserReducer = (state, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			};
		case USER_LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};
		case USER_STATE_CHANGE:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default UserReducer;
