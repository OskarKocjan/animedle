import React from "react";
import "./styled.scss";
import { GameOverProps } from "models/GameOverModel";
import Button from "Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
const GameOver = ({ win, img, title }: GameOverProps) => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className='GameOver'>
      <div className='game-over-container bg-primary'>
        <div className='text-container'>{title}</div>
        <img src={img} alt='anime' />
        <div className='text-container'>
          {win ? (
            <>Congratulations! You win!</>
          ) : (
            <>Unfortunately, you failed</>
          )}
        </div>
      </div>
      <Button text='Go to menu' color='primary' onClick={() => nav("/")} />
      <Button
        text='Play Again'
        color='primary'
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default GameOver;
