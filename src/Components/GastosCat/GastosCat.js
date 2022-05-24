import { Contenedor } from "../Contenedor/Contenedor";
import "./gastosCat.css";
import { useGastosMesCategoria } from "../../hooks/useGetGastosCategoria";
import { funcionMoneda } from "../../helpers/funcionMoneda";
import { ListGroup } from "react-bootstrap";
import { NavBar } from "../NavBar/NavBar";

export const GastosCat = () => {
  const gastosMesCategorias = useGastosMesCategoria();
  return (
    <>
      <Contenedor>
        <NavBar primerLink={"/lista"} link={"Lista de gastos"} />
        <ListGroup variant="flush">
          {gastosMesCategorias.map((elemento) => {
            return (
              <div key={elemento.categoria}>
                <ListGroup.Item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "transparent",
                  }}
                >
                  <p>{elemento.categoria}</p>
                  <p>
                    <b>{funcionMoneda(elemento.importe)}</b>
                  </p>
                </ListGroup.Item>
              </div>
            );
          })}
        </ListGroup>
      </Contenedor>
    </>
  );
};
