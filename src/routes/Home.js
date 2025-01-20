import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../css/Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(["9.5"]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className="loading">MOVIE</h1>
      ) : (
        <div>
          <div className="header">
            <h1>MOVIE</h1>
          </div>
          <div className="movie_box">
            <div className="movie_list">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  rating={movie.rating}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
