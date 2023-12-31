// hooks
import { useEffect, useState, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";

// helpers
import { fetchMovies } from "../../helpers/fetchMovies";

// components
import Search from "../../components/Search/Search";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

//styles
import "../Home/home.scss";

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchMovies,
  });

  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const [, startTransition] = useTransition();

  useEffect(() => {
    if (data) {
      startTransition(() => {
        const filteredBySearch = data.filter((movie) => {
          if (searchWord === "") {
            return true;
          } else {
            return movie.title.toLowerCase().includes(searchWord.toLowerCase());
          }
        });

        if (selectedGenre === null) {
          setFilteredData(filteredBySearch);
        } else {
          const filteredByGenre = filteredBySearch.filter((movie) => {
            return movie.genre_ids.includes(selectedGenre);
          });
          setFilteredData(filteredByGenre);
        }
      });
    }
  }, [searchWord, data, selectedGenre]);

  return (
    <div className="home">
      <div className="intro">
        <h1>Everything about the movies in one place!</h1>
        <p>Find the one you want to see.</p>
      </div>
      <Search
        setSearchWord={setSearchWord}
        setSelectedGenre={setSelectedGenre}
      />
      <div className="movie-cards-container">
        {isLoading && <Loader />}
        {filteredData.length === 0 ? (
          <p className="no-movie-err">No movie found</p>
        ) : (
          filteredData.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
