import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useMemo, useEffect, useState } from "react";
import { createOrder } from "../firebase/orders";

const CartView = () => {
  const {
    cart,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    increaseItem,
    decreaseItem,
  } = useCart();

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setShow(false);
      setConfirmClear(false);
    }
  }, [cart.length]);

  const itemsSummary = useMemo(() => {
    return cart
      .map((p) => `${p.title} x${p.quantity}`)
      .slice(0, 6)
      .join(", ");
  }, [cart]);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const openConfirmClear = () => setConfirmClear(true);
  const closeConfirmClear = () => setConfirmClear(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (!buyer.name.trim() || !buyer.email.trim() || !buyer.phone.trim()) {
      alert("Completá nombre, email y teléfono.");
      return;
    }

    try {
      setSubmitting(true);

      const order = {
        buyer: {
          name: buyer.name.trim(),
          email: buyer.email.trim(),
          phone: buyer.phone.trim(),
          address: buyer.address.trim(),
        },
        items: cart.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity,
        })),
        total: totalPrice,
      };

      const orderId = await createOrder(order);

      alert(
        `✅ Compra confirmada!\n\n` +
          `ID de la orden: ${orderId}\n` +
          `Cliente: ${buyer.name}\n` +
          `Email: ${buyer.email}\n` +
          `Tel: ${buyer.phone}\n\n` +
          `Productos: ${totalItems}\n` +
          `Total: $${totalPrice}\n\n` +
          `Detalle: ${itemsSummary}${cart.length > 6 ? "..." : ""}`,
      );

      clearCart();
      closeModal();
      navigate("/");
    } catch (error) {
      alert("Ocurrió un error al generar la orden. Intentá de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClearConfirmed = () => {
    clearCart();
    closeConfirmClear();
  };

  return (
    <div className="container my-4">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div>
          <h2 className="mb-1">Carrito</h2>
          <p className="text-muted mb-0">
            {totalItems} ítem(s) · Total: <b>${totalPrice}</b>
          </p>
        </div>

        <div className="d-flex gap-2">
          {cart.length > 0 && (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={openConfirmClear}
            >
              Vaciar carrito
            </button>
          )}

          <button
            type="button"
            className="btn osi-btn-search text-white"
            onClick={openModal}
            disabled={cart.length === 0}
          >
            Comprar
          </button>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="card shadow-sm">
          <div className="card-body text-center py-5">
            <h4 className="mb-2">Tu carrito está vacío</h4>
            <p className="text-muted mb-4">
              Agregá productos desde el catálogo para verlos acá.
            </p>
            <Link to="/" className="btn osi-btn-search text-white">
              Ir al Home
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: 90 }}>Imagen</th>
                      <th>Producto</th>
                      <th style={{ width: 140 }}>Precio</th>
                      <th style={{ width: 220 }}>Cantidad</th>
                      <th style={{ width: 160 }}>Subtotal</th>
                      <th style={{ width: 120 }}></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((p) => {
                      const remaining = Math.max(
                        0,
                        (p.stock ?? 0) - p.quantity,
                      );
                      const maxed =
                        p.stock != null ? p.quantity >= p.stock : false;

                      return (
                        <tr key={p.id}>
                          <td>
                            <div
                              className="bg-light border rounded d-flex align-items-center justify-content-center"
                              style={{
                                width: 70,
                                height: 50,
                                overflow: "hidden",
                              }}
                            >
                              {p.image ? (
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    padding: 6,
                                  }}
                                />
                              ) : (
                                <span className="text-muted small">Img</span>
                              )}
                            </div>
                          </td>

                          <td>
                            <div className="fw-semibold">{p.title}</div>
                            <Link
                              to={`/item/${p.id}`}
                              className="text-decoration-none small"
                            >
                              Ver producto
                            </Link>

                            <div className="small text-muted mt-1">
                              Stock: <b>{p.stock ?? 0}</b> · Quedan:{" "}
                              <b>{remaining}</b>
                            </div>
                          </td>

                          <td>${p.price}</td>

                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary fw-bold"
                                onClick={() => decreaseItem(p.id)}
                                aria-label="Restar"
                              >
                                −
                              </button>

                              <span className="px-2 py-1 border rounded fw-semibold">
                                {p.quantity}
                              </span>

                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary fw-bold"
                                onClick={() => increaseItem(p.id)}
                                disabled={maxed}
                                aria-label="Sumar"
                                title={maxed ? "Sin stock disponible" : "Sumar"}
                              >
                                +
                              </button>
                            </div>

                            {maxed && (
                              <div className="small text-danger mt-1">
                                Sin stock disponible
                              </div>
                            )}
                          </td>

                          <td className="fw-bold">${p.price * p.quantity}</td>

                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => removeItem(p.id)}
                            >
                              Quitar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>

                  <tfoot className="table-light">
                    <tr>
                      <td colSpan={4} className="text-end fw-semibold">
                        Total:
                      </td>
                      <td className="fw-bold">${totalPrice}</td>
                      <td />
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Link to="/" className="text-decoration-none">
              ← Seguir comprando
            </Link>
          </div>
        </>
      )}

      {confirmClear && (
        <>
          <div className="modal-backdrop fade show" />

          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">¿Vaciar carrito?</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeConfirmClear}
                  />
                </div>

                <div className="modal-body">
                  <p className="mb-0">
                    ¿Seguro querés eliminar <b>todos</b> los productos del
                    carrito?
                  </p>
                  <p className="text-muted small mt-2 mb-0">
                    Esta acción no se puede deshacer.
                  </p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={closeConfirmClear}
                  >
                    Cancelar
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClearConfirmed}
                  >
                    Sí, vaciar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {show && cart.length > 0 && (
        <>
          <div className="modal-backdrop fade show" />

          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <form onSubmit={handleConfirm}>
                  <div className="modal-header">
                    <div>
                      <h5 className="modal-title mb-1">Finalizar compra</h5>
                      <div className="text-muted small">
                        Vas a comprar <b>{totalItems}</b> producto(s) por{" "}
                        <b>${totalPrice}</b>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={closeModal}
                      disabled={submitting}
                    />
                  </div>

                  <div className="modal-body">
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label">Nombre y apellido</label>
                        <input
                          className="form-control"
                          name="name"
                          value={buyer.name}
                          onChange={onChange}
                          required
                          placeholder="Ej: Jorge Lopez"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          value={buyer.email}
                          onChange={onChange}
                          required
                          placeholder="ejemplo@mail.com"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Teléfono</label>
                        <input
                          className="form-control"
                          name="phone"
                          value={buyer.phone}
                          onChange={onChange}
                          required
                          placeholder="11 2345 6789"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          Dirección (opcional)
                        </label>
                        <input
                          className="form-control"
                          name="address"
                          value={buyer.address}
                          onChange={onChange}
                          placeholder="Calle, número, ciudad"
                        />
                      </div>

                      <div className="col-12">
                        <div className="alert alert-light border mb-0">
                          <div className="fw-semibold mb-1">Resumen</div>
                          <div className="small text-muted">
                            {itemsSummary}
                            {cart.length > 6 ? "..." : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={closeModal}
                      disabled={submitting}
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className="btn osi-btn-search text-white"
                      disabled={submitting}
                    >
                      {submitting ? "Generando orden..." : "Confirmar compra"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
