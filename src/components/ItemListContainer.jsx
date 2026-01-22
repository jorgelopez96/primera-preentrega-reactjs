import "../assets/css/ItemListContainer.css";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>

      <div className="product-card">
        <h3>Producto de ejemplo</h3>
        <p>Descripción breve del producto.</p>
        <ItemCount />
      </div>
    </section>
  );
};

export default ItemListContainer;
