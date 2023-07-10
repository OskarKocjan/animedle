import React from "react";
import "./styled.scss";
import { GuessRangeBoxProps } from "models/GuessRangeBoxModel";

const GuessRangeBox = ({ ranges, setGuessRange }: GuessRangeBoxProps) => {
  return (
    <div className='GuessRangeBox'>
      {ranges.map((element) => {
        return (
          <>
            <input
              type='radio'
              id={`anime-score-${element}`}
              name='anime-score'
              value={element}
              onChange={(e) => setGuessRange(Number(e.target.value))}
            />
            <label className='input-box' htmlFor={`anime-score-${element}`}>
              &gt;{element}
            </label>
          </>
        );
      })}
    </div>
  );
};

export default GuessRangeBox;
