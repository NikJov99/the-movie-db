import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import "./moviedetails.scss";

const MovieDetails = () => {
  const { id } = useParams();

  const fetchMovie = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3b22df8bb961ea9cd7c3f7444bc2e3e7`
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovie(id),
  });

  return (
    <>
      {data && (
        <div className="movie-details-container">
          <div className="image-container">
            <img src={`http://image.tmdb.org/t/p/w500${data.poster_path}`} />
          </div>
          <div className="text-container">
            <h1>{data.title}</h1>
            <p>
              <span>Overview: </span>
              {data.overview}
            </p>
            <p>
              <span>Releashed:</span> {data.release_date}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
