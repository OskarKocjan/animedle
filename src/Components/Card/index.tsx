import React, { useEffect, useState } from "react";
import { CardProps } from "models/CardModel";
import CardTile from "Components/CardTile";
import {
  CardTileTypes,
  CardTileStateBg,
  CardTileInequality,
  CardTilesStates,
} from "models/CardModel";
import {
  checkAnimeDataNumber,
  checkAnimeDataArray,
  checkAnimeDataString,
} from "utils/helpingFunctions";
import "./styled.scss";

const Card = ({ anime, correctAnime }: CardProps) => {
  const [cardTilesStates, setCardTilesStates] = useState<CardTilesStates>();

  useEffect(() => {
    const cardStates = {} as CardTilesStates;
    cardStates.score = checkAnimeDataNumber(correctAnime.score, anime.score);
    cardStates.episodes = checkAnimeDataNumber(
      correctAnime.episodes,
      anime.episodes
    );
    cardStates.popularity = checkAnimeDataNumber(
      correctAnime.popularity,
      anime.popularity
    );
    cardStates.type = checkAnimeDataString(correctAnime.type, anime.type);
    cardStates.source = checkAnimeDataString(correctAnime.source, anime.source);
    cardStates.rating = checkAnimeDataString(correctAnime.rating, anime.rating);
    cardStates.producers = checkAnimeDataArray(
      correctAnime.producers,
      anime.producers
    );
    cardStates.licensors = checkAnimeDataArray(
      correctAnime.licensors,
      anime.licensors
    );
    cardStates.studios = checkAnimeDataArray(
      correctAnime.studios,
      anime.studios
    );
    cardStates.genres = checkAnimeDataArray(correctAnime.genres, anime.genres);
    cardStates.themes = checkAnimeDataArray(correctAnime.themes, anime.themes);

    setCardTilesStates(cardStates);
  }, []);

  if (!anime || anime === undefined) return <>Error</>;

  console.log(correctAnime);

  return (
    <div className='card-container'>
      <div className='card-title'>{anime.title}</div>
      <div className='anime-card bg-white'>
        <CardTile
          data={anime.img}
          classes={"btl-1"}
          type={CardTileTypes.string}
        />
        <CardTile
          data={anime.score}
          classes={`btr-1 ${cardTilesStates?.score[0]}`}
          type={CardTileTypes.number}
          name='Score'
          arrow={cardTilesStates?.score[1]}
        />
        <CardTile
          data={anime.type}
          type={CardTileTypes.string}
          name='Type'
          classes={`${cardTilesStates?.type}`}
        />
        <CardTile
          data={anime.source}
          type={CardTileTypes.string}
          name='Source'
          classes={`${cardTilesStates?.source}`}
        />
        <CardTile
          data={anime.episodes}
          type={CardTileTypes.number}
          name='Episodes'
          classes={`${cardTilesStates?.episodes[0]}`}
          arrow={cardTilesStates?.episodes[1]}
        />
        <CardTile
          data={anime.rating}
          type={CardTileTypes.string}
          name='Rating'
          classes={`${cardTilesStates?.rating}`}
        />
        <CardTile
          data={anime.popularity}
          type={CardTileTypes.number}
          name='Popularity'
          classes={`${cardTilesStates?.popularity[0]}`}
          arrow={cardTilesStates?.popularity[1]}
        />
        <CardTile
          data={anime.producers}
          type={CardTileTypes.array}
          name='Producers'
          classes={`${cardTilesStates?.producers}`}
        />
        <CardTile
          data={anime.licensors}
          type={CardTileTypes.array}
          name='Licensors'
          classes={`${cardTilesStates?.licensors}`}
        />
        <CardTile
          data={anime.studios}
          type={CardTileTypes.array}
          name='Studios'
          classes={`${cardTilesStates?.studios}`}
        />
        <CardTile
          classes={`bbl-1 ${cardTilesStates?.genres}`}
          data={anime.genres}
          type={CardTileTypes.array}
          name='Genres'
        />
        <CardTile
          classes={`bbr-1 ${cardTilesStates?.themes}`}
          data={anime.themes}
          type={CardTileTypes.array}
          name='Themes'
        />
      </div>
    </div>
  );
};

export default Card;
