const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function getPopularMovies() {

    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch movies");
    }

    return response.json();
}

export async function searchMovies(query) {

    const response = await fetch(

        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`

    );

    if(!response.ok){

        throw new Error("Search Failed");

    }

    return response.json();

}