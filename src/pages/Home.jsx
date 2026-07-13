import { useEffect, useRef, useState } from "react";
import {
  getPopularMovies,
  searchMovies,
} from "../services/tmdb";

import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";

function Home() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {

    async function fetchMovies() {

      setLoading(true);

      try {

        let data;

        if (debouncedSearch.trim() === "") {

          data = await getPopularMovies(page);

        } else {

          data = await searchMovies(
            debouncedSearch,
            page
          );

        }

        if (page === 1) {

          setMovies(data.results);

        } else {

          setMovies((prev) => {

            const ids = new Set(
              prev.map((movie) => movie.id)
            );

            const newMovies = data.results.filter(
              (movie) => !ids.has(movie.id)
            );

            return [...prev, ...newMovies];

          });

        }

        setHasMore(page < data.total_pages);

      } catch (error) {

        console.log(error);

      }

      setLoading(false);

    }

    fetchMovies();

  }, [debouncedSearch, page]);

  useEffect(() => {

    setPage(1);

  }, [debouncedSearch]);

  const lastMovieRef = (node) => {

    if (loading) return;

    if (observer.current) {

      observer.current.disconnect();

    }

    observer.current = new IntersectionObserver(

      (entries) => {

        if (

          entries[0].isIntersecting &&
          hasMore

        ) {

          setPage((prev) => prev + 1);

        }

      }

    );

    if (node) {

      observer.current.observe(node);

    }

  };

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

          onChange={(e) =>
            setSearch(e.target.value)
          }

        />

      </section>

      <section className="movies-section">

        <h2>

          {debouncedSearch
            ? `Results for "${debouncedSearch}"`
            : "Popular Movies"}

        </h2>

        <div className="movie-grid">

          {movies.map((movie, index) => {

            if (index === movies.length - 1) {

              return (

                <div
                  ref={lastMovieRef}
                  key={movie.id}
                >

                  <MovieCard movie={movie} />

                </div>

              );

            }

            return (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            );

          })}

        </div>

        {loading && (

          <div className="loader"></div>

        )}

      </section>

    </div>

  );

}

export default Home;