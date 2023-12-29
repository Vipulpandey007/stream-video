import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="pt-[18%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-4 w-1/4">{overview}</p>
      <div className="flex gap-3 mt-4">
        <Link
          to={"/watch?v=" + id}
          className="px-4 md:px-6 py-[15px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2"
        >
          <FaPlay style={{ fontSize: "20px" }} />
          <span>Play</span>
        </Link>
        <button className="px-4 md:px-6 py-[15px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2">
          <FaInfoCircle style={{ fontSize: "20px" }} />
          <span>Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
