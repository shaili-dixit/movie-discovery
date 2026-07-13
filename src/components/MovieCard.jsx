import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {

    const navigate = useNavigate();

    const imageUrl =
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    function handleMovieClick() {
        navigate(`/movie/${movie.id}`);
    }

    return (

        <div
            className="movie-card fade-in"
            onClick={handleMovieClick}
        >

            <img
                src={imageUrl}
                alt={movie.title}
                loading="lazy"
            />

            <div className="movie-content">

                <h3>{movie.title}</h3>

                <p>
                    📅 {movie.release_date?.slice(0,4)}
                </p>

                <p className="rating">
                    ⭐ {movie.vote_average.toFixed(1)}
                </p>

            </div>

        </div>

    );

}

export default MovieCard;