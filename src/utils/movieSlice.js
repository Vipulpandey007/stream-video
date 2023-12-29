import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRated: null,
    UpcomingMovies: null,
    WatchVideo: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
    addWatchVideo(state, action) {
      state.WatchVideo = action.payload;
    },
    addPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    addTopratedMovies(state, action) {
      state.topRated = action.payload;
    },
    addUpcomingMovies(state, action) {
      state.UpcomingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingMovies,
  addWatchVideo,
} = movieSlice.actions;
export default movieSlice.reducer;
