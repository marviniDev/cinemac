import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import PrivateRoute from './private.routes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<PrivateRoute />}>
                    <Route path='' element={<Dashboard/>}/>
                    <Route path='' element={<Error/>}/>
                </Route>
                <Route path="/" element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;