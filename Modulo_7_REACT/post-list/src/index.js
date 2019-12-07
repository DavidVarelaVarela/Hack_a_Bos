import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTodos() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTodos(response.data);
      setLoading(false);
    }

    getTodos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {todos.map(({ id, title, body }, index) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
