import { useState, useEffect, useContext, createContext } from "react";
import { useGetGastosMes } from "../hooks/useGetGastosMes";

const TotalGastadoMensual = createContext();
const useTotalDelMes = () => useContext(TotalGastadoMensual);

const TotalGastadoMensualProvider = ({ children }) => {
  const [totalGastado, setTotalGastado] = useState(4);
  const gastosMes = useGetGastosMes();

  useEffect(() => {
    let sumaTotal = 0;
    gastosMes.forEach((elemento) => {
      sumaTotal = elemento.importe + sumaTotal;
      setTotalGastado(sumaTotal);
    });
  }, [gastosMes]);

  return (
    <TotalGastadoMensual.Provider value={{ total: totalGastado }}>
      {children}
    </TotalGastadoMensual.Provider>
  );
};
export { TotalGastadoMensualProvider, useTotalDelMes };
