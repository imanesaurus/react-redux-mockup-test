import { Navigate } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";

const routes = {
    main: [
        { path: "/home", exact: true, element: () => <Home /> },
        { path: "/", exact: true, element: () => <Navigate to={"/home"} /> },
    ],
    login: [
        { path: "/login", exact: true, element: () => <Login /> },
        { path: "/", exact: true, element: () => <Navigate to={"/login"} /> }
    ]
};

export { routes };
