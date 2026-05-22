import "../assets/css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import { products as localProducts } from "../data/products";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = ({ greeting = "Catálogo" }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const productsRef = collection(db, "products");

        const q = categoryId
          ? query(productsRef, where("category", "==", categoryId))
          : productsRef;

        const snapshot = await getDocs(q);

        const firestoreProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (firestoreProducts.length > 0) {
          setItems(firestoreProducts);
        } else {
          const fallback = categoryId
            ? localProducts.filter((p) => p.category === categoryId)
            : localProducts;
          setItems(fallback);
        }
      } catch {
        const fallback = categoryId
          ? localProducts.filter((p) => p.category === categoryId)
          : localProducts;
        setItems(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length === 0 ? (
        <p className="text-muted">No hay productos en esta categoría.</p>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
};

export default ItemListContainer;
