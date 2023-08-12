import axios from "axios";

export const fetchMovie = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3b22df8bb961ea9cd7c3f7444bc2e3e7`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
