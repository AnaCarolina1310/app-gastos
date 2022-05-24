import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  where,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import { db } from "../Firebase/Firebase.config";

export const useGetGastos = () => {
  const [gastos, setGastos] = useState([]);
  const { usuario } = useAuth();
  const [last, setLast] = useState(null);
  const [cargarMas, setCargarMas] = useState(false);

  const getMasGastos = () => {
    const q = query(
      collection(db, "gastos"),
      where("usuarioId", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10),
      startAfter(last)
    );

    onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.docs.length > 0) {
          setLast(snapshot.docs[snapshot.docs.length - 1]);

          setGastos(
            gastos.concat(
              snapshot.docs.map((gasto) => {
                return { ...gasto.data(), id: gasto.id };
              })
            )
          );
        } else {
          setCargarMas(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    const q = query(
      collection(db, "gastos"),
      where("usuarioId", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10)
    );
    const unsuscribe = onSnapshot(q, (dato) => {
      if (dato.docs.length > 0) {
        setLast(dato.docs[dato.docs.length - 1]);
        setCargarMas(true);
      } else {
        setCargarMas(false);
      }

      setGastos(
        dato.docs.map((gasto) => {
          return { ...gasto.data(), id: gasto.id };
        })
      );
    });

    return unsuscribe;
  }, [usuario]);

  return { gastos, getMasGastos, cargarMas };
};
