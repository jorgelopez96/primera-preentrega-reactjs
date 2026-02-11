import "../assets/css/CartWidget.css";

const CartWidget = () => {
  const cantidad = 0; // Numero de ejemplo

  return (
    <div className="cart-widget" aria-label="Carrito">
      <span className="cart-icon" role="img" aria-label="icono carrito">
        🛒
      </span>
      <span className="cart-badge">{cantidad}</span>
    </div>
  );
};

export default CartWidget;
