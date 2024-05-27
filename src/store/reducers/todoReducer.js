const initialState = {
	todos: [],
};
export const actionTypes = {
	ADD_TODO: "ADD_TODO",
	REMOVE_TODO: "REMOVE_TODO",
	EDIT_TODO: "EDIT_TODO",
	EDIT_VALUE: "EDITE_VALUE",
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case actionTypes.REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload),
			};

		case actionTypes.EDIT_TODO:
			console.log(action);
			return {
				...state,
				todos: state.todos.map((item) => {
					return item.id === action.payload
						? { ...item, isCompleted: !item.isCompleted }
						: item;
				}),
			};
		case actionTypes.EDIT_VALUE:
		
			return {
				...state,
				todos: state.todos.find((item) => item.id === id),
			};

		default:
			return state;
	}
};
