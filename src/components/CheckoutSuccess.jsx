import { Link, Navigate, useLocation } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

const CheckoutSuccess = () => {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { orderId, buyer, items, total, totalItems } = state;

  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <div className="display-5 mb-2">✅</div>
            <h2 className="mb-2">¡Compra realizada con éxito!</h2>
            <p className="text-muted mb-0">
              Gracias por comprar en <b>OSIDISTECH</b>.
            </p>
          </div>

          <div className="alert alert-success">
            <div className="fw-semibold">ID de orden</div>
            <div>{orderId}</div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-5">
              <div className="card h-100 bg-light border-0">
                <div className="card-body">
                  <h5 className="mb-3">Datos del comprador</h5>
                  <p className="mb-2">
                    <b>Nombre:</b> {buyer.name}
                  </p>
                  <p className="mb-2">
                    <b>Email:</b> {buyer.email}
                  </p>
                  <p className="mb-2">
                    <b>Teléfono:</b> {buyer.phone}
                  </p>
                  <p className="mb-0">
                    <b>Dirección:</b> {buyer.address || "No especificada"}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <div className="card h-100 bg-light border-0">
                <div className="card-body">
                  <h5 className="mb-3">Resumen de compra</h5>

                  <div className="mb-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex justify-content-between align-items-center border-bottom py-2"
                      >
                        <div>
                          <div className="fw-semibold">{item.title}</div>
                          <div className="small text-muted">
                            Cantidad: {item.quantity}
                          </div>
                        </div>

                        <div className="fw-semibold">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="fw-semibold">Productos:</span>
                    <span>{totalItems}</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2 fs-5">
                    <span className="fw-bold">Total:</span>
                    <span className="fw-bold">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Link to="/" className="btn osi-btn-search text-white">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
