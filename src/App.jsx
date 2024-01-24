import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import users from "../database/users.js";
import products from "../database/products.js";

function App() {
  const [user, setUsers] = useState(user);
  const [product, setProducts] = useState(product);

  useEffect(() => {
    axios
      .get("http://localhost:3004/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3006/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
