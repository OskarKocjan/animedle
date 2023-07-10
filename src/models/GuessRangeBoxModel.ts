import { Dispatch, SetStateAction } from "react";

export interface GuessRangeBoxProps {
  ranges: number[];
  setGuessRange: Dispatch<SetStateAction<number>>;
}
