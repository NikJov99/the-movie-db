// hooks
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

// components
import Loader from "../../components/Loader/Loader";
import YouTube from "react-youtube";

// helpers
import { fetchMovie } from "../../helpers/fetchMovie";
import { fetchTrailer } from "../../helpers/fetchTrailer";

// styles
import "./moviedetails.scss";

const MovieDetails = () => {
  const { id } = useParams();

  const [officialTrailer, setOfficialTrailer] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovie(id),
    onSuccess: async () => {
      const trailer = await fetchTrailer(id);
      setOfficialTrailer(trailer);
    },
  });

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <div className="movie-details-container">
          <div className="movie-info">
            <div className="image-container">
              <img src={`http://image.tmdb.org/t/p/w500${data.poster_path}`} />
            </div>
            <div className="text-container">
              <h1>{data.title}</h1>
              <p>
                <span>Releashed:</span> {data.release_date}
              </p>
              <p>
                <span>Overview: </span>
                {data.overview}
              </p>
              <p>
                <span>Votes:</span> {data.vote_count}
              </p>
              <p>
                <span>Rating:</span> {data.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
          <div className="trailer-container">
            {isLoading && <Loader />}
            {(officialTrailer && (
              <div className="youtube-container">
                <YouTube videoId={officialTrailer.key} />
              </div>
            )) || <p className="no-trailer">NO TRAILER AVAILABLE</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
