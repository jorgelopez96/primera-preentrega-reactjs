🖥️ OSIDISTECH – Hardware Store

Tienda online de hardware desarrollada con React, donde los usuarios pueden navegar productos, filtrarlos por categorías, buscarlos, agregarlos al carrito y finalizar la compra generando una orden almacenada en Firebase Firestore.

🔗 Demo online:
https://osidistech.vercel.app/

📦 Características principales

Catálogo de productos

Navegación por categorías

Buscador de productos

Página de detalle del producto

Carrito de compras

Modificación de cantidades en el carrito

Validación de stock

Formulario de checkout

Generación de orden de compra

Almacenamiento de órdenes en Firebase Firestore

Página de compra exitosa con resumen

Notificaciones Toast

Deploy en Vercel

🛠️ Tecnologías utilizadas

React

React Router DOM

Firebase Firestore

Bootstrap 5

Vite

JavaScript (ES6+)

📂 Estructura del proyecto
src
┣ components
┃ ┣ CartView.jsx
┃ ┣ Categories.jsx
┃ ┣ CheckoutSuccess.jsx
┃ ┣ Home.jsx
┃ ┣ ItemDetail.jsx
┃ ┣ ItemDetailContainer.jsx
┃ ┣ ItemList.jsx
┃ ┣ ItemListContainer.jsx
┃ ┣ NavBar.jsx
┃ ┣ SearchResultsContainer.jsx
┃ ┗ Footer.jsx
┃
┣ context
┃ ┗ CartContext.jsx
┃
┣ firebase
┃ ┣ firebaseConfig.js
┃ ┣ firestore.js
┃ ┗ orders.js
┃
┣ assets
┃ ┣ css
┃ ┗ images
┃
┗ App.jsx

🛒 Flujo de compra

1️⃣ El usuario navega por los productos
2️⃣ Puede filtrar por categorías o buscar productos
3️⃣ Agrega productos al carrito
4️⃣ Modifica cantidades o elimina productos
5️⃣ Completa el formulario de compra
6️⃣ Se genera una orden en Firebase Firestore
7️⃣ Se muestra una pantalla con el resumen de la compra

🔥 Firebase

Las órdenes de compra se almacenan en Cloud Firestore dentro de la colección:

orders

Cada orden contiene:

Datos del comprador

Productos comprados

Cantidad

Precio

Total de la compra

Fecha

🚀 Instalación local

Clonar el repositorio:

git clone https://github.com/jorgelopez96/primera-preentrega-reactjs

Entrar en el proyecto:

cd nombre-del-proyecto

Instalar dependencias:

npm install

Ejecutar el proyecto:

npm run dev
🌐 Deploy

El proyecto está desplegado en Vercel.

Demo online:

https://osidistech.vercel.app/

👨‍💻 Autor

Proyecto desarrollado por Jorge Lopez
Curso de React JS
