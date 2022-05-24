import { Contenedor } from "../Contenedor/Contenedor";
import "./agregarGasto.css";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";
import { FormGasto } from "../FormGastos/FormGastos";
import { useState } from "react";
import { agregarGastos } from "../../Firebase/AgregarGasto";
import { useAuth } from "../../Context/AuthContext";
import { BarraTotal } from "../BarraTotal/BarraTotal";
import { NavBar } from "../NavBar/NavBar";

export const AgregarGasto = () => {
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [categoria, setCategoria] = useState(null);
  const [alerta, setAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipo, setTipo] = useState(null);
  const { usuario } = useAuth();
  const navigate = useNavigate();

  const alertas = (mensajes) => {
    setAlerta(true);
    setMensajeAlerta(mensajes);
    setTimeout(() => setAlerta(false), 5000);
  };

  const handleChange = (e) => {
    if (e.target.name === "valor") {
      setValor(e.target.value.replace(/[^0-9.]/g, ""));
    } else if (e.target.name === "descripcion") {
      setDescripcion(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let importe = parseFloat(valor).toFixed(2);
    if (descripcion !== "" && valor !== "" && categoria !== null) {
      console.log(categoria);
      if (importe) {
        agregarGastos({
          fecha: selectedDay,
          categoria: categoria,
          descripcion: descripcion,
          importe: Number(importe),
          usuarioId: usuario.uid,
        })
          .then(() => {
            setValor("");
            setDescripcion("");
            setSelectedDay(new Date());
            alertas("El gasto fue añadido correctamente");
          })
          .catch((error) => {
            alertas("Hubo un problema al cargar el gasto");
          });
      } else {
        alertas("El importe debe ser valido");
      }
    } else {
      alertas("Debe completar todos los campos");
    }
  };
  return (
    <>
      <Contenedor>
        <NavBar
          primerLink={"/lista"}
          segundoLink={"/"}
          titulo={"AGREGAR GASTOS"}
          link={"Lista de gastos"}
        />

        <FormGasto
          handleChange={handleChange}
          descripcion={descripcion}
          valor={valor}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setCategoria={setCategoria}
          categoria={categoria}
          handleSubmit={handleSubmit}
          alerta={alerta}
          setAlerta={setAlerta}
          mensajeAlerta={mensajeAlerta}
          setTipo={setTipo}
          tipo={tipo}
        />
        <BarraTotal />
      </Contenedor>
    </>
  );
};
