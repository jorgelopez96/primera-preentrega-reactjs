import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-5">
            <Link to="/" className="footer-brand text-decoration-none">
              <img
                src="/favicon.png"
                alt="OSIDISTECH"
                className="footer-logo"
              />
              <div>
                <div className="footer-brand__name">OSIDISTECH</div>
                <div className="footer-brand__sub">Hardware Store</div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-md-7">
            <nav className="footer-nav">
              <Link className="footer-link" to="/">
                Inicio
              </Link>
              <Link className="footer-link" to="/faq">
                Preguntas frecuentes
              </Link>
              <Link className="footer-link" to="/contacto">
                Contacto
              </Link>
              <Link className="footer-link" to="/terminos">
                Términos y condiciones
              </Link>
              <Link className="footer-link" to="/reembolsos">
                Política de reembolsos
              </Link>
            </nav>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <small className="text-secondary">
            © {new Date().getFullYear()} OSIDISTECH. Todos los derechos
            reservados.
          </small>
          <small className="text-secondary">Argentina · Buenos Aires</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
