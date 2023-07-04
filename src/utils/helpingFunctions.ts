import { AnimeDataProps, AnimeDataCuratedProps } from "models/AnimeDataModel";

const getRandomElement = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

const getExplicitDataFromAnime = (
  data: AnimeDataProps
): AnimeDataCuratedProps => {
  return {
    mal_id: data.mal_id,
    img: data.images.jpg.image_url,
    title: data.title,
    titleEnglish: data.title_english,
    type: data.type,
    source: data.source,
    episodes: data.episodes,
    rating: data.rating,
    score: data.score,
    popularity: data.popularity,
    producers: data.producers.map((producer) => producer.name),
    licensors: data.licensors.map((licensor) => licensor.name),
    studios: data.studios.map((studio) => studio.name),
    genres: data.genres.map((genre) => genre.name),
    themes: data.themes.map((theme) => theme.name),
  };
};

export { getRandomElement, getExplicitDataFromAnime };
