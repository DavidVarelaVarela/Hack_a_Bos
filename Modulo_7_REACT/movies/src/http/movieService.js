import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
const API_KEY = "6e1671bc";

async function getMovies(search, type) {
  const response = await axios.get(
    `${API_BASE_URL}?apikey=${API_KEY}&s=${search}&type=${type}`
  );
  return response.data.Search || [];
}

export { getMovies };
