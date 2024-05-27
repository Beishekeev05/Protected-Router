import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionTypes } from "../store/reducers/todoReducer";

const MainPage = () => {
	const todos = useSelector((state) => state.todo.todos || []);
	const dispatch = useDispatch();
	const [date, setDate] = useState([]);
	const [openClose, setOpenClose] = useState(false);
	const onClose = () => {
		setOpenClose(false);
	};
	const onOpen = () => {
		setOpenClose(true);
	};
	return (
		<div>
			<Table>
				<thead>
					<tr>
						<Th>№</Th>
						<Th>Ваши задачи</Th>
						<Th>Закончено</Th>
						<Th>Удалить</Th>
					</tr>
				</thead>
				<tbody>
					{todos.length > 0 ? (
						todos.map((item, index) => (
							<Tr key={item.id}>
								<Td>{index + 1}</Td>
								<Td
									style={{
										textDecoration: item.isCompleted ? "line-through" : "",
									}}>
									{item.title}
								</Td>
								<Td>
									<Button
										onClick={() =>
											dispatch({
												type: actionTypes.EDIT_TODO,
												payload: item.id,
											})
										}
										style={{ backgroundColor: "blue" }}>
										{item.isCompleted ? "Закончено" : "Не Закончено"}
									</Button>
								</Td>

								<Td>
									<Button
										onClick={() =>
											dispatch({
												type: actionTypes.REMOVE_TODO,
												payload: item.id,
											})
										}
										style={{ backgroundColor: "red" }}>
										Удалить
									</Button>
								</Td>
							</Tr>
						))
					) : (
						<Tr>
							<Td colSpan="5">No todos available</Td>
						</Tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default MainPage;

const Table = styled.table`
	width: 100%;
	position: relative;
	border-collapse: collapse;
`;

const Th = styled.th`
	border: 1px solid #ddd;
	padding: 8px;
	background-color: #f2f2f2;
	text-align: center;
`;
const Button = styled.button`
	padding: 6px 16px;
	border: none;
	color: white;
	border-radius: 3px;
`;

const Td = styled.td`
	border: 1px solid #ddd;
	padding: 8px;
	text-align: center;
`;

const Tr = styled.tr`
	&:nth-child(even) {
		background-color: #f9f9f9;
	}

	&:hover {
		background-color: #ddd;
	}
`;
