import React, { useEffect, useState } from "react";
import "./App.css";
import { completeAnimeDataset } from "../../Curator/getNewSeasons";

function App() {
  const [newAnimeData, setNewAnimeData] = useState({});

  // useEffect(() => {
  //   completeAnimeDataset("spring", 2021, 1)
  //     .then((data) => {
  //       setNewAnimeData(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className='App'>
      <h1>HELOOOOOOOOOOOOOOOOO</h1>
    </div>
  );
}

export default App;
