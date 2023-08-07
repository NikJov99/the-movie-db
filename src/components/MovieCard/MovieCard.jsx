//other
import { Link } from "react-router-dom";

// styles
import "./moviecard.scss";

const MovieCard = ({ movieData }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(http://image.tmdb.org/t/p/w500${movieData.poster_path})`,
  };

  return (
    <Link to={`/movies/${movieData.id}`}>
      <div className="movie-card" style={backgroundImageStyle}>
        <div className="overlay-movie">
          <p>{movieData.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
