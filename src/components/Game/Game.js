import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Game = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=2a91788799104cdabdd2ed6da39afffb`
        );

        if (!res.ok) {
          return setError('Could not find that game');
        }

        const data = await res.json();

        if (!data) {
          return setError('Could not find that game');
        }

        setGame(data);
        return setLoading(false);
      } catch (err) {
        return setError('Could not find that game');
      }
    };
    getGame();
  }, [id]);

  const renderGame = () => {
    if (loading) {
      return (
        <Loader
          type='TailSpin'
          color='#14FFEC'
          height={100}
          width={100}
          className='spinner'
        />
      );
    }

    return game ? (
      <StyledMain>
        <div>
          <h1>{game.name}</h1>
          <div>
            <img src={game.background_image} alt={game.name} />
          </div>
        </div>

        <div>
          <p>{game.description_raw}</p>
        </div>
      </StyledMain>
    ) : null;
  };

  return !error ? renderGame() : <p>{error}</p>;
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3.2rem;

  div:first-child {
    img {
      width: 100%;
    }
  }
`;

export default Game;
