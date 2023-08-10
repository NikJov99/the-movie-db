import Select from "react-select";
import { genres } from "../../helpers/genres";
import "./genresselect.scss";

const GenresSelect = ({ setSelectedGenre }) => {
  const customStyles = {
    placeholder: (baseStyles) => ({
      ...baseStyles,
      fontFamily: "Roboto, sans-serif",
      textAlign: "left",
      fontWeight: "400",
      fontSize: "1rem",
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: "1rem",
    }),
    dropdownIndicator: () => ({
      color: "#e50914",
      margin: "0 1rem",
      transform: "scale(1.5)",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: "#464646",
      borderWidth: "2px",
      backgroundColor: "#00000056",
      boxShadow: state.isActive ? "none" : "none",
      cursor: "pointer",
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "#000",
      opacity: "90%",
      color: "red",
      fontFamily: "Roboto",
      borderRadius: "5px",
    }),
    menuPortal: (baseStyles) => ({
      ...baseStyles,
      color: "aqua",
      backgroundColor: "green",
    }),
  };

  return (
    <Select
      styles={customStyles}
      defaultValue="All"
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
