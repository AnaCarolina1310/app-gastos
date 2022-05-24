import { useState, useEffect } from "react";
import { useGetGastosMes } from "./useGetGastosMes";

export const useGastosMesCategoria = () => {
  const [gastosPorCategoria, setGastosPorCategoria] = useState([]);
  const gastos = useGetGastosMes();

  useEffect(() => {
    const sumaGastosCat = gastos.reduce(
      (objResultante, objActual) => {
        const catActual = objActual.categoria;
        const importeActual = objActual.importe;

        objResultante[catActual] += importeActual;
        return objResultante;
      },
      {
        Alimentación: 0,
        "Cuentas y pagos": 0,
        Casa: 0,
        Transporte: 0,
        Indumentaria: 0,
        "Salud e higiene": 0,
        Diversión: 0,
        "Otros gastos": 0,
      }
    );

    setGastosPorCategoria(
      Object.keys(sumaGastosCat).map((elemento) => {
        return { categoria: elemento, importe: sumaGastosCat[elemento] };
      })
    );
  }, [setGastosPorCategoria, gastos]);
  return gastosPorCategoria;
};
