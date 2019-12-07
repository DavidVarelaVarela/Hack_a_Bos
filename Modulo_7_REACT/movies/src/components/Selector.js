import React from "react";

function Selector({ type, onTypeChange }) {
  return (
    <div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="movie"
            checked={type === "movie"}
            onChange={e => onTypeChange(e.target.value)}
          />
          <span>Movies</span>
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="series"
            checked={type === "series"}
            onChange={e => onTypeChange(e.target.value)}
          />
          <span>TV Shows</span>
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="episode"
            checked={type === "episode"}
            onChange={e => onTypeChange(e.target.value)}
          />
          <span>Episode</span>
        </label>
      </div>
    </div>
  );
}

export { Selector };
