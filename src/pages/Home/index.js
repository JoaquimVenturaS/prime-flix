import { useEffect, useState } from "react";
import api from "../../services/api";

//https://api.themoviedb.org/3/movie/now_playing

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "6f549934c763e99304b730e27b9865e5",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(response.data.results);
    }

    loadFilms();
  }, []);

  return (
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  );
}

export default Home;
