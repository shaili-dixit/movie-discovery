import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

function Home() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        async function loadMovies() {

            try{

                const data = await getPopularMovies();
                setMovies(data.results);

            }
            catch(error){

                console.log(error);

            }

        }

        loadMovies();

    },[]);

    return (

        <div className="home">

            <section className="hero">

                <h1>🎬 Discover Amazing Movies</h1>

                <p>
                    Browse the latest popular movies from TMDB.
                    Search, save favorites and discover your next watch.
                </p>

                <SearchBar
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </section>

            <section className="movies-section">

                <h2>Popular Movies</h2>

                <div className="movie-grid">

                    {

                        movies.map((movie)=>(

                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />

                        ))

                    }

                </div>

            </section>

        </div>

    );

}

export default Home;