# OSIDISTECH E-Commerce

Proyecto final del curso **React JS - CoderHouse**.

OSIDISTECH es una Single Page Application de e-commerce desarrollada con React que permite navegar un catálogo de hardware, ver el detalle de productos, agregarlos al carrito y generar una orden de compra almacenada en Firebase Firestore.

---

# Demo del proyecto

*(Opcional si haces deploy en Vercel o Netlify)*

Demo online:
https://tu-link-deploy.com

# Tecnologías utilizadas

- React
- React Router DOM
- Context API
- Firebase
- Firestore Database
- Bootstrap
- Vite

---

# Funcionalidades

✔ Navegación SPA sin recargar la página  
✔ Navegación por categorías  
✔ Vista de detalle de producto  
✔ Selector de cantidad con validación de stock  
✔ Carrito de compras global con Context API  
✔ Modificar cantidades dentro del carrito  
✔ Vaciar carrito  
✔ Formulario de checkout  
✔ Generación de orden de compra  
✔ Almacenamiento de órdenes en Firestore  
✔ Renderizado condicional con loaders  

---

# Estructura del proyecto


src
┣ components
┃ ┣ CartView.jsx
┃ ┣ CartWidget.jsx
┃ ┣ Item.jsx
┃ ┣ ItemCount.jsx
┃ ┣ ItemDetail.jsx
┃ ┣ ItemDetailContainer.jsx
┃ ┣ ItemList.jsx
┃ ┣ ItemListContainer.jsx
┃ ┣ NavBar.jsx
┃ ┗ Footer.jsx
┣ context
┃ ┗ CartContext.jsx
┣ firebase
┃ ┣ firebaseConfig.js
┃ ┣ firestore.js
┃ ┗ orders.js
┣ assets
┗ App.jsx


---

# Instalación del proyecto

Clonar el repositorio:


git clone https://github.com/tuusuario/ProyectoFinalApellido.git


Entrar en la carpeta:


cd ProyectoFinalApellido


Instalar dependencias:


npm install


Ejecutar el proyecto:


npm run dev


Abrir en el navegador:


http://localhost:5173


---

# Configuración de Firebase

El proyecto utiliza **Firebase Firestore** como base de datos.

Debes crear un archivo:


src/firebase/firebaseConfig.js


con la configuración de tu proyecto Firebase.

Ejemplo:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
Colecciones en Firestore
products

Contiene los productos del catálogo.

Campos utilizados:

title
description
price
category
image
stock
orders

Se genera automáticamente cuando un usuario confirma una compra.

Estructura:

buyer
  name
  email
  phone
  address

items
  id
  title
  price
  quantity

total
createdAt
Autor

Proyecto desarrollado por

Jorge Manuel López Acevedo

Curso: React JS
Plataforma: CoderHouse
