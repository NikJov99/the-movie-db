// components
import GenresSelect from "../GenresSelect/GenresSelect";

//styles
import "./search.scss";

const Search = ({ setSearchWord, setSelectedGenre }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Find a movie..."
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button type="submit">Search</button>
        <GenresSelect setSelectedGenre={setSelectedGenre} />
      </form>
    </div>
  );
};

export default Search;
