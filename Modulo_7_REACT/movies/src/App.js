import React, { useState, useEffect } from "react";

import { Search } from "./components/Search";
import { Selector } from "./components/Selector";
import { getMovies } from "./http/movieService";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    getMovies(search, type).then(movies => {
      setMovies(movies);
    });
  }, [search, type]);

  return (
    <main>
      <aside>
        <Search text={search} onSearchChange={text => setSearch(text)} />
        <Selector type={type} onTypeChange={t => setType(t)} />
      </aside>
      <section id="content">
        {movies.map(({ Title, Poster, Year }) => (
          <div class="movie">
            <div
              class="movie-image"
              style={{
                backgroundImage: `url(${
                  Poster === "N/A" ? "https://via.placeholder.com/200" : Poster
                }`
              }}
            />
            <div class="movie-info">
              <p>{Title}</p>
              <small>{Year}</small>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export { App };
