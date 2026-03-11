import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemList from "./ItemList";

const SearchResultsContainer = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim().toLowerCase();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      if (!q) {
        setItems([]);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const snapshot = await getDocs(collection(db, "products"));

        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const isNewQuery =
          q === "nuevo" ||
          q === "nuevos" ||
          q === "lanzamiento" ||
          q === "lanzamientos";

        const isOfferQuery = q === "oferta" || q === "ofertas";

        const isBestQuery =
          q === "best" ||
          q === "top" ||
          q === "bestseller" ||
          q === "mas vendido" ||
          q === "más vendido" ||
          q === "mas vendidos" ||
          q === "más vendidos";

        let filteredProducts = [];

        if (isNewQuery) {
          filteredProducts = allProducts.filter((p) => p.isNew);
        } else if (isOfferQuery) {
          filteredProducts = allProducts.filter((p) => p.isOffer);
        } else if (isBestQuery) {
          filteredProducts = allProducts.filter((p) => p.isBestSeller);
        } else {
          filteredProducts = allProducts.filter((p) => {
            const haystack =
              `${p.title} ${p.description} ${p.category} ${p.brand ?? ""} ${p.platform ?? ""}`.toLowerCase();

            return haystack.includes(q);
          });
        }

        setItems(filteredProducts);
      } catch (error) {
        console.error("Error buscando productos:", error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFilterProducts();
  }, [q]);

  if (!q) {
    return (
      <section style={{ padding: "2rem" }}>
        <h2>Buscador</h2>
        <p>
          Ingresá un término para buscar productos (ej: ryzen, corsair, ddr5).
        </p>
      </section>
    );
  }

  return (
    <section style={{ padding: "2rem" }}>
      <h2>
        Resultados para: "{q}" {!loading && `(${items.length})`}
      </h2>

      {loading ? (
        <p>Buscando...</p>
      ) : items.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
};

export default SearchResultsContainer;
