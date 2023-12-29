import React from "react";
import { useSearchParams } from "react-router-dom";
import useWatchVideo from "../hooks/useWatchVideo";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import logo from "../assets/logo.png";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const movieid = searchParams.get("v");
  useWatchVideo(movieid);
  const wVideo = useSelector((store) => store.movies.WatchVideo);
  return (
    <div className="w-screen h-screen  bg-black">
      <img className="w-44 mx-auto md:mx-10 pt-[5%]" src={logo} alt="logo" />
      {!wVideo ? (
        <Shimmer />
      ) : (
        <iframe
          className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
          src={`https://www.youtube.com/embed/${wVideo.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Watch;
