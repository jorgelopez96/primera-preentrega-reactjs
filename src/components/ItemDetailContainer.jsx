import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import { getProductById } from "../data/products";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((res) => setItem(res))
      .finally(() => setLoading(false));
  }, [itemId]); // ✅ importante

  if (loading) return <p style={{ padding: "2rem" }}>Cargando detalle...</p>;

  // si no existe el id
  if (!item) return <p style={{ padding: "2rem" }}>Producto no encontrado.</p>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
