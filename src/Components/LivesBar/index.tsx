import React from "react";
import "./styled.scss";
import { LivesBarProps } from "models/LivesBarModel";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LivesBar = ({ numberOfLives }: LivesBarProps) => {
  return (
    <div className='LivesBar'>
      <div className='number-of-lives'>{numberOfLives}</div>
      <div className='heart-container'>
        {Array.apply(0, Array(numberOfLives)).map(() => (
          <FavoriteIcon fontSize='large' className='drop-shadow-white' />
        ))}
      </div>
    </div>
  );
};

export default LivesBar;
