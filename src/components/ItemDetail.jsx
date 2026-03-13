import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(item, qty);
    setAdded(true);
  };

  const stock = item.stock ?? 0;

  return (
    <div className="container my-4">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-5">
          <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center justify-content-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "350px",
                    objectFit: "contain",
                    backgroundColor: "#f8f9fa",
                    padding: "15px",
                  }}
                />
              ) : (
                <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center w-100">
                  <span className="text-muted">Imagen</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <h2 className="mb-2">{item.title}</h2>
          <p className="text-muted">{item.description}</p>

          <p className="fs-4 fw-bold mb-2">{formatPrice(item.price)}</p>

          <hr />

          {stock === 0 ? (
            <div className="alert alert-warning mb-0" role="alert">
              Este producto está <b>sin stock</b> por el momento.
            </div>
          ) : !added ? (
            <>
              <p className="mb-2 fw-semibold">Seleccioná cantidad:</p>
              <div className="d-inline-block">
                <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
              </div>
            </>
          ) : (
            <div className="mt-3 d-flex gap-2">
              <Link to="/cart" className="btn btn-success">
                Ir al carrito
              </Link>
              <Link to="/" className="btn btn-outline-secondary">
                Seguir comprando
              </Link>
            </div>
          )}

          <p className="text-muted small mt-2 mb-0">
            Stock disponible: <b>{stock}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
