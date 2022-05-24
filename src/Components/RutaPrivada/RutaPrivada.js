import { useAuth } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

export const RutaPrivada = ({ children }) => {
  const { usuario } = useAuth();

  if (usuario) {
    return children;
  } else {
    return <Navigate replace to="/inicio" />;
  }
};
