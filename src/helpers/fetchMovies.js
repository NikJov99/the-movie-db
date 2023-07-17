import axios from "axios";

const apiKey = "3b22df8bb961ea9cd7c3f7444bc2e3e7";
const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
