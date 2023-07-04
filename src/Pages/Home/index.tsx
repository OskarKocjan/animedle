import React, { useState } from "react";
import "./styled.scss";
import { getRandomAnimeByScorePrompt } from "utils/prompts";
import {
  getRandomElement,
  getExplicitDataFromAnime,
} from "utils/helpingFunctions";
import axios from "axios";
import Button from "Components/Button";
import { AnimeDataProps, AnimeDataCuratedProps } from "models/AnimeDataModel";

const apiUrl = "https://api.jikan.moe/v4/anime";

const Home = () => {
  const [animeToGuess, setAnimeToGuess] = useState<AnimeDataCuratedProps>();

  const getAnime = () => {
    axios.get(getRandomAnimeByScorePrompt(6.5, apiUrl)).then((res) => {
      const animeList = res.data.data;
      if (!animeList) return;
      if (!animeToGuess) {
        setAnimeToGuess(getRandomElement(animeList));
      } else {
        const prevId = animeToGuess.mal_id;
        let nextId;
        let anime;
        do {
          anime = getRandomElement(animeList) as AnimeDataProps;
          nextId = anime.mal_id;
        } while (prevId === nextId);
        setAnimeToGuess(getExplicitDataFromAnime(anime));
      }
    });
  };

  console.log(animeToGuess);

  return (
    <div className='Home'>
      <Button text='Get Anime to Guess!' color='primary' onClick={getAnime} />
    </div>
  );
};

export default Home;
