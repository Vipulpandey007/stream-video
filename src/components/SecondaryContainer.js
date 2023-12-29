import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.topRated &&
    movies.UpcomingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-56 pl-1 md:pl-12 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRated} />
          <MovieList title={"UpComing Movies"} movies={movies.UpcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
