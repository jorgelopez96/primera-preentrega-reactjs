import "../assets/css/Home.css";
import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => setItems(res))
      .finally(() => setLoading(false));
  }, []);

  const offers = useMemo(
    () => items.filter((p) => p.isOffer).slice(0, 8),
    [items],
  );
  const news = useMemo(() => items.filter((p) => p.isNew).slice(0, 6), [items]);
  const best = useMemo(
    () => items.filter((p) => p.isBestSeller).slice(0, 8),
    [items],
  );

  const newSlides = useMemo(() => {
    const chunkSize = 3;
    const slides = [];
    for (let i = 0; i < news.length; i += chunkSize) {
      slides.push(news.slice(i, i + chunkSize));
    }
    return slides;
  }, [news]);

  if (loading) return <p className="container my-4">Cargando homepage...</p>;

  return (
    <div>
      {/* HERO */}
      <section className="bg-light border-bottom">
        <div className="container py-5">
          <div className="text-center d-flex flex-column align-items-center gap-3">
            <h2 className="mb-0">¡Bienvenido a OSIDISTECH!</h2>

            <p className="text-muted mb-0">
              Componentes de PC: procesadores, GPUs, RAM, mothers, fuentes y
              más.
            </p>

            <Link className="btn btn-dark mt-2" to="/categories">
              Ver categorías
            </Link>
          </div>
        </div>
      </section>

      <section className="container my-4">
        <div className="d-flex align-items-center mb-2">
          <h3 className="mb-0">Ofertas</h3>
        </div>

        {offers.length === 0 ? (
          <p className="text-muted">
            Marcá algunos productos con <b>isOffer: true</b> en products.js
          </p>
        ) : (
          <ItemList items={offers} />
        )}
      </section>

      <section className="container my-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h3 className="mb-0">Nuevos lanzamientos</h3>
            <p className="text-muted mb-0">
              Lo último en hardware, recién llegado.
            </p>
          </div>

          <Link to="/search?q=nuevo" className="text-decoration-none">
            Ver más →
          </Link>
        </div>

        {news.length === 0 ? (
          <p className="text-muted">
            Marcá algunos productos con <b>isNew: true</b> en products.js
          </p>
        ) : (
          <div
            id="newCarousel"
            className="carousel slide osi-new-carousel"
            data-bs-ride="carousel"
            data-bs-interval="4500"
          >
            <div className="carousel-indicators">
              {newSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#newCarousel"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                  aria-current={idx === 0 ? "true" : "false"}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner">
              {newSlides.map((slideItems, slideIdx) => (
                <div
                  key={slideIdx}
                  className={`carousel-item ${slideIdx === 0 ? "active" : ""}`}
                >
                  <div className="row g-3">
                    {slideItems.map((p) => (
                      <div key={p.id} className="col-12 col-md-4">
                        <div className="card shadow-sm osi-new-card h-100">
                          <div className="osi-new-thumb d-flex align-items-center justify-content-center">
                            <span className="text-white-50">Imagen</span>
                          </div>

                          <div className="card-body d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="badge text-bg-warning">
                                Nuevo
                              </span>
                              <span className="badge text-bg-light border">
                                {p.category}
                              </span>
                            </div>

                            <h5 className="mb-2">{p.title}</h5>

                            <p
                              className="text-muted osi-new-desc"
                              style={{ flexGrow: 1 }}
                            >
                              {p.description}
                            </p>

                            <div className="d-flex align-items-center justify-content-between mt-2">
                              <div className="osi-new-price">${p.price}</div>

                              <Link
                                className="btn osi-btn-search text-white"
                                to={`/item/${p.id}`}
                              >
                                Ver producto
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#newCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Anterior</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#newCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        )}
      </section>

      <section className="container my-4">
        <div className="d-flex align-items-center mb-2">
          <h3 className="mb-0">Más vendido</h3>
        </div>

        {best.length === 0 ? (
          <p className="text-muted">
            Marcá algunos productos con <b>isBestSeller: true</b> en products.js
          </p>
        ) : (
          <ItemList items={best} />
        )}
      </section>
    </div>
  );
};

export default Home;
