import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioSeccion } from "../InicioSeccion/InicioSeccion";
import { RegistroDeUsuarios } from "../RegistroDeUsuarios/RegistroDeUsuarios";
import { ListaGastos } from "../ListaGastos/ListaGastos";
import { GastosCat } from "../GastosCat/GastosCat";
import { AgregarGasto } from "../AgregarGasto/AgregarGasto";
import { AuthProvider } from "../../Context/AuthContext";
import { RutaPrivada } from "../RutaPrivada/RutaPrivada";
import { TotalGastadoMensualProvider } from "../../Context/TotalGastado";
export const AppGastos = () => {
  return (
    <>
      <AuthProvider>
        <TotalGastadoMensualProvider>
          <Router>
            <Routes>
              <Route path="/inicio" element={<InicioSeccion />}></Route>
              <Route path="/registro" element={<RegistroDeUsuarios />}>
                {" "}
              </Route>

              <Route
                path="/lista"
                element={
                  <RutaPrivada>
                    <ListaGastos />
                  </RutaPrivada>
                }
              ></Route>

              <Route
                path="/categoria"
                element={
                  <RutaPrivada>
                    <GastosCat />
                  </RutaPrivada>
                }
              ></Route>

              <Route
                path="/"
                element={
                  <RutaPrivada>
                    <AgregarGasto />
                  </RutaPrivada>
                }
              ></Route>
            </Routes>
          </Router>
        </TotalGastadoMensualProvider>
      </AuthProvider>
    </>
  );
};
