import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <div>
        {movie.id ? (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Detail;
