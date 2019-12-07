import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-container">
      <p className="counter-count">{counter}</p>
      <div className="counter-buttons">
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export { Counter };
