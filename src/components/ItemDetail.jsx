import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container my-4">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center">
                <span className="text-muted">Imagen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <h2 className="mb-2">{item.title}</h2>
          <p className="text-muted">{item.description}</p>

          <p className="fs-4 fw-bold mb-2">${item.price}</p>

          <p className="mb-1">
            <span className="badge text-bg-secondary me-2">
              {item.category}
            </span>
            {item.platform && (
              <span className="badge text-bg-info">{item.platform}</span>
            )}
          </p>

          <hr />

          <p className="mb-2 fw-semibold">Seleccioná cantidad:</p>

          <div className="d-inline-block">
            <ItemCount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
