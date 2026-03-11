import "../assets/css/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
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

        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(products);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>

      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;
