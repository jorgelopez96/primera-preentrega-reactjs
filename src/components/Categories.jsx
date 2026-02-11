import { Link } from "react-router-dom";
import "../assets/css/Categories.css";

//imports de imágenes
import imgProcesadores from "../assets/categories/procesadores.png";
import imgGpus from "../assets/categories/placas-de-video.png";
import imgRam from "../assets/categories/memorias-ram.png";
import imgMothers from "../assets/categories/mothers.png";
import imgFuentes from "../assets/categories/fuentes.png";
import imgGabinetes from "../assets/categories/gabinetes.png";
import imgDiscos from "../assets/categories/discos.png";

const categories = [
  { id: "procesadores", name: "Procesadores", img: imgProcesadores },
  { id: "placas-de-video", name: "Placas de Video", img: imgGpus },
  { id: "memorias-ram", name: "Memorias RAM", img: imgRam },
  { id: "mothers", name: "Mothers", img: imgMothers },
  { id: "fuentes", name: "Fuentes", img: imgFuentes },
  { id: "gabinetes", name: "Gabinetes", img: imgGabinetes },
  { id: "discos", name: "Discos", img: imgDiscos },
];

const Categories = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-3">Categorías</h2>
      <p className="text-muted">Elegí una categoría para ver los productos.</p>

      <div className="row g-3">
        {categories.map((c) => (
          <div key={c.id} className="col-12 col-sm-6 col-lg-4">
            <Link to={`/category/${c.id}`} className="cat-card">
              <div className="cat-card__img">
                <img src={c.img} alt={c.name} />
              </div>

              <div className="cat-card__body">
                <h5 className="mb-0">{c.name}</h5>
                <span className="cat-card__hint">Ver productos →</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
