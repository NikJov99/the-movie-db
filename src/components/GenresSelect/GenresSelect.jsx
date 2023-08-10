import Select from "react-select";
import { genres } from "../../helpers/genres";
import "./genresselect.scss";

const GenresSelect = ({ setSelectedGenre }) => {
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      cursor: state.hover ? "pointer" : "default",
    }),
  };

  return (
    <Select
      styles={customStyles}
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
