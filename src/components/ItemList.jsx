import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <div className="container my-4">
      <div className="row g-3">
        {items.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
