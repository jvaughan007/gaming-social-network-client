import { useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Games = () => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim().length) {
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://api.rawg.io/api/games?key=2a91788799104cdabdd2ed6da39afffb&search=${searchQuery}`
      );
      const data = await res.json();
      console.log(data);
      setGames(data.results);
      return setLoading(false);
    } catch (err) {
      console.log(err);
      // handle error here
    }
  };

  const renderSearchResults = () => {
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

    if (!games) {
      return;
    }

    if (games && !games.length) {
      return <h2 class='no-results'>No results found 😞</h2>;
    }

    return games.map((game) => (
      <SearchResult key={game.id}>
        <div className='image-wrapper'>
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className='game-info'>
          <h3>{game.name}</h3>
        </div>
      </SearchResult>
    ));
  };

  return (
    <StyledMain>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search for a game...'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <SearchResults>{renderSearchResults()}</SearchResults>
    </StyledMain>
  );
};

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.6rem;
  margin-top: 3.2rem;
  position: relative;

  .no-results {
    text-align: center;
    position: absolute;
    width: 100%;
    color: #14ffec;
  }

  .spinner {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SearchResult = styled.div`
  background: #323232;
  height: 26rem;
  border-radius: 0.4rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);

  :hover {
    transform: scale(1.05);
  }

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

const StyledMain = styled.main`
  margin-top: 3.2rem;

  form {
    display: flex;
    height: 4.8rem;
    justify-content: space-between;

    input {
      padding-left: 0.8rem;
      border: none;
      width: 74%;
      border-radius: 0.4rem;
      outline: none;
    }

    button {
      width: 24%;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      background: #9453d3;
      color: #fff;
      outline: none;
    }

    @media (min-width: 576px) {
      input {
        width: 83%;
      }

      button {
        width: 16%;
      }
    }

    @media (min-width: 1200px) {
      input {
        width: 89.5%;
      }

      button {
        width: 10%;
      }
    }
  }
`;

export default Games;
