import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addWatchVideo } from "../utils/movieSlice";

const useWatchVideo = (movieid) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getvideo();
  }, []);
  const getvideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addWatchVideo(trailer));
  };
};

export default useWatchVideo;
