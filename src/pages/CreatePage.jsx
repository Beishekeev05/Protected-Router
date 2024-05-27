import React, { useState } from "react";
import { TextField, IconButton, Slide } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../store/reducers/todoReducer";
import { useNavigate } from "react-router-dom";

const TodoInput = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const selector = useSelector((s) => s.todo.todos);
	console.log(selector);
	const navigatet = useNavigate();
	const handleTextChange = (event) => {
		setText(event.target.value);
	};

	const handleAddClick = () => {
		const newValue = {
			title: text.trim(),
			id: Math.floor(Math.random() * 1000),
			isCompleted: false,
		};
		dispatch({ type: actionTypes.ADD_TODO, payload: newValue });
		navigatet("/todo");
		setText("");
	};

	return (
		<Slide direction="right" in={true} mountOnEnter unmountOnExit>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					maxWidth: 400,
					margin: "20px auto",
				}}>
				<TextField
					label="Add Todo"
					variant="outlined"
					value={text}
					onChange={handleTextChange}
					sx={{ mr: 1, width: "100%" }}
				/>
				<IconButton onClick={handleAddClick}>
					<AddCircle />
				</IconButton>
			</div>
		</Slide>
	);
};

export default TodoInput;
