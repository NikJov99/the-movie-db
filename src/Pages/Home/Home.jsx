import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../helpers/fetchMovies";
import Search from "../../components/Search/Search";
import { useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

import "../Home/home.scss";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });

  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="home">
      <div className="intro">
        <h1>
          Everything about the <span>movies</span> in one place!
        </h1>
        <p>Find the one you want to see.</p>
      </div>
      <Search setSearchWord={setSearchWord} />
      <div className="movie-cards-container">
        {isLoading && <Loader />}
        {data &&
          data
            .filter((movie) => {
              if (searchWord === "") {
                return true;
              } else {
                return movie.title
                  .toLowerCase()
                  .includes(searchWord.toLowerCase());
              }
            })
            .map((movie) => <MovieCard key={movie.id} movieData={movie} />)}
      </div>
    </div>
  );
};

export default Home;
