import { useState } from "react";
import "../assets/css/ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <button onClick={restar}>−</button>
      <span>{count}</span>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default ItemCount;
