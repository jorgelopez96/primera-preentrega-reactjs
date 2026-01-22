// Import de CSS
import "../assets/css/NavBar.css";

// Import de CartWidget
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <a className="anchor-nav" href="#">
        OSIDISTECH
      </a>

      <div className="nav-links">
        <a className="anchor-nav" href="#">
          Procesadores
        </a>
        <a className="anchor-nav" href="#">
          Placas de Video
        </a>
        <a className="anchor-nav" href="#">
          Memorias Ram
        </a>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
