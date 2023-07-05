import React, { useEffect, useState } from "react";
import "./styled.scss";
import animeNames from "Curator/anime-dataset.json";
import { AnimeDataSearchBarProps } from "models/AnimeDataModel";
import { SearchBarProps } from "models/SearchBarModel";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ setAnimeIdToGuess }: SearchBarProps) => {
  const [searchedAnimeName, setsearchedAnimeName] = useState("");
  const [filteredItems, setFilteredItems] = useState<AnimeDataSearchBarProps[]>(
    []
  );
  const [setselectedFromDropDown, setSetselectedFromDropDown] = useState(false);
  useEffect(() => {
    if (setselectedFromDropDown) return;
    const filteredArray = animeNames.filter((item) =>
      item.title.toLowerCase().startsWith(searchedAnimeName.toLowerCase())
    );
    setFilteredItems(filteredArray);
  }, [searchedAnimeName]);
  //search anime by checking if filteredArray is only 1 length long

  const onSubmit = () => {
    if (filteredItems.length !== 1) return;
    setAnimeIdToGuess(filteredItems[0].mal_id);
    setsearchedAnimeName("");
  };

  return (
    <div className='SearchBar'>
      <div className='search-bar-container'>
        <input
          type='text'
          list='animeNamesList'
          placeholder=''
          value={searchedAnimeName}
          onChange={(e) => setsearchedAnimeName(e.target.value)}
          onFocus={() => setSetselectedFromDropDown(false)}
        />
        <button className='search-btn' onClick={onSubmit}>
          <SearchIcon />
        </button>
      </div>
      {searchedAnimeName &&
        searchedAnimeName.length > 1 &&
        filteredItems.length !== 0 && (
          <div className='scrollable-div'>
            {filteredItems.map((item) => (
              <div
                className='dropdown-element bg-white bg-white-hover'
                key={item.mal_id}
                onClick={() => {
                  setSetselectedFromDropDown(true);
                  setFilteredItems([item]);
                  setsearchedAnimeName(item.title);
                }}
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
