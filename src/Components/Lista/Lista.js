import { BsTrash } from "react-icons/bs";
import { funcionMoneda } from "../../helpers/funcionMoneda";
import { Card } from "react-bootstrap";
import "./lista.css";

export const Lista = ({
  descripcion,
  eliminarGasto,
  categoria,
  importe,
  icono,
  id,
  fecha,
  comparacionFecha,
}) => {
  if (window.screen.width < 900) {
    return (
      <>
        {comparacionFecha ? "" : <h3 className="fecha">{fecha}</h3>}
        <Card
          className="text-center"
          style={{ backgroundColor: "transparent" }}
        >
          <Card.Header>{categoria}</Card.Header>
          <Card.Body>
            <Card.Title>{descripcion}</Card.Title>
            <Card.Text>{funcionMoneda(importe)}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <div className="contenedorBotones">
              <button className="btn" onClick={eliminarGasto}>
                <BsTrash />
              </button>
            </div>
          </Card.Footer>
        </Card>
      </>
    );
  } else {
    return (
      <>
        {comparacionFecha ? "" : <h3 className="fecha">{fecha}</h3>}
        <Card style={{ backgroundColor: "transparent" }}>
          <Card.Body
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <p className="card-parrafo">{categoria}</p>
            </div>
            <div>
              <p className="card-parrafo">{descripcion}</p>
            </div>
            <div>
              <div className="contenedorBotonesImporte">
                <div>
                  <p className="card-parrafo">{funcionMoneda(importe)}</p>
                </div>
                <button className="btn" onClick={eliminarGasto}>
                  <BsTrash />
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
};
