import axios from "axios";
import { AnimeDataCuratedProps, AnimeDataProps } from "models/AnimeDataModel";
import React, { useEffect, useState } from "react";
import {
  getExplicitDataFromAnime,
  getRandomElement,
} from "utils/helpingFunctions";
import { getRandomAnimeByScorePrompt } from "utils/prompts";
import Searchbar from "Components/Searchbar";
import Card from "Components/Card";
import CardGrid from "Components/CardGrid";
import "./styled.scss";

const apiUrl = "https://api.jikan.moe/v4/anime";

const GuessAnimeBySpec = () => {
  const [animeToGuess, setAnimeToGuess] = useState<AnimeDataCuratedProps>();
  const [animeIdToGuess, setAnimeIdToGuess] = useState<number>();
  const [playerGuess, setPlayerGuess] = useState<AnimeDataCuratedProps[]>([]);

  useEffect(() => {
    getNewAnimeToGuess();
  }, []);

  useEffect(() => {
    if (!animeIdToGuess) return;
    getPlayerGuess();
  }, [animeIdToGuess]);

  const getNewAnimeToGuess = () => {
    axios.get(getRandomAnimeByScorePrompt(6.5, apiUrl)).then((res) => {
      const animeList = res.data.data;
      if (!animeList || animeList === undefined) return;
      if (!animeToGuess) {
        setAnimeToGuess(getExplicitDataFromAnime(getRandomElement(animeList)));
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
  };

  console.log(animeToGuess);

  //get this to use Effect
  const getPlayerGuess = () => {
    axios.get(`${apiUrl}/${animeIdToGuess}`).then((res) => {
      const playerAnimeGuess = res.data.data as AnimeDataProps; //maybe an error cuz res.data
      const curatedPlayerAnimeGuess =
        getExplicitDataFromAnime(playerAnimeGuess);
      if (curatedPlayerAnimeGuess === undefined) return;
      //check here
      if (playerGuess === undefined || playerGuess.length === 0) {
        setPlayerGuess([curatedPlayerAnimeGuess]);
      } else {
        setPlayerGuess([...playerGuess, curatedPlayerAnimeGuess]);
      }
      console.log(curatedPlayerAnimeGuess);
    });
  };

  return (
    <div className='GuessAnimeBySpec'>
      <Searchbar setAnimeIdToGuess={setAnimeIdToGuess} />
      {animeToGuess !== undefined && playerGuess !== undefined && (
        <CardGrid animes={playerGuess} correctAnime={animeToGuess} />
      )}
    </div>
  );
};

export default GuessAnimeBySpec;
