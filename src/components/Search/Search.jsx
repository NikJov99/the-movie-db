import "./search.scss";

const Search = ({ setSearchWord }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Find a movie..."
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
