import axios from "axios";
import { AnimeDataCuratedProps, AnimeDataProps } from "models/AnimeDataModel";
import React, { useEffect, useState } from "react";
import {
  getExplicitDataFromAnime,
  getRandomElement,
} from "utils/helpingFunctions";
import { getRandomAnimeByScorePrompt } from "utils/prompts";
import Searchbar from "Components/Searchbar";

const apiUrl = "https://api.jikan.moe/v4/anime";

const GuessAnimeBySpec = () => {
  const [animeToGuess, setAnimeToGuess] = useState<AnimeDataCuratedProps>();
  const [animeIdToGuess, setAnimeIdToGuess] = useState<number>();

  useEffect(() => {
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
      console.log(animeToGuess);
    });
  }, []);

  console.log(animeIdToGuess);

  return (
    <div>
      <Searchbar setAnimeIdToGuess={setAnimeIdToGuess} />
    </div>
  );
};

export default GuessAnimeBySpec;
