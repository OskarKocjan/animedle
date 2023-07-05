import { Dispatch, SetStateAction } from "react";

export interface SearchBarProps {
  setAnimeIdToGuess: React.Dispatch<React.SetStateAction<number | undefined>>;
}
