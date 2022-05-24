import { funcionMoneda } from "../../helpers/funcionMoneda";
import { useTotalDelMes } from "../../Context/TotalGastado";

export const BarraTotal = () => {
  const { total } = useTotalDelMes();

  return (
    <div
      className="barraTotal"
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#0000ff",
        color: "white",
      }}
    >
      <p>Total gastado en el mes {funcionMoneda(total)}</p>
    </div>
  );
};
