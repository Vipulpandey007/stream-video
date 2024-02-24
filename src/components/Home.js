import React from "react";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Shimmer from "./Shimmer";

const Home = () => {
  const movies = useSelector((store) => store.movies);
  return !movies.nowPlayingMovies ? (
    <div className="relative">
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <div className="border-t-2 w-20 h-20 border-red-600 border-solid rounded-full animate-spin"></div>
        <div className="text-red-500 text-4xl mt-7">We Will Be Back Soon</div>
      </div>
    </div>
  ) : (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Home;
