import React, { useRef } from "react";
import language from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handlegptsearch = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 10 movies , comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Hum Saath Saath Hain";
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = result.choices?.[0]?.message?.content.split(",");
    const data = gptMovies.map((movie) => fetchMovieTmdb(movie));
    const tmdbsResults = await Promise.all(data);
    //console.log(tmdbsResults);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbsResults })
    );
  };
  const fetchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className=" bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  col-span-9"
          placeholder={language[lang].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3"
          onClick={handlegptsearch}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
