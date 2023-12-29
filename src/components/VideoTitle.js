import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-4 w-1/4">{overview}</p>
      <div className="flex my-2 md:0">
        <button className="bg-white text-black py-2  md:py-4 px-12  text-xl cursor-pointer  rounded-lg hover:bg-opacity-50">
          <FaPlay />
        </button>
        <button className="hidden md:block mx-2 bg-gray-600 text-white p-4 px-12  text-xl cursor-pointer  rounded-lg hover:bg-opacity-60">
          <FaInfoCircle />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
