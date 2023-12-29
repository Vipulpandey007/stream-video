import React, { useState } from "react";
import { CARDIMGCDN } from "../utils/Constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterpath, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const hoverstyle = {
    transform: isHovered ? "scale(1.1)" : "scale(1)", // Enlarge on hover
    transition: "transform 0.3s ease-in-out", // Smooth transition effect
  };
  if (!posterpath) return null;
  return (
    <Link to={"/watch?v=" + id}>
      <div
        className="w-36 md:w-48 pr-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          alt="movie card"
          style={hoverstyle}
          src={CARDIMGCDN + posterpath}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
