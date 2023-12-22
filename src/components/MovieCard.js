import React from "react";
import { CARDIMGCDN } from "../utils/Constants";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={CARDIMGCDN + posterpath} />
    </div>
  );
};

export default MovieCard;
