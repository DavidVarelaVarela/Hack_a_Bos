import React, { useRef } from "react";

function Search({ onSearchChange }) {
  const input = useRef();

  return (
    <React.Fragment>
      <input ref={input} type="text" placeholder="Search for movies" />
      <button onClick={() => onSearchChange(input.current.value)}>
        Search
      </button>
    </React.Fragment>
  );
}

export { Search };
