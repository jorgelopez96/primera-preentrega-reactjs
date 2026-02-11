import "../assets/css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../data/products";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchData = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchData.then((res) => setItems(res)).finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>

      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;
