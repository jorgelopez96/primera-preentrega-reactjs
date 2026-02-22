import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="card-img-top"
          style={{
            height: "200px",
            objectFit: "contain",
            padding: "12px",
            backgroundColor: "#f8f9fa",
          }}
        />
      ) : (
        <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center">
          <span className="text-muted">Imagen</span>
        </div>
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mt-2">{item.title}</h5>

        <p className="card-text small text-muted" style={{ flexGrow: 1 }}>
          {item.description}
        </p>

        <p className="fw-bold mb-3">${item.price}</p>

        <Link
          to={`/item/${item.id}`}
          className="btn osi-btn-search text-white w-100"
        >
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
