import { Navigate } from "react-router-dom";
import Home from "../screens/Home";

const routes = [
    { path: "/home", exact: true, component: Home },
    { path: "/", exact: true, component: () => <Navigate to="/home" /> },
];

export { routes };
