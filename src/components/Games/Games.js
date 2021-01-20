import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import noImg from './images/no-image.png';
import { parse } from 'query-string';
import SideBar from '../Sidebar/Sidebar';

const Games = () => {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInput = useRef(null);
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        const { search } = parse(location.search);

        if (!search) {
            return;
        }

        setSearchQuery(search);

        const getGames = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `https://api.rawg.io/api/games?key=2a91788799104cdabdd2ed6da39afffb&search=${search}`
                );
                const data = await res.json();
                setGames(data.results);
                return setLoading(false);
            } catch (err) {
                console.log(err);
                // handle error here
            }
        };

        getGames();
    }, [location.search]);

    const reset = () => {
        setSearchQuery('');
        setGames(null);
        searchInput.current.value = '';
        return history.push('/games');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim().length) {
            return;
        }

        return history.push(`/games?search=${searchQuery.trim()}`);
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
            return <h2 className='no-results'>No results found 😞</h2>;
        }

        return games.map((game) => (
            <SearchResult
                key={game.id}
                onClick={() => history.push(`/game/${game.id}`)}
            >
                <div className='image-wrapper'>
                    <img
                        src={
                            game.background_image
                                ? game.background_image
                                : noImg
                        }
                        alt={game.name}
                    />
                </div>
                <div className='game-info'>
                    <h3>{game.name}</h3>
                </div>
            </SearchResult>
        ));
    };

    return (
        <StyledMain>
            <nav>
                <SideBar />
            </nav>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        placeholder='search for a game...'
                        defaultValue={searchQuery}
                        ref={searchInput}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && searchQuery.trim().length ? (
                        <button type='button' onClick={reset}>
                            X
                        </button>
                    ) : null}
                </div>

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

    nav {
        position: fixed;
        left: 0;
        top: 0;
    }

    form {
        display: flex;
        height: 4.8rem;
        justify-content: space-between;

        div {
            height: 100%;
            width: 74%;
            position: relative;

            input {
                padding-left: 0.8rem;
                border: none;
                border-radius: 0.4rem;
                outline: none;
                width: 100%;
                height: 100%;
            }

            button {
                position: absolute;
                top: 1.1rem;
                right: 1.6rem;
                width: 2.4rem;
                border-radius: 20rem;
                height: 2.4rem;
                background: gray;
            }
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
            form {
                margin-left: 15%;
            }
            div {
                width: 83%;

                input {
                    width: 100%;
                }
            }

            button {
                width: 16%;
            }
        }

        @media (min-width: 1200px) {
            form {
                margin-left: 15%;
            }
            div {
                width: 89.5%;
            }

            button {
                width: 10%;
            }
        }
    }
`;

export default Games;
