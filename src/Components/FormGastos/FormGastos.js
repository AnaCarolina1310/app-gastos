import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Alerta } from "../Alerta/Alerta";
import "./formGasto.css";
import { Categorias } from "../Categorias/Categorias";

export const FormGasto = ({
  handleChange,
  setAlerta,
  tipo,
  setTipo,
  alerta,
  mensajeAlerta,
  descripcion,
  categoria,
  handleSubmit,
  setCategoria,
  valor,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <form onSubmit={handleSubmit} className="formGasto">
      <div className="dayPicker">
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
        />

        <input
          className="inputFecha"
          type="text"
          name="fecha"
          placeholder="Fecha"
          id="fecha"
          value={`Fecha: ${
            selectedDay ? format(new Date(selectedDay), "dd/MM/yyyy") : ""
          }`}
          readOnly
        />
      </div>
      <div className="contenedor-inputs">
        <div className="selectDay"></div>

        <input
          type="text"
          name="descripcion"
          placeholder="Descripcion"
          id="descripcion"
          onChange={handleChange}
          value={descripcion}
        />

        <Categorias categoria={categoria} setCategoria={setCategoria} />
        <input
          type="text"
          name="valor"
          placeholder="$0.00"
          id="valor"
          onChange={handleChange}
          value={valor}
        />
        <button className="btn btn-primary m-3" type="submit">
          Agregar gasto
        </button>
        <Alerta
          mensajeAlerta={mensajeAlerta}
          alerta={alerta}
          setAlerta={setAlerta}
        />
      </div>
    </form>
  );
};
