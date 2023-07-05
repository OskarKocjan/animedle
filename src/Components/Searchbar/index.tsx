import React, { useEffect, useState } from "react";
import "./styled.scss";
import animeNames from "Curator/anime-dataset.json";
import { AnimeDataSearchBarProps } from "models/AnimeDataModel";

const Searchbar = () => {
  const [searchedAnime, setSearchedAnime] = useState("");
  const [filteredItems, setFilteredItems] = useState<AnimeDataSearchBarProps[]>(
    []
  );
  useEffect(() => {
    const filteredArray = animeNames.filter((item) =>
      item.title.toLowerCase().startsWith(searchedAnime.toLowerCase())
    );
    setFilteredItems(filteredArray);
  }, [searchedAnime]);

  return (
    <div className='SearchBar'>
      <input
        type='text'
        list='animeNamesList'
        placeholder=''
        value={searchedAnime}
        onChange={(e) => setSearchedAnime(e.target.value)}
      />
      {searchedAnime && filteredItems.length !== 0 && (
        <div className='scrollable-div'>
          {filteredItems.map((item, index) => (
            <div
              className='dropdown-element bg-white bg-white-hover'
              key={item.mal_id}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
