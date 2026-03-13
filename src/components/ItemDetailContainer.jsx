import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const docRef = doc(db, "products", itemId);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          setItem(null);
        }
      } catch {
        // Error cargando producto
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) return <p className="container my-4">Cargando producto...</p>;

  if (!item)
    return (
      <div className="container my-4">
        <h3>Producto no encontrado</h3>
        <p className="text-muted">Revisá que el producto exista</p>
      </div>
    );

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
