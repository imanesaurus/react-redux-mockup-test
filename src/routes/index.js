import Home from "../screens/home";
import Login from "../screens/login";
import { ProtectedRoute } from "./ProtectedRoute";

const routes = [
    { path: "/", exact: true, element: () => (
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    ) },
    { path: "/login", exact: true, element: () => <Login /> }
];

export { routes };
