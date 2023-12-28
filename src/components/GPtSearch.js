import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_URL } from "../utils/Constants";

const GPtSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="background-img"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GPtSearch;
