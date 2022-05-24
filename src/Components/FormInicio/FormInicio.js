import { Alerta } from "../Alerta/Alerta";
import "./formInicio.css";

export const FormInicio = ({
  formInicio,
  handleChange,
  handleSubmit,
  mensajeAlerta,
  alerta,
  setAlerta,
}) => {
  return (
    <>
      <form className=" formularioInicio" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electronico"
          onChange={handleChange}
          value={formInicio.email}
        />

        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          onChange={handleChange}
          value={formInicio.contraseña}
        />

        <button className="btn btn-primary m-3" type="submit">
          {" "}
          Iniciar sesión
        </button>

        <Alerta
          mensajeAlerta={mensajeAlerta}
          alerta={alerta}
          setAlerta={setAlerta}
        />
      </form>
    </>
  );
};
