import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
	todo: todoReducer,
	auth: authReducer,
});

export const store = createStore(rootReducer);
