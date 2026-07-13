import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h1>My Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          No favorite movies yet ❤️
        </h2>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
              </Link>

              <div className="movie-info">
                <h3>{movie.title}</h3>

                <p>⭐ {movie.vote_average.toFixed(1)}</p>

                <button
                  className="btn"
                  onClick={() => removeFavorite(movie.id)}
                >
                  ❤️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;