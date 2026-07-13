import { useEffect, useState } from "react";

import { getPopularMovies } from "../services/tmdb";

import MovieCard from "../components/MovieCard";

function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function loadMovies() {

            try{

                const data =
                    await getPopularMovies();

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

            <h1>Popular Movies</h1>

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

        </div>

    );

}

export default Home;