import { Alerta } from "../Alerta/Alerta";
import "./formRegistro.css";

export const FormRegistro = ({
  registro,
  handleSubmit,
  handleChange,
  setAlerta,
  mensajeAlerta,
  alerta,
}) => {
  return (
    <>
      <form className=" formularioRegistro" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electronico"
          value={registro.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={registro.contraseña}
          onChange={handleChange}
        />

        <input
          type="password"
          name="contraseña2"
          placeholder="Repetir Contraseña"
          value={registro.contraseña2}
          onChange={handleChange}
        />

        <button className="btn btn-primary m-2" type="submit">
          {" "}
          Crear cuenta
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
