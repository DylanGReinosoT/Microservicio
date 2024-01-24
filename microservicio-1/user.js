const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const puerto = 3004;

app.use(cors());

app.get("/users", (req, res) => {
  // Obtener la lista de usuarios
  axios
    .get("http://localhost:3004/users")
    .then((response) => {
      // Devolver la lista de usuarios
      res.send(response.data);
    })
    .catch((error) => {
      // Manejar el error
      res.send(error);
    });
});

// Iniciar la aplicación
app.listen(puerto, () => {
  console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
