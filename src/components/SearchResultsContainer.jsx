import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../data/products";
import ItemList from "./ItemList";

const SearchResultsContainer = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get("q") || "").trim();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) {
      setItems([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    searchProducts(q)
      .then((res) => setItems(res))
      .finally(() => setLoading(false));
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
