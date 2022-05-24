import { Contenedor } from "../Contenedor/Contenedor";
import { Link } from "react-router-dom";
import "./registroUsuario.css";
import { FormRegistro } from "../FormRegistro/FormRegistro";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";

const inicialForm = {
  email: "",
  contraseña: "",
  contraseña2: "",
};

export const RegistroDeUsuarios = () => {
  const [registroForm, setRegistroForm] = useState(inicialForm);
  const [alerta, setAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  const navigate = useNavigate();
  const handleChange = (e) => {
    setRegistroForm({
      ...registroForm,
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
    if (!expEmail.test(registroForm.email)) {
      alertas("El email no es valido");
      return;
    }
    if (
      registroForm.email === "" ||
      registroForm.contraseña === "" ||
      registroForm.contraseña2 === ""
    ) {
      alertas("Tienes que rellenar todos los campos");
      return;
    }
    if (registroForm.contraseña !== registroForm.contraseña2) {
      alertas("Las contraseñas tienen que ser iguales");
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        registroForm.email,
        registroForm.contraseña
      );
      navigate("/");
    } catch (error) {
      let mensajeError;
      switch (error.code) {
        case "auth/invalid-password":
          mensajeError =
            "Contraseña invalida. Tiene que tener al menos 6 caracteres";
          break;

        case "auth/email-already-in-use":
          mensajeError = "Ya existe una cuenta vinculada a ese e-mail";
          break;
        case "auth/invalid-email":
          mensajeError = "Email invalido";
          break;
        default:
          mensajeError = "Error al crear usuario";
          break;
      }
      alertas(mensajeError);
      setRegistroForm(inicialForm);
    }
  };

  return (
    <>
      <Contenedor>
        <div>
          <div className="registroHeader">
            <h2>Crear cuenta</h2>
            <Link to="/inicio">
              <button className="btn btn-primary">Iniciar seccion</button>
            </Link>
          </div>
          <div className="contenedorForm">
            <FormRegistro
              registro={registroForm}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              alerta={alerta}
              mensajeAlerta={mensajeAlerta}
              setAlerta={setAlerta}
            />
          </div>
        </div>
      </Contenedor>
    </>
  );
};
