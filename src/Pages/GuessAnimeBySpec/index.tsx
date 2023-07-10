import axios from "axios";
import { AnimeDataCuratedProps, AnimeDataProps } from "models/AnimeDataModel";
import React, { useEffect, useState } from "react";
import {
  getExplicitDataFromAnime,
  getRandomElement,
} from "utils/helpingFunctions";
import { getRandomAnimeByScorePrompt } from "utils/prompts";
import Searchbar from "Components/Searchbar";
import CardGrid from "Components/CardGrid";
import LivesBar from "Components/LivesBar";
import GameOver from "Components/GameOver";
import "./styled.scss";
import { useLocation } from "react-router-dom";

const apiUrl = "https://api.jikan.moe/v4/anime";
const rangeNumbers = [6.5, 7.5, 8, 8.5];

const GuessAnimeBySpec = () => {
  const [animeToGuess, setAnimeToGuess] = useState<AnimeDataCuratedProps>();
  const [animeIdPlayerGuess, setAnimeIdToGuess] = useState<number>();
  const [playerGuess, setPlayerGuess] = useState<AnimeDataCuratedProps[]>([]);
  const [lives, setLives] = useState(8);
  const [gameOnAndOutcome, setGameOnAndOutcome] = useState([true, false]);

  const location = useLocation();

  useEffect(() => {
    getNewAnimeToGuess();
  }, []);

  useEffect(() => {
    if (!animeIdPlayerGuess) return;
    getPlayerGuess();
  }, [animeIdPlayerGuess]);

  const getNewAnimeToGuess = () => {
    axios
      .get(
        getRandomAnimeByScorePrompt(getAnimeRange(location.pathname), apiUrl)
      )
      .then((res) => {
        const animeList = res.data.data;
        if (!animeList || animeList === undefined) return;
        if (!animeToGuess) {
          setAnimeToGuess(
            getExplicitDataFromAnime(getRandomElement(animeList))
          );
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

  const getAnimeRange = (path: string) => {
    const range = +path.split("/").slice(-1)[0];
    if (rangeNumbers.includes(range)) return range;
    return 6.5;
  };

  //get this to use Effect
  const getPlayerGuess = () => {
    axios.get(`${apiUrl}/${animeIdPlayerGuess}`).then((res) => {
      const playerAnimeGuess = res.data.data as AnimeDataProps; //maybe an error cuz res.data
      const curatedPlayerAnimeGuess =
        getExplicitDataFromAnime(playerAnimeGuess);

      if (curatedPlayerAnimeGuess === undefined || animeToGuess === undefined)
        return;
      if (curatedPlayerAnimeGuess.mal_id === animeToGuess.mal_id) {
        setGameOnAndOutcome([false, true]);
        return;
      }
      if (lives === 1) {
        setGameOnAndOutcome([false, false]);
        return;
      }
      if (playerGuess === undefined || playerGuess.length === 0) {
        //check here
        setPlayerGuess([curatedPlayerAnimeGuess]);
      } else {
        setPlayerGuess([...playerGuess, curatedPlayerAnimeGuess]);
      }
      setLives(lives - 1);
    });
  };

  return (
    <div className='GuessAnimeBySpec'>
      {gameOnAndOutcome[0] ? (
        <>
          <LivesBar numberOfLives={lives} />
          <Searchbar setAnimeIdToGuess={setAnimeIdToGuess} />
          {animeToGuess !== undefined && playerGuess !== undefined && (
            <CardGrid animes={playerGuess} correctAnime={animeToGuess} />
          )}
        </>
      ) : (
        <>
          <GameOver
            img={animeToGuess?.img || ""}
            win={gameOnAndOutcome[1]}
            title={animeToGuess?.title || ""}
          />
        </>
      )}
    </div>
  );
};

export default GuessAnimeBySpec;
