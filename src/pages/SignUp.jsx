import React from "react";
import FormaRegistr from "../components/UI/Forma";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
	const selector = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();

	const onSubmit = (param) => {};

	return (
		<div>
			<FormaRegistr onSubmit={onSubmit} data={selector} />
		</div>
	);
};

export default SignUp;
