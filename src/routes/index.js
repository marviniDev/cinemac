import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/auth";
import Movie from "../pages/Movies";
import Room from "../pages/Rooms";
import Sessiom from "../pages/Sessions";
import SignIn from "../pages/SignIn";
import PrivateRoutes from "./private.routes";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={SignIn} />
          <PrivateRoutes
            layout={Layout}
            exact={true}
            path="/app/filmes"
            component={Movie}
          />
          <PrivateRoutes
            layout={Layout}
            exact={true}
            path="/app/sessoes"
            component={Sessiom}
          />
          <PrivateRoutes
            layout={Layout}
            exact={true}
            path="/app/salas"
            component={Room}
          />
          <Route exact path="*" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
