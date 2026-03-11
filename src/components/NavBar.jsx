import "../assets/css/NavBar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [openSug, setOpenSug] = useState(false);

  const navigate = useNavigate();
  const boxRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const q = term.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setOpenSug(false);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const q = term.trim().toLowerCase();

      if (!q) {
        setSuggestions([]);
        setOpenSug(false);
        return;
      }

      try {
        const snapshot = await getDocs(collection(db, "products"));

        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filtered = allProducts.filter((p) => {
          const haystack =
            `${p.title} ${p.description} ${p.category} ${p.brand ?? ""} ${p.platform ?? ""}`.toLowerCase();

          return haystack.includes(q);
        });

        setSuggestions(filtered.slice(0, 6));
        setOpenSug(true);
      } catch (error) {
        console.error("Error cargando sugerencias:", error);
        setSuggestions([]);
        setOpenSug(false);
      }
    };

    const t = setTimeout(() => {
      fetchSuggestions();
    }, 250);

    return () => clearTimeout(t);
  }, [term]);

  useEffect(() => {
    const handler = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpenSug(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const goToItem = (id) => {
    navigate(`/item/${id}`);
    setTerm("");
    setSuggestions([]);
    setOpenSug(false);
  };

  return (
    <nav className="navbar navbar-expand-lg osi-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand osi-brand text-decoration-none" to="/">
          <img src="/favicon.png" alt="OSIDISTECH" className="osi-logo" />

          <div>
            <div className="osi-brand-name">OSIDISTECH</div>
            <div className="osi-brand-sub">Hardware Store</div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#osiNavbar"
          aria-controls="osiNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="osiNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink
                className="nav-link osi-link"
                to="/category/procesadores"
              >
                Procesadores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link osi-link"
                to="/category/placas-de-video"
              >
                Placas de Video
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link osi-link"
                to="/category/memorias-ram"
              >
                Memorias RAM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link osi-link" to="/category/mothers">
                Mothers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link osi-link" to="/category/fuentes">
                Fuentes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link osi-link" to="/category/gabinetes">
                Gabinetes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link osi-link" to="/category/discos">
                Discos
              </NavLink>
            </li>
          </ul>

          <div className="nav-search-wrap me-lg-3 mb-2 mb-lg-0" ref={boxRef}>
            <form className="d-flex" onSubmit={onSubmit} autoComplete="off">
              <input
                className="form-control me-2 osi-search-input"
                type="search"
                placeholder="Buscar (ryzen, corsair, ddr5...)"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onFocus={() => {
                  if (suggestions.length > 0) setOpenSug(true);
                }}
              />
              <button className="btn osi-btn-search text-white" type="submit">
                Buscar
              </button>
            </form>

            {openSug && suggestions.length > 0 && (
              <div className="nav-suggestions">
                {suggestions.map((p) => (
                  <button
                    key={p.id}
                    className="nav-suggestion"
                    type="button"
                    onClick={() => goToItem(p.id)}
                  >
                    <div className="nav-suggestion__thumb">
                      {p.image ? (
                        <img src={p.image} alt={p.title} />
                      ) : (
                        <span className="nav-suggestion__thumb-placeholder">
                          Img
                        </span>
                      )}
                    </div>

                    <div className="nav-suggestion__content">
                      <div className="nav-suggestion__title">{p.title}</div>
                      <div className="nav-suggestion__meta">
                        ${p.price} · {p.category}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
