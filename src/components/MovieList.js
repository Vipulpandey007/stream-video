import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-6 ">
      <h1 className="text-lg md:text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            posterpath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
