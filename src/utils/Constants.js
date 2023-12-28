export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const CARDIMGCDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPOERTED_LANGUAGES = [
  { identifiers: "en", name: "English" },
  { identifiers: "hindi", name: "Hindi" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
