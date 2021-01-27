import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { API_URL } from '../../config';
import notFavorited from './images/notfavorited.svg';
import isFavoritedImg from './images/favorited.svg';

const Game = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorited, setFavorited] = useState(null);
  const [totalFavs, setTotalFavs] = useState(null);
  const [info, setInfo] = useState(false);
  let history = useHistory();
  let params = useParams();

  useEffect(() => {
    const getFavoriteCount = async (gameId) => {
      try {
        const token = localStorage.getItem('jwt');

        if (!token) {
          return history.push('/error/404');
        }
        const res = await fetch(`${API_URL}/favorites/count?gameId=${gameId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();

        return setTotalFavs(data.favoriteCount);
      } catch (err) {
        return;
      }
    };
    const getGame = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.rawg.io/api/games/${params.id}?key=2a91788799104cdabdd2ed6da39afffb`
        );

        if (!res.ok) {
          return setError('Could not find that game');
        }

        const data = await res.json();

        if (!data) {
          return setError('Could not find that game');
        }
        setGame(data);

        getFavoriteCount(data.id);
        return await isFavorited(data.id);
      } catch (err) {
        return setError('Could not find that game');
      }
    };

    const isFavorited = async (gameId) => {
      const token = localStorage.getItem('jwt');

      if (!token) {
        return history.push('/error/404');
      }
      try {
        const res = await fetch(
          `${API_URL}/favorites/${JSON.stringify(gameId)}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();

        if (!data.success) {
          setFavorited(false);
          return setLoading(false);
        }

        setFavorited(true);
        return setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
    isFavorited();
  }, [params.id, history]);

  const favoriteGame = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          game,
          game_id: JSON.stringify(game.id)
        })
      });
      const data = await res.json();
      if (!data.success) {
        return;
      }
      return setFavorited(true);
    } catch (err) {
      console.log(err);
    }
  };

  const unfavoriteGame = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(
        `${API_URL}/favorites/${JSON.stringify(game.id)}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await res.json();

      if (data.success) {
        return setFavorited(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleMoreInfo = () => {
    if (info) {
      return (
        <div>
          <p>{game.description_raw}</p>
        </div>
      );
    }
  };

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

    return game && !loading ? (
      <StyledMain className='gamePage_gameContainer'>
        <div className='control-center'>
          <button onClick={() => history.goBack()}>Back</button>

          {!favorited ? (
            <div className='favorite'>
              <button onClick={favoriteGame}>
                <img src={notFavorited} alt='Favorite' />
              </button>
            </div>
          ) : (
            <div className='unfavorite'>
              <button onClick={unfavoriteGame}>
                <img src={isFavoritedImg} alt='Unfavorite' />
              </button>
            </div>
          )}
        </div>
        <div className='gamePage_title'>
          <h1>
            <a href={`${game.website}`}>{game.name}</a>
          </h1>
          <div>
            <span>Times Favorited: {totalFavs ? totalFavs : '0'}</span>
          </div>
        </div>

        <div className='gamePage_details'>
          <div className='gamePage_image'>
            <img src={game.background_image} alt={game.name} />
          </div>

          <div className='gamePage_desc'>
            <p>{game.reddit_description}</p>
            <div className='genres'>
              <span>Genres: </span>
              {game.genres.map((genre, idx) => (
                <div className='each-genre' key={idx}>
                  <span>{genre.name}</span>
                </div>
              ))}
            </div>
            <div className='platforms'>
              <span>Playable on: </span>
              {game.platforms.map((platform, idx) => (
                <div className='each-platform' key={idx}>
                  <span>{platform.platform.name}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setInfo((c) => !c)}>More Info</button>
            {handleMoreInfo()}
          </div>
        </div>
      </StyledMain>
    ) : null;
  };

  return !error ? renderGame() : <p>{error}</p>;
};

const StyledMain = styled.main`
  padding: 2rem;
  background-color: #0d7377;
  min-height: 100vh;

  .control-center {
    display: flex;
    justify-content: space-between;
  }
  .gamePage_title {
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 2rem;
    align-items: center;

    h1 {
      font-size: 2.5rem;
      text-decoration: underline;
    }

    div {
      margin-top: 1rem;
    }
  }

  .gamePage_details {
    .gamePage_image {
      display: flex;
      flex-direction: row;
      justify-content: center;
      img {
        width: 100%;
        box-shadow: 7px 7px 10px black;
      }
    }

    .gamePage_desc {
      margin-top: 4rem;
      text-align: center;
      color: white;

      .genres {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        .each-genre {
          margin-left: 1rem;
        }
      }
      .platforms {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
        .each-platform {
          margin-top: 1rem;
        }
      }
      p {
        color: white;
        word-wrap: break-word;
        line-height: 2.5rem;
      }
      button {
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
    }
  }
  @media all and (min-width: 590px) {
    .gamePage_title {
      color: white;
      h1 {
        font-size: 2.5rem;
        text-decoration: none;

        a {
          cursor: pointer;
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }
    .gamePage_details {
      .gamePage_image {
        img {
          width: 80%;
        }
      }
      .gamePage_desc {
        .genres {
          flex-direction: row;
          align-items: center;

          .each-genre {
            margin-left: 1rem;
            margin-bottom: 1rem;
          }
        }
        .platforms {
          flex-direction: row;
          align-items: center;

          .each-platform {
            margin-left: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;

export default Game;
