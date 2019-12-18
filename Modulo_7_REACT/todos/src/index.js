import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value === "") {
      return;
    }

    if (todos.includes(value)) {
      return;
    }

    setTodos([value, ...todos]);
    setValue("");
  };

  return (
    <Container>
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyPress={e => e.key === "Enter" && addTodo()}
        />
        <Button onClick={addTodo} primary>
          Add todo
        </Button>
      </div>
      <ul>
        {todos.map(todo => (
          <li onClick={() => setTodos(todos.filter(t => t !== todo))}>
            {todo}
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.main`
  input {
    border: 2px solid black;
  }

  ul {
    li {
      color: red;
    }
  }
`;

const Button = styled.button`
  background: ${props => (props.primary ? "blue" : "black")};
  color: white;
  height: 30px;
  padding: 5px 10px;
  :hover {
    opacity: 0.7;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
