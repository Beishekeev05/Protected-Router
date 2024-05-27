import { Navigate } from "react-router-dom";

const PrivateRouter = ({ Component, fallBackPath, isAuth }) => {
	return !isAuth ? <Navigate to={fallBackPath} replace /> : Component;
};

export default PrivateRouter;
