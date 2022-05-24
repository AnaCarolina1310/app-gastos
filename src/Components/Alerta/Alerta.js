export const Alerta = ({ mensajeAlerta, alerta, setAlerta }) => {
  return (
    <>
      {alerta && (
        <div>
          <p>{mensajeAlerta}</p>
        </div>
      )}
    </>
  );
};
