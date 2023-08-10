import Select from "react-select";
import { genres } from "../../helpers/genres";
import "./genresselect.scss";

const GenresSelect = ({ setSelectedGenre }) => {
  return (
    <Select
      styles={{
        placeholder: (baseStyles) => ({
          ...baseStyles,
          fontFamily: "Roboto",
          marginRight: "2rem",
          padding: "1rem 0",
        }),
        dropdownIndicator: () => ({
          color: "#e50914",
          margin: "0 0.3rem",
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: "#464646",
          borderWidth: "2px",
          backgroundColor: "#00000056",
          outline: "none",
        }),
        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: "none",
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: "#00000056",
        }),
      }}
      placeholder="Select genre..."
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
