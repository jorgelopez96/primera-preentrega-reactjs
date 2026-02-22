import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((res) => setItem(res ?? null))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p className="container my-4">Cargando producto...</p>;

  if (!item)
    return (
      <div className="container my-4">
        <h3>Producto no encontrado</h3>
        <p className="text-muted">Revisá que el ID exista en products.js.</p>
      </div>
    );

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
