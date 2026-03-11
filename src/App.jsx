import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import SearchResultsContainer from "./components/SearchResultsContainer";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import CartView from "./components/CartView";
import CheckoutSuccess from "./components/CheckoutSuccess";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main className="flex-grow-1">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* CATEGORIAS GRID */}
          <Route path="/categories" element={<Categories />} />

          {/* CATALOGO POR CATEGORIA */}
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Catálogo por categoría" />}
          />

          {/* DETALLE */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* BUSCADOR */}
          <Route path="/search" element={<SearchResultsContainer />} />

          {/* CARRITO */}
          <Route path="/cart" element={<CartView />} />

          {/* COMPRA EXITOSA */}
          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
