import { useRef } from "react";
import ItemCard from "./ItemCard";

const ProductRowCarousel = ({ items }) => {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="position-relative">
      <button
        type="button"
        className="btn btn-outline-dark position-absolute top-50 start-0 translate-middle-y z-1"
        style={{ marginLeft: "-10px" }}
        onClick={scrollLeft}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div
        ref={rowRef}
        className="d-flex gap-3 overflow-auto py-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item) => (
          <div key={item.id} style={{ minWidth: 260 }}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y z-1"
        style={{ marginRight: "-10px" }}
        onClick={scrollRight}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
};

export default ProductRowCarousel;
