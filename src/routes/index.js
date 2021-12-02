import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Movies from "../pages/Movies";
import Rooms from "../pages/Roons";
import PrivateRoutes from "./private.routes";
import { AuthProvider } from "../contexts/auth";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <PrivateRoutes exact={true} path="/app" component={Movies} />
                    <PrivateRoutes exact={true} path="/app/filmes" component={Rooms} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRoutes;