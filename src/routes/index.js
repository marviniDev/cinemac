import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Movies from "../pages/Movies";
import Sessions from "../pages/Sessions";
import Rooms from "../pages/Roons";
import PrivateRoutes from "./private.routes";
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/auth";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <PrivateRoutes layout={Layout} exact={true} path="/app/filmes" component={Movies} />
                    <PrivateRoutes layout={Layout} exact={true} path="/app/sessoes" component={Sessions} />
                    <PrivateRoutes layout={Layout} exact={true} path="/app/salas" component={Rooms} />
                    <Route exact path="*" component={SignIn} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRoutes;