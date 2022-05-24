import { db } from "./Firebase.config";
import { collection, addDoc } from "firebase/firestore";

export const agregarGastos = ({
  categoria,
  fecha,
  importe,
  descripcion,
  usuarioId,
}) => {
  return addDoc(collection(db, "gastos"), {
    categoria: categoria,
    fecha: fecha,
    importe: importe,
    descripcion: descripcion,
    usuarioId: usuarioId,
  });
};
