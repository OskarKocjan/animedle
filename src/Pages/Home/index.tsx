import React from "react";
import { getRandomAnimeByScorePrompt } from "utils/prompts";
import { getRandomElement } from "utils/helpingFunctions";

const apiUrl = "https://api.jikan.moe/v4/anime";

const Home = () => {
  console.log(getRandomAnimeByScorePrompt(6.5, apiUrl));

  return <div>Home</div>;
};

export default Home;
