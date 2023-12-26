import React from "react";
import language from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4  col-span-9"
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3">
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
