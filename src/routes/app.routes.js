import { BrowserRouter, Switch } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Rooms from "../pages/Roons";
import Layout from "../components/Layout";
import AppRouters from "./AppRouters";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AppRouters exact path="/" component={SignIn} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;