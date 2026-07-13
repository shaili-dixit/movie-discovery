import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function MovieDetails() {

    const { id } = useParams();

    const { favorites, addFavorite } = useContext(FavoritesContext);

    const [movie, setMovie] = useState(null);

    useEffect(() => {

        async function loadMovie() {

            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            );

            const data = await response.json();

            setMovie(data);

        }

        loadMovie();

    }, [id]);

    if (!movie) {

        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

    }

    const imageUrl =
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const alreadyAdded = favorites.some(
        item => item.id === movie.id
    );

    return (

        <div className="details-page">

            <img
                src={imageUrl}
                alt={movie.title}
            />

            <div className="details-content">

                <h1>{movie.title}</h1>

                <h3>⭐ {movie.vote_average.toFixed(1)}</h3>

                <h3>📅 {movie.release_date}</h3>

                <p>{movie.overview}</p>

                <button
                    className="btn"
                    disabled={alreadyAdded}
                    onClick={() => addFavorite(movie)}
                >

                    {
                        alreadyAdded
                        ? "✅ Added to Favorites"
                        : "❤️ Add to Favorites"
                    }

                </button>

            </div>

        </div>

    );

}

export default MovieDetails;