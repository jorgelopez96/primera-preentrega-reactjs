export const products = [
  // PROCESADORES (AM4 / AM5)

  {
    id: "cpu-r3-4100-am4",
    title: "AMD Ryzen 3 4100 (AM4)",
    description: "4 núcleos / 8 hilos, opción económica para entrada en AM4.",
    price: 110000,
    category: "procesadores",
    brand: "AMD",
    image: "/images/products/ryzen3-4100.jpeg",
    platform: "AM4",
    stock: 30,
    isBestSeller: true,
  },
  {
    id: "cpu-r5-5600-am4",
    title: "AMD Ryzen 5 5600 (AM4)",
    description:
      "6 núcleos / 12 hilos, excelente rendimiento/precio para gaming.",
    price: 180000,
    category: "procesadores",
    brand: "AMD",
    image: "/images/products/ryzen5-5600.jpeg",
    platform: "AM4",
    stock: 12,
  },
  {
    id: "cpu-r7-5800x-am4",
    title: "AMD Ryzen 7 5800X (AM4)",
    description:
      "8 núcleos / 16 hilos, gran rendimiento en gaming y productividad.",
    price: 260000,
    category: "procesadores",
    brand: "AMD",
    image: "/images/products/ryzen7-5800x.jpeg",
    platform: "AM4",
    stock: 8,
    isOffer: true,
  },
  {
    id: "cpu-r3-8300g-am5",
    title: "AMD Ryzen 3 8300G (AM5)",
    description:
      "Entrada AM5 con gráficos integrados, ideal para armado sin GPU.",
    price: 210000,
    category: "procesadores",
    brand: "AMD",
    image: "/images/products/ryzen3-8300g.jpeg",
    platform: "AM5",
    stock: 7,
  },
  {
    id: "cpu-r5-7600-am5",
    title: "AMD Ryzen 5 7600 (AM5)",
    description:
      "6 núcleos / 12 hilos, base sólida para AM5 con muy buen rendimiento.",
    price: 320000,
    category: "procesadores",
    brand: "AMD",
    image: "/images/products/ryzen5-7600g.jpeg",
    platform: "AM5",
    stock: 9,
  },
  {
    id: "cpu-r7-7800x3d-am5",
    title: "AMD Ryzen 7 7800X3D (AM5)",
    description: "Uno de los mejores CPUs para gaming, 3D V-Cache.",
    price: 520000,
    category: "procesadores",
    brand: "AMD",
    image: "/images/products/ryzen7-7800x3d.jpeg",
    platform: "AM5",
    stock: 5,
    isNew: true,
  },

  // PLACAS DE VIDEO

  {
    id: "gpu-rtx-3050",
    title: "NVIDIA GeForce RTX 3050",
    description: "Entrada con DLSS, ideal 1080p competitivo.",
    price: 320000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-3050.jpeg",
    stock: 15,
    isBestSeller: true,
  },
  {
    id: "gpu-rtx-3060",
    title: "NVIDIA GeForce RTX 3060",
    description: "Buen equilibrio para 1080p/1440p con DLSS.",
    price: 420000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-3060.jpeg",
    stock: 30,
    isOffer: true,
  },
  {
    id: "gpu-rtx-4060",
    title: "NVIDIA GeForce RTX 4060",
    description: "Eficiente, gran opción para 1080p y DLSS 3.",
    price: 520000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-4060.jpeg",
    stock: 7,
  },
  {
    id: "gpu-rtx-4060ti",
    title: "NVIDIA GeForce RTX 4060 Ti",
    description: "Más potencia para 1440p con DLSS 3.",
    price: 650000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-4060ti.jpg",
    stock: 5,
  },
  {
    id: "gpu-rtx-5070",
    title: "NVIDIA GeForce RTX 5070",
    description: "Gama alta moderna para 1440p/4K con tecnologías nuevas.",
    price: 950000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-5070.jpg",
    stock: 3,
  },
  {
    id: "gpu-rtx-5070ti",
    title: "NVIDIA GeForce RTX 5070 Ti",
    description: "Más rendimiento sostenido para 4K, orientada a high-end.",
    price: 1150000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-5070ti.jpg",
    stock: 2,
  },
  {
    id: "gpu-rtx-5080",
    title: "NVIDIA GeForce RTX 5080",
    description: "Tope de gama para 4K/ultra, rendimiento premium.",
    price: 1550000,
    category: "placas-de-video",
    brand: "NVIDIA",
    image: "/images/products/rtx-5080.jpg",
    stock: 3,
    isNew: true,
  },

  // MEMORIAS RAM (DDR4 / DDR5)
  {
    id: "ram-ddr4-8",
    title: "Memoria DDR4 8GB 3200MHz",
    description: "Módulo 8GB DDR4, ideal para upgrades económicos.",
    price: 35000,
    category: "memorias-ram",
    type: "DDR4",
    capacity: "8GB",
    image: "/images/products/memoria-ddr4-8gb-3200mhz.jpeg",
    stock: 30,
    isBestSeller: true,
  },
  {
    id: "ram-ddr4-16",
    title: "Memoria DDR4 16GB 3200MHz",
    description: "Módulo 16GB DDR4, recomendado para gaming.",
    price: 65000,
    category: "memorias-ram",
    type: "DDR4",
    capacity: "16GB",
    image: "/images/products/memoria-ddr4-16gb-3200mhz.jpeg",
    stock: 15,
    isOffer: true,
  },
  {
    id: "ram-ddr4-32",
    title: "Memoria DDR4 32GB 3200MHz",
    description: "Módulo 32GB DDR4, productividad y multitarea.",
    price: 120000,
    category: "memorias-ram",
    type: "DDR4",
    capacity: "32GB",
    image: "/images/products/memoria-ddr4-32gb-3200mhz.jpeg",
    stock: 10,
  },
  {
    id: "ram-ddr5-8",
    title: "Memoria DDR5 8GB 5200MHz",
    description: "Entrada DDR5 para plataformas nuevas.",
    price: 55000,
    category: "memorias-ram",
    type: "DDR5",
    capacity: "8GB",
    image: "/images/products/memoria-ddr5-8gb-5200mhz.jpeg",
    stock: 12,
  },
  {
    id: "ram-ddr5-16",
    title: "Memoria DDR5 16GB 5600MHz",
    description: "DDR5 16GB, ideal para AM5 y nuevas generaciones.",
    price: 95000,
    category: "memorias-ram",
    type: "DDR5",
    capacity: "16GB",
    image: "/images/products/memoria-ddr5-16gb-5600mhz.jpeg",
    stock: 12,
  },
  {
    id: "ram-ddr5-32",
    title: "Memoria DDR5 32GB 5600MHz",
    description: "DDR5 32GB, pensada para alto rendimiento.",
    price: 175000,
    category: "memorias-ram",
    type: "DDR5",
    capacity: "32GB",
    image: "/images/products/memoria-ddr5-32gb-5600mhz.jpeg",
    stock: 8,
  },

  // MOTHERBOARDS (AM4 / AM5)
  {
    id: "mb-am4-a320",
    title: "Motherboard AM4 A320 (Gama baja)",
    description: "Opción económica AM4 para builds de entrada.",
    price: 90000,
    category: "mothers",
    platform: "AM4",
    tier: "baja",
    image: "/images/products/motherboard-am4-a320.jpeg",
    stock: 6,
  },
  {
    id: "mb-am4-x570",
    title: "Motherboard AM4 X570 (Gama alta)",
    description: "Chipset premium AM4, mejor conectividad y VRM.",
    price: 220000,
    category: "mothers",
    platform: "AM4",
    tier: "alta",
    image: "/images/products/motherboard-am4-x570.jpeg",
    stock: 4,
  },
  {
    id: "mb-am5-a620",
    title: "Motherboard AM5 A620 (Gama baja)",
    description: "Entrada AM5 para armar sin gastar de más.",
    price: 170000,
    category: "mothers",
    platform: "AM5",
    tier: "baja",
    image: "/images/products/motherboard-am5-a620.jpeg",
    stock: 5,
  },
  {
    id: "mb-am5-x670e",
    title: "Motherboard AM5 X670E (Gama alta)",
    description: "Chipset premium AM5, preparada para alto rendimiento.",
    price: 420000,
    category: "mothers",
    platform: "AM5",
    tier: "alta",
    image: "/images/products/motherboard-am5-x670e.jpeg",
    stock: 3,
  },

  // FUENTES CORSAIR
  {
    id: "psu-corsair-750",
    title: "Fuente Corsair 750W",
    description: "Fuente confiable para builds gama media/alta.",
    price: 160000,
    category: "fuentes",
    brand: "Corsair",
    wattage: 750,
    image: "/images/products/fuente-corsair-750w.jpeg",
    stock: 30,
    isOffer: true,
  },
  {
    id: "psu-corsair-1000",
    title: "Fuente Corsair 1000W",
    description: "Ideal para high-end y upgrades futuros.",
    price: 280000,
    category: "fuentes",
    brand: "Corsair",
    wattage: 1000,
    image: "/images/products/fuente-corsair-1000w.jpeg",
    stock: 15,
    isBestSeller: true,
  },
  {
    id: "psu-corsair-1200",
    title: "Fuente Corsair 1200W",
    description: "Tope de gama para configuraciones extremas.",
    price: 360000,
    category: "fuentes",
    brand: "Corsair",
    wattage: 1200,
    image: "/images/products/fuente-corsair-1200w.jpeg",
    stock: 10,
  },

  // GABINETES

  {
    id: "case-corsair-4000d",
    title: "Gabinete Corsair 4000D Airflow",
    description: "Excelente flujo de aire, armado cómodo.",
    price: 190000,
    category: "gabinetes",
    brand: "Corsair",
    image: "/images/products/gabinete-corsair-4000d.jpg",
    stock: 4,
  },
  {
    id: "case-corsair-5000d",
    title: "Gabinete Corsair 5000D Airflow",
    description: "Más espacio para refrigeración y cableado.",
    price: 260000,
    category: "gabinetes",
    brand: "Corsair",
    image: "/images/products/gabinete-corsair-5000d.jpg",
    stock: 10,
    isNew: true,
  },

  // DISCOS
  {
    id: "disk-ssd-480",
    title: "SSD 480GB SATA",
    description: "SSD SATA para mejorar tiempos de carga.",
    price: 45000,
    category: "discos",
    type: "SSD",
    image: "/images/products/ssd-480gb.jpeg",
    stock: 10,
  },
  {
    id: "disk-ssd-1tb",
    title: "SSD 1TB SATA",
    description: "SSD SATA 1TB, buen balance costo/capacidad.",
    price: 85000,
    category: "discos",
    type: "SSD",
    image: "/images/products/ssd-1tb.jpeg",
    stock: 8,
  },
  {
    id: "disk-m2-500",
    title: "M.2 NVMe 500GB",
    description: "NVMe rápido para SO y juegos.",
    price: 65000,
    category: "discos",
    type: "M2",
    image: "/images/products/m2-500gb.jpeg",
    stock: 8,
  },
  {
    id: "disk-m2-1tb",
    title: "M.2 NVMe 1TB",
    description: "NVMe 1TB para rendimiento y espacio.",
    price: 120000,
    category: "discos",
    type: "M2",
    image: "/images/products/m2-1tb.jpeg",
    stock: 6,
  },
  {
    id: "disk-hdd-1tb",
    title: "Disco Rígido 1TB",
    description: "HDD para almacenamiento económico.",
    price: 50000,
    category: "discos",
    type: "HDD",
    image: "/images/products/hdd-1tb.jpeg",
    stock: 6,
  },
  {
    id: "disk-hdd-2tb",
    title: "Disco Rígido 2TB",
    description: "Más espacio para archivos y backups.",
    price: 78000,
    category: "discos",
    type: "HDD",
    image: "/images/products/hdd-2tb.jpeg",
    stock: 5,
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getProducts = async () => {
  await delay(600);
  return products;
};

export const getProductsByCategory = async (categoryId) => {
  await delay(600);
  return products.filter((p) => p.category === categoryId);
};

export const getProductById = async (itemId) => {
  await delay(600);
  return products.find((p) => p.id === itemId);
};

export const searchProducts = async (query) => {
  await delay(300);

  const q = (query || "").trim().toLowerCase();
  if (!q) return [];

  const isNewQuery =
    q === "nuevo" ||
    q === "nuevos" ||
    q === "lanzamiento" ||
    q === "lanzamientos";

  const isOfferQuery = q === "oferta" || q === "ofertas";

  const isBestQuery =
    q === "best" ||
    q === "top" ||
    q === "bestseller" ||
    q === "mas vendido" ||
    q === "más vendido" ||
    q === "mas vendidos" ||
    q === "más vendidos";

  if (isNewQuery) return products.filter((p) => p.isNew);
  if (isOfferQuery) return products.filter((p) => p.isOffer);
  if (isBestQuery) return products.filter((p) => p.isBestSeller);

  return products.filter((p) => {
    const haystack =
      `${p.title} ${p.description} ${p.category} ${p.brand ?? ""} ${p.platform ?? ""}`.toLowerCase();
    return haystack.includes(q);
  });
};
