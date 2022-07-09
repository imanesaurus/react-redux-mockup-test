import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.login);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};