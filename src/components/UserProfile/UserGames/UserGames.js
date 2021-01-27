import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserGames = ({ profile }) => {
  const [games, setGames] = useState(null);
  let history = useHistory();

  useEffect(() => {
    const getAllFavorites = async () => {
      const token = localStorage.getItem('jwt');
      try {
        const res = await fetch(
          `${API_URL}/favorites/userFavorites?userId=${profile.user_id}`,
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              authorization: `Bearer ${token}`
            }
          }
        );

        const data = await res.json();
        if (!data.favorites.length) {
          setGames(null);
        }
        setGames(data.favorites);
      } catch (err) {
        console.log(err);
      }
    };
    getAllFavorites();
  }, [profile.user_id]);

  const handleFavoriteDisplay = () => {
    if (games < 1) {
      return (
        <StyleFavorites>
          <div className='no-favs'>
            <span>You have no favorite games yet.</span>
            <br />
            <span>
              Go <Link to='/games'>favorite</Link> some to see them here
            </span>
          </div>
        </StyleFavorites>
      );
    } else {
      return (
        <StyledGames>
          {games.map((game, idx) => {
            return (
              <StyledGameCard
                className='each-game'
                key={idx}
                onClick={() => history.push(`/game/${game.id}`)}
              >
                <div className='image-wrapper'>
                  <img
                    src={game.background_image ? game.background_image : null}
                    alt={game.name}
                  />
                </div>
                <div className='game-info'>
                  <h3>{game.name}</h3>
                </div>
              </StyledGameCard>
            );
          })}
        </StyledGames>
      );
    }
  };

  return <StyledMain>{handleFavoriteDisplay()}</StyledMain>;
};

const StyledMain = styled.main`
  padding: 3.2rem 1.6rem;
`;

const StyleFavorites = styled.div`
  .no-favs {
    text-align: center;
    color: white;
    padding-top: 2rem;
    line-height: 2.5rem;

    a {
      text-decoration: underline;
    }
  }
`;

const StyledGames = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(1, 1fr);

  @media all and (min-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: 970px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledGameCard = styled.div`
  background: #131b21;
  height: 26rem;
  border-radius: 0.4rem;
  position: relative;
  cursor: pointer;

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 70%;
    overflow: hidden;

    img {
      border-radius: 0.4rem 0.4rem 0 0;
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .game-info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;

    h3 {
      text-align: center;
      color: #fff;
    }
  }
`;

export default UserGames;
