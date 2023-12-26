import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import nlogo from "../assets/netfliximg.jpg";

const GPtSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={nlogo} alt="background-img" />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GPtSearch;
