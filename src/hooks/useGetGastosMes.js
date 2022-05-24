import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase.config";
import { startOfMonth, endOfMonth, getUnixTime } from "date-fns";
import { useAuth } from "../Context/AuthContext";
import {
  onSnapshot,
  collection,
  where,
  query,
  orderBy,
} from "firebase/firestore";

export const useGetGastosMes = () => {
  const [gastosMes, setGastosMes] = useState([]);
  const { usuario } = useAuth();

  useEffect(() => {
    const inicioMes = startOfMonth(new Date());
    const finMes = endOfMonth(new Date());

    if (usuario) {
      const q = query(
        collection(db, "gastos"),
        orderBy("fecha", "desc"),
        where("fecha", ">=", inicioMes),
        where("fecha", "<=", finMes),
        where("usuarioId", "==", usuario.uid)
      );
      const desuscribir = onSnapshot(
        q,
        (snapshot) => {
          setGastosMes(
            snapshot.docs.map((elemento) => {
              return { ...elemento.data(), id: elemento.id };
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );
      return desuscribir;
    }
  }, [usuario]);

  return gastosMes;
};
