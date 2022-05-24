import "./categorias.css";
export const Categorias = ({ setCategoria, categoria }) => {
  const handleChange = (e) => {
    setCategoria(e.target.value);
  };
  return (
    <div className="contenedor-radio">
      <div className="gruporRadio">
        <div className="form-check m-2">
          <label htmlFor="Alimentación" className="form-check-label">
            Alimentación
          </label>
          <input
            className="form-check-input"
            id="Alimentación"
            type="radio"
            value="Alimentación"
            name="categorias"
            onChange={handleChange}
          />
        </div>

        <div className="form-check m-2">
          <label htmlFor="Cuentas y pagos" className="form-check-label">
            Cuentas y pagos
          </label>
          <input
            className="form-check-input"
            id="Cuentas y pagos"
            type="radio"
            value="Cuentas y pagos"
            name="categorias"
            onChange={handleChange}
          />
        </div>

        <div className="form-check m-2">
          <label className="form-check-label" htmlFor="Casa">
            Casa
          </label>
          <input
            className="form-check-input"
            id="Casa"
            type="radio"
            value="Casa"
            name="categorias"
            onChange={handleChange}
          />
        </div>

        <div className="form-check m-2">
          <label className="form-check-label" htmlFor="Transporte">
            Transporte
          </label>
          <input
            className="form-check-input"
            id="Transporte"
            type="radio"
            value="Transporte"
            name="categorias"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grupoRadio">
        <div className="form-check m-2">
          <label className="form-check-label" htmlFor="Indumentaria">
            Indumentaria
          </label>
          <input
            className="form-check-input"
            id="Indumentaria"
            type="radio"
            value="Indumentaria"
            name="categorias"
            onChange={handleChange}
          />
        </div>

        <div className="form-check m-2">
          <label htmlFor="Salud e higiene" className="form-check-label">
            Salud e higiene
          </label>
          <input
            className="form-check-input"
            id="Salud e higiene"
            type="radio"
            value="Salud e higiene"
            name="categorias"
            onChange={handleChange}
          />
        </div>

        <div className="form-check m-2">
          <input
            className="form-check-input"
            id="Diversión"
            type="radio"
            value="Diversión"
            name="categorias"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="Diversión">
            Diversión
          </label>
        </div>

        <div className="form-check m-2">
          <label htmlFor="Otros gastos " className="form-check-label">
            Otros gastos{" "}
          </label>
          <input
            className="form-check-input"
            id="Otros gastos "
            type="radio"
            value="Ortros gastos "
            name="categorias"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
