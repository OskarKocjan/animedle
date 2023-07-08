import { AnimeDataProps, AnimeDataCuratedProps } from "models/AnimeDataModel";
import { CardTileStateBg, CardTileInequality } from "models/CardModel";

const getRandomElement = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const getExplicitDataFromAnime = (
  data: AnimeDataProps | undefined
): AnimeDataCuratedProps | undefined => {
  if (!data) return undefined;
  return {
    mal_id: data.mal_id,
    img: data.images.jpg.image_url,
    imgxs: data.images.jpg.small_image_url,
    title: data.title,
    titleEnglish: data.title_english,
    type: data.type,
    source: data.source,
    episodes: data.episodes,
    rating: data.rating,
    score: data.score,
    popularity: data.popularity,
    producers: getArrayNames(data.producers),
    licensors: getArrayNames(data.licensors),
    studios: getArrayNames(data.studios),
    genres: getArrayNames(data.genres),
    themes: getArrayNames(data.themes),
  };
};

const getArrayNames = (
  arr: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[]
): string[] => {
  if (arr.length === 0) return ["None"];
  return arr.map((e) => e.name);
};

const checkAnimeDataNumber = (
  correctAnimeNumber: number,
  guessedAnimeNumber: number
): (CardTileStateBg | CardTileInequality)[] => {
  if (correctAnimeNumber === guessedAnimeNumber)
    return [CardTileStateBg.correct, CardTileInequality.equal];
  if (correctAnimeNumber > guessedAnimeNumber)
    return [CardTileStateBg.wrong, CardTileInequality.higher];

  return [CardTileStateBg.wrong, CardTileInequality.lower];
};

const checkAnimeDataArray = (
  correctAnimeArray: string[],
  guessedAnimeArray: string[]
) => {
  const isSame = correctAnimeArray.every((str) =>
    guessedAnimeArray.includes(str)
  );
  const hasSomeStrings = correctAnimeArray.some((str) =>
    guessedAnimeArray.includes(str)
  );

  if (isSame && correctAnimeArray.length === guessedAnimeArray.length)
    return CardTileStateBg.correct;
  if (
    (isSame && correctAnimeArray.length !== guessedAnimeArray.length) ||
    hasSomeStrings
  )
    return CardTileStateBg.incorrect;

  return CardTileStateBg.wrong;
};

const checkAnimeDataString = (
  correctAnimeString: string,
  guessedAnimeString: string
) => {
  return correctAnimeString === guessedAnimeString
    ? CardTileStateBg.correct
    : CardTileStateBg.wrong;
};

export {
  getRandomElement,
  getExplicitDataFromAnime,
  checkAnimeDataNumber,
  checkAnimeDataArray,
  checkAnimeDataString,
};
