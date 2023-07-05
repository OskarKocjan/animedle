import "./styled.scss";
import Button from "Components/Button";
import { useNavigate } from "react-router-dom";

const apiUrl = "https://api.jikan.moe/v4/anime";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='Home'>
      <Button
        text='Get Anime to Guess!'
        color='primary'
        onClick={() => navigate("/guessanimebyspec")}
      />
    </div>
  );
};

export default Home;
