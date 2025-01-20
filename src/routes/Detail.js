import { useEffect, useState } from "react";
import Movie from "../components/Movie";

import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); //id를 통해 이동할 수 있게 도움
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className="loading">MOVIE</h1>
      ) : (
        <div>
          <div className="header">
            <a href="/MOVIE">
              <h1>MOVIE</h1>
            </a>
          </div>
          <div className="body">
            <div className="movie_detail">
              <div className="close">
                <a className="close" href="/MOVIE">
                  <img src="https://cdn-icons-png.flaticon.com/256/458/458595.png"></img>
                </a>
              </div>

              <div className="movie_detail_box">
                <div className="movie_detail_img">
                  <img src={movie?.large_cover_image}></img>
                </div>
                <h1 className="movie_detail_tit">{movie?.title}</h1>
                <p className="movie_rating">Rating: {movie?.rating}</p>
                <p className="movie_detail_genres">
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
