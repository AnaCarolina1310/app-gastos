import { Contenedor } from "../Contenedor/Contenedor";
import { FormInicio } from "../FormInicio/FormInicio";
import { Link } from "react-router-dom";
import "./inicioSeccion.css";
import { useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const inicioInicial = {
  email: "",
  contraseña: "",
};
export const InicioSeccion = () => {
  const [formInicio, setFormInicio] = useState(inicioInicial);
  const [alerta, setAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormInicio({
      ...formInicio,
      [e.target.name]: e.target.value,
    });
  };
  const alertas = (mensajes) => {
    setAlerta(true);
    setMensajeAlerta(mensajes);
    setTimeout(() => setAlerta(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let expEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!expEmail.test(formInicio.email)) {
      alertas("El email no es valido");
      return;
    }
    if (formInicio.email === "" || formInicio.contraseña === "") {
      alertas("Tienes que rellenar todos los campos");
      return;
    }
    try {
      await signInWithEmailAndPassword(
        auth,
        formInicio.email,
        formInicio.contraseña
      );
      navigate("/");
    } catch (error) {
      let mensajeError;
      switch (error.code) {
        case "auth/wrong-password":
          mensajeError = "La contraseña no es correcta";
          break;
        case "auth/user-not-found":
          mensajeError = "El usuario no existe";
          break;
        default:
          mensajeError = "Error al crear usuario";
          break;
      }
      alertas(mensajeError);
      setFormInicio(inicioInicial);
    }
  };
  return (
    <>
      <Contenedor>
        <div>
          <div className="inicioHeader">
            <h2>Inicio sesión</h2>
            <Link to="/registro">
              {" "}
              <button className="btn btn-primary">Crear Cuenta</button>
            </Link>
          </div>
          <div className="contenedorForm">
            <FormInicio
              handleChange={handleChange}
              formInicio={formInicio}
              handleSubmit={handleSubmit}
              mensajeAlerta={mensajeAlerta}
              alerta={alerta}
              setAlerta={setAlerta}
            />
          </div>
        </div>
      </Contenedor>
    </>
  );
};
