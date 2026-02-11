import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const sumar = () => setCount(count + 1);
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const agregarAlCarrito = () => {
    //lógica de carrito
    console.log("Cantidad agregada:", count);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary fw-bold" onClick={restar}>
          −
        </button>

        <span className="px-3 py-2 border rounded fw-semibold">{count}</span>

        <button className="btn btn-outline-secondary fw-bold" onClick={sumar}>
          +
        </button>
      </div>

      <button
        className="btn osi-btn-search text-white fw-bold"
        onClick={agregarAlCarrito}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
