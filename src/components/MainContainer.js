import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return <Shimmer />;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo movieid={id} />
    </div>
  );
};

export default MainContainer;
