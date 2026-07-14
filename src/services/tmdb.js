const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

console.log("API KEY:", API_KEY);

// Popular Movies
export async function getPopularMovies(page = 1) {

    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    return response.json();
}

// Search Movies
export async function searchMovies(query, page = 1) {

    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    );

    if (!response.ok) {
        throw new Error("Failed to search movies");
    }

    return response.json();
}