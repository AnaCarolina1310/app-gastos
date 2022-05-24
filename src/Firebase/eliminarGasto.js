import { db } from "./Firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

export const eliminarGasto = async (id) => {
  await deleteDoc(doc(db, "gastos", id));
};
