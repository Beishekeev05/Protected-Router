import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../store/reducers/actions";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const BaseLayout = () => {
	const { todos } = useSelector((s) => s.todo || []);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const clearLocalStorage = () => {
		const confi = confirm("Вы точна хотите выйти");

		if (confi) {
			localStorage.clear();
			navigate("/signUp");
			dispatch(logout());
		}
	};

	return (
		<Container>
			<Header>
				<Logo>My App</Logo>
				<NavMenu>
					<StyledNavLink style={{ marginTop: "2px" }} to="todo">
						Main
					</StyledNavLink>
					<BadgeWrapper>
						<Badge
							onClick={() => navigate("/todo")}
							badgeContent={todos.length}
							color="success">
							<MailIcon color="red" />
						</Badge>
					</BadgeWrapper>
					<StyledNavLink style={{ marginTop: "2px" }} to="todo/create">
						Create new info
					</StyledNavLink>
					<LogoutButton
						style={{ fontWeight: "700" }}
						onClick={clearLocalStorage}>
						Logout
					</LogoutButton>
				</NavMenu>
			</Header>
			<Outlet />
		</Container>
	);
};

export default BaseLayout;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Header = styled.header`
	background-color: #333;
	color: #fff;
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-size: 1.5rem;
	margin: 0;
	flex-grow: 1;
`;

const NavMenu = styled.nav`
	display: flex;
	gap: 16px;
`;

const StyledNavLink = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	&.active {
		font-weight: bold;
	}
`;

const LogoutButton = styled.button`
	background-color: transparent;
	border: none;
	color: #fff;
	cursor: pointer;
`;

const BadgeWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;
