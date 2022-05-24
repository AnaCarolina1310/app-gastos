import { Contenedor } from "../Contenedor/Contenedor";
import { useGetGastos } from "../../hooks/useGetGastos";
import { Lista } from "../Lista/Lista";
import "./listaGastos.css";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import { NavBar } from "../NavBar/NavBar";
import { eliminarGasto } from "../../Firebase/eliminarGasto";

export const ListaGastos = () => {
  const { gastos, getMasGastos, cargarMas } = useGetGastos();

  const modificarFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {
      locale: es,
    });
  };

  const compararFecha = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = modificarFecha(gasto.fecha.seconds);
      const fechaAnterior = modificarFecha(gastos[index - 1].fecha.seconds);
      if (fechaActual === fechaAnterior) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      <Contenedor>
        <NavBar primerLink={"/"} link={"Agregar gastos"} />
        <h2>Lista de gastos</h2>
        {gastos.length === 0 ? (
          <div className="contenedorAgregarGastos-">
            <p>No hay gastos cargados</p>
            <Link className="btn btn-primary" to="/">
              Agregar gasto
            </Link>
          </div>
        ) : (
          <div className="container">
            {gastos.map((gasto, index) => {
              return (
                <Lista
                  eliminarGasto={() => {
                    eliminarGasto(gasto.id);
                  }}
                  key={gasto.id}
                  descripcion={gasto.descripcion}
                  importe={gasto.importe}
                  categoria={gasto.categoria}
                  gasto={gasto}
                  id={gasto.id}
                  fecha={modificarFecha(gasto.fecha.seconds)}
                  comparacionFecha={compararFecha(gastos, index, gasto)}
                />
              );
            })}
            {cargarMas ? (
              <div className="botonCargarMas">
                <button className="btn btn-primary m-3" onClick={getMasGastos}>
                  Cargar mas
                </button>
              </div>
            ) : (
              <div className="botonCargarMas">
                <Link to="/categoria" className="btn btn-primary m-3">
                  Ver totales por categoria
                </Link>
              </div>
            )}
          </div>
        )}
      </Contenedor>
    </>
  );
};
