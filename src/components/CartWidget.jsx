import "../assets/css/CartWidget.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="text-decoration-none">
      <div className="cart-widget d-flex align-items-center position-relative">
        <i className="bi-cart3 cart-icon" style={{ fontSize: "1.5rem" }}></i>

        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;
