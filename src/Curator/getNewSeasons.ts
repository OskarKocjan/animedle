import axios from "axios";

const apiUrl = "https://api.jikan.moe/v4/seasons/";

const sleep = (milliseconds: number) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

const completeAnimeDataset = async (
  season: string,
  year: number,
  page: number
) => {
  let csvContent = "";
  let i = 0;
  while (i < 7) {
    const response = await axios.get(apiUrl + `${year}/${season}?page=${page}`);
    const { data } = response.data;
    if (data.length === 0) return;
    data.forEach((e: any) => {
      const { mal_id, title, title_english, score } = e;
      csvContent += `${mal_id},"${title}","${title_english}",${score}\n`;
    });
    i = i + 1;
    page = page + 1;
    sleep(2000);
  }

  console.log(csvContent);
};

export { completeAnimeDataset };
