import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";

import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GPtSearch from "./GPtSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Home from "./Home";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  const gptToggle = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {gptToggle ? <GPtSearch /> : <Home />}
      <Footer />
    </div>
  );
};

export default Browse;
