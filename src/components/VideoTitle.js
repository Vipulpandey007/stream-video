import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex ">
        <button className="bg-white text-black p-4 px-12  text-xl cursor-pointer  rounded-lg hover:bg-opacity-50">
          <FaPlay />
        </button>
        <button className="mx-2 bg-gray-600 text-white p-4 px-12  text-xl cursor-pointer  rounded-lg hover:bg-opacity-60">
          <FaInfoCircle />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
