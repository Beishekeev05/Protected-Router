const initialState = {
	isAuthenticated: localStorage.getItem("auth") === "true" || false,
	user: null,
};
const actionsTypes = {
	LOGIN: "LOGIN",
	LOGOUT: "LOGOUT",
};



export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.LOGIN:
			console.log(state.isAuthenticated);

			localStorage.setItem("auth", "true");
			return {
				...state,
				isAuthenticated: true,
			};
		case actionsTypes.LOGOUT:
			localStorage.setItem("auth", "false");
			return {
				...state,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};
