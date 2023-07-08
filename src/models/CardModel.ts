import { AnimeDataCuratedProps } from "./AnimeDataModel";

export interface CardProps {
  anime: AnimeDataCuratedProps;
  correctAnime: AnimeDataCuratedProps;
}

export enum CardTileTypes {
  number = "number",
  array = "array",
  string = "string",
}

export enum CardTileStateBg {
  wrong = "bg-red drop-shadow-red",
  incorrect = "bg-yellow",
  correct = "bg-primary",
}

export enum CardTileInequality {
  lower = "down-arrow",
  higher = "up-arrow",
  equal = "",
}

export interface CardTilesStates {
  type: CardTileStateBg;
  source: CardTileStateBg;
  episodes: (CardTileStateBg | CardTileInequality)[];
  rating: CardTileStateBg;
  score: (CardTileStateBg | CardTileInequality)[];
  popularity: (CardTileStateBg | CardTileInequality)[];
  producers: CardTileStateBg;
  licensors: CardTileStateBg;
  studios: CardTileStateBg;
  genres: CardTileStateBg;
  themes: CardTileStateBg;
}

export interface CardTileProps {
  name?: string;
  data: string[] | number | string;
  classes?: string;
  type: CardTileTypes;
  arrow?: CardTileStateBg | CardTileInequality;
}

export interface CardGridProps {
  animes: AnimeDataCuratedProps[];
  correctAnime: AnimeDataCuratedProps;
}
