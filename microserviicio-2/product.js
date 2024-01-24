// Importar dependencias
const express = require("express");
const axios = require("axios");
const puerto = 3006;
// Crear la aplicación Express
const app = express();

// Definir las rutas
app.get("/products", (req, res) => {
  // Obtener la lista de productos
  axios
    .get("http://localhost:3006/products")
    .then((response) => {
      // Devolver la lista de productos
      res.send(response.data);
    })
    .catch((error) => {
      // Manejar el error
      res.send(error);
    });
});

// Iniciar la aplicación
app.listen(puerto, () => {
  console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
