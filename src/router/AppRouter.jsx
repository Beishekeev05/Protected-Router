import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import MainPage from "../pages/MainPage";
import PrivateRouter from "./PrivateRouter";
import SignUp from "../pages/SignUp";
import BaseLayout from "../layout/BaseLayout";
import CreatePage from "../pages/CreatePage";
import { useSelector } from "react-redux";

const AppRouter = () => {
	const { isAuthenticated } = useSelector((s) => s.auth);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<PrivateRouter
					fallBackPath="/signUp"
					Component={<BaseLayout />}
					isAuth={isAuthenticated}
				/>
			),
			children: [
				{ index: true, element: <Navigate to="/todo" replace /> },
				{ path: "todo", element: <MainPage /> },
				{ path: "todo/create", element: <CreatePage /> },
			],
		},
		{
			path: "/signUp",
			element: isAuthenticated ? <Navigate to="/" /> : <SignUp />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;
