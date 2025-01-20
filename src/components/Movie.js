import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres, rating }) {
  return (
    <div className="movie_item">
      <div className="movie_img">
        <div className="imgBtn"></div>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
      </div>
      <h2 className="movie_title">{title}</h2>
      <h2 className="movie_rating">{rating}</h2>
      <h2 className="movie_genres">{genres}</h2>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};
export default Movie;
