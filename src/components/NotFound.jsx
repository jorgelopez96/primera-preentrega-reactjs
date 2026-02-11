import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>404 - Página no encontrada</h2>
      <p>La ruta a la que intentaste entrar no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
