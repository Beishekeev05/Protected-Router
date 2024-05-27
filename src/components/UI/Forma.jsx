import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/actions";
import { useNavigate } from "react-router-dom";

const FormaRegistr = ({ onSubmit }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordRep, setPassowrdRep] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		const newData = {
			email,
			password,
			passwordRep,
			id: Math.floor(Math.random() * 1000),
		};

		onSubmit(newData);
		dispatch(login());
		navigate("/todo");

		setPassowrdRep("");
		setEmail("");
		setPassword("");
	};

	return (
		<Container maxWidth="sm">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					mt: 8,
				}}>
				<Typography component="h1" variant="h5">
					Регистрация
				</Typography>
				<Box
					onSubmit={submitHandler}
					component="form"
					noValidate
					sx={{ mt: 3 }}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						label="Email"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						value={password}
						name="password"
						label="Пароль"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						value={passwordRep}
						fullWidth
						onChange={(e) => setPassowrdRep(e.target.value)}
						name="confirmPassword"
						label="Подтвердите пароль"
						type="password"
						id="confirmPassword"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						disabled={passwordRep.length < 8}
						sx={{ mt: 3, mb: 2 }}>
						Регистрация
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default FormaRegistr;
