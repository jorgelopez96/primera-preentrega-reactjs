import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // items: [{ id, title, price, image, stock, quantity }]
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!item?.id) return;

    const qty = Math.max(1, Number(quantity) || 1);
    const stock = Number(item.stock ?? 0); // si no tiene stock, asumimos 0 (no vendible)

    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      const currentQty = existing ? existing.quantity : 0;
      const nextQty = currentQty + qty;

      if (stock <= 0) {
        alert("Sin stock disponible.");
        return prev;
      }

      if (nextQty > stock) {
        alert(`No hay más stock. Disponible: ${stock - currentQty}`);
        return prev;
      }

      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: nextQty } : p,
        );
      }

      return [
        ...prev,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          stock,
          quantity: qty,
        },
      ];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Suma del carrito restando stock
  const increaseItem = (id) => {
    setCart((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        if (p.quantity >= p.stock) {
          alert("❌ No hay más stock disponible.");
          return p;
        }
        return { ...p, quantity: p.quantity + 1 };
      }),
    );
  };

  // Resta del carrito.
  const decreaseItem = (id) => {
    setCart((prev) =>
      prev.flatMap((p) => {
        if (p.id !== id) return p;
        const next = p.quantity - 1;
        if (next <= 0) return [];
        return { ...p, quantity: next };
      }),
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = useMemo(
    () => cart.reduce((acc, p) => acc + p.quantity, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
      increaseItem,
      decreaseItem,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [cart, totalItems, totalPrice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
};
