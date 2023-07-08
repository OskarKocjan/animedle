import React from "react";
import "./styled.scss";
import Card from "Components/Card";
import { CardGridProps } from "models/CardModel";

const CardGrid = ({ animes, correctAnime }: CardGridProps) => {
  if (animes.length === 0) return <></>;

  return (
    <div className='CardGrid'>
      {animes.map((animeCardData) => (
        <Card anime={animeCardData} correctAnime={correctAnime} />
      ))}
    </div>
  );
};

export default CardGrid;
