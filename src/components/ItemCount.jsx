import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 99, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => setCount((c) => (c < stock ? c + 1 : c));
  const restar = () => setCount((c) => (c > 1 ? c - 1 : c));

  return (
    <div className="d-flex align-items-center gap-2 flex-wrap">
      <button
        type="button"
        className="btn btn-outline-secondary fw-bold"
        onClick={restar}
      >
        −
      </button>

      <span className="px-3 py-2 border rounded fw-semibold">{count}</span>

      <button
        type="button"
        className="btn btn-outline-secondary fw-bold"
        onClick={sumar}
      >
        +
      </button>

      <button
        type="button"
        className="btn osi-btn-search text-white fw-bold"
        onClick={() => onAdd?.(count)}
      >
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
