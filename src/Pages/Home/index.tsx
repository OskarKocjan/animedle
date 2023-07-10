import "./styled.scss";
import Button from "Components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GuessRangeBox from "Components/GuessRangeBox";

const Home = () => {
  const navigate = useNavigate();
  const [guessRange, setGuessRange] = useState(6.5);

  return (
    <div className='Home'>
      <Button
        text='Get Anime to Guess!'
        color='primary'
        onClick={() => navigate(`/guessanimebyspec/${guessRange}`)}
      />
      <GuessRangeBox
        ranges={[6.5, 7, 7.5, 8, 8.5]}
        setGuessRange={setGuessRange}
      />
    </div>
  );
};

export default Home;
