import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";

import YouTube from "react-youtube";

import "./moviedetails.scss";

const MovieDetails = () => {
  const { id } = useParams();

  const [officialTrailer, setOfficialTrailer] = useState(null);

  const fetchMovie = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3b22df8bb961ea9cd7c3f7444bc2e3e7`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const fetchTrailer = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3b22df8bb961ea9cd7c3f7444bc2e3e7`
    );
    const data = await response.json();
    const officialTrailer = data.results.find(
      (trailer) => trailer.name === "Official Trailer"
    );
    setOfficialTrailer(officialTrailer);
    return officialTrailer;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovie(id),
    onSuccess: (movieData) => {
      fetchTrailer(id);
    },
  });

  return (
    <>
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
            {(officialTrailer && (
              <div className="youtube-container">
                {/* <YouTube videoId={officialTrailer.key} /> */}
              </div>
            )) || <p className="no-trailer">NO TRAILER AVAILABLE</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
