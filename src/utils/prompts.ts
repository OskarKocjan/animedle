const getRandomAnimeByScorePrompt = (minScore: number, url: string): string => {
  const range = 0.3;
  const randomNumber = Math.random() * (9 - minScore) + minScore;
  const roundedNumber = Math.round(randomNumber * 100) / 100;

  return `${url}?min_score=${roundedNumber - range}&max_score=${
    roundedNumber + range
  }`;
};

export { getRandomAnimeByScorePrompt };
