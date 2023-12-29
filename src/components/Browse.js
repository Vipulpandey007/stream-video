import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GPtSearch from "./GPtSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  const gptToggle = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {gptToggle ? (
        <GPtSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
