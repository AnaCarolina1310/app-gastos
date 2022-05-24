import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cerrarSeccion = onAuthStateChanged(auth, (usuario) => {
      setUsuario(usuario);
      setLoading(false);
    });
    return cerrarSeccion;
  }, []);
  console.log(usuario);
  return (
    <AuthContext.Provider value={{ usuario: usuario }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
