function MovieCard({ movie }) {

    const imageUrl =
        `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (

        <div className="movie-card">

            <img
                src={imageUrl}
                alt={movie.title}
                loading="lazy"
            />

            <div className="movie-info">

                <h3>{movie.title}</h3>

                <p>
                    📅 {movie.release_date?.slice(0,4)}
                </p>

                <p>
                    ⭐ {movie.vote_average.toFixed(1)}
                </p>

            </div>

        </div>

    );

}

export default MovieCard;