import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import { isAuthenticated } from "./auth.routes";

const PrivateRoute = ({ path, element: Component, ...rest }) => (
    <Route {...rest} Component />
)

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <PrivateRoute path="/" component/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;