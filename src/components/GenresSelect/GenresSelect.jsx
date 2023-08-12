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
      margin: "0.4rem 1rem 0 0",
      transform: "scale(1.4)",
    }),
    control: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      borderColor: isFocused ? "#464646" : "#464646",
      borderWidth: "2px",
      boxShadow: "none",
      outline: "none",
      backgroundColor: "#00000056",
      cursor: "pointer",
      minWidth: "200px",
      height: "60px",
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "#transparent",
      color: "white",
      fontFamily: "Roboto",
      borderRadius: "5px",
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "#000000ee",
      textAlign: "center",
    }),
    option: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      cursor: "pointer",
      backgroundColor: "transparent",
      color: isFocused ? "#b30c14" : "white",
      fontWeight: "600",
      transition: "0.10s ease",
      zIndex: "9999",
    }),
  };

  return (
    <div className="select-container">
      <Select
        menuPortalTarget={document.body}
        styles={customStyles}
        isSearchable={false}
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
    </div>
  );
};

export default GenresSelect;
