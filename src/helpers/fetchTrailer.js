import axios from "axios";

export const fetchTrailer = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3b22df8bb961ea9cd7c3f7444bc2e3e7`
    );
    const data = response.data;
    const officialTrailer = data.results.find(
      (trailer) => trailer.name === "Official Trailer"
    );
    return officialTrailer;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
