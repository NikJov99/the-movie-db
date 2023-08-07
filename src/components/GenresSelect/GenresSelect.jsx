import ReactSelect from "react-select";
import { genres } from "../../helpers/genres";

const GenresSelect = ({ setSelectedGenre }) => {
  return (
    <ReactSelect
      onChange={(value) => {
        let genreId = parseInt(value.value);
        setSelectedGenre(genreId);
      }}
      options={Object.entries(genres).map(([key, genre]) => {
        return {
          value: key,
          label: genre,
        };
      })}
    />
  );
};

export default GenresSelect;