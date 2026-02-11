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

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/*HOME */}
        <Route path="/" element={<Home />} />

        {/*CATEGORÍAS */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="Catálogo por categoría" />}
        />

        {/*DETALLE */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/*BUSCADOR */}
        <Route path="/search" element={<SearchResultsContainer />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

        {/* Categorias */}
        <Route path="/categories" element={<Categories />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
