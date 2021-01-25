import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserGames = (profile) => {
    const [games, setGames] = useState(null);
    const getAllFavorites = async () => {
        const token = localStorage.getItem('jwt');
        try {
            const res = await fetch(`${API_URL}/favorites/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            if (!data.favorites.length) {
                setGames(null);
            }
            setGames(data.favorites);
        } catch (err) {
            console.log(err);
        }
    };

    const handleFavoriteDisplay = () => {
        if (games < 1) {
            return (
                <StyleFavorites>
                    <div className='no-favs'>
                        <span>You have no favorite games yet.</span>
                        <br />
                        <span>
                            Go <Link to='/games'>favorite</Link> some to see
                            them here
                        </span>
                    </div>
                </StyleFavorites>
            );
        } else {
            return (
                <StyleGames>
                    <div className='outer-wrapper'>
                        {games.map((game, y) => {
                            return (
                                <div className='each-game' key={y}>
                                    <h1>{game.name}</h1>
                                    <div className='game-info'>
                                        <img src={game.background_image}></img>
                                        <p>{game.description_raw}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </StyleGames>
            );
        }
    };

    useEffect(() => {
        getAllFavorites();
    }, []);

    return (
        <StyleWrapper>
            <div className='games-body'>{handleFavoriteDisplay()}</div>
        </StyleWrapper>
    );
};

const StyleWrapper = styled.main`
    padding-top: 4rem;
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

const StyleGames = styled.div`
    .each-game {
        color: black;
        padding: 2rem;
        border: solid 1px white;
        background-color: white;
        margin: 2rem;
        margin-top: 0;
        border-radius: 5rem;

        h1 {
            text-align: center;
            margin-bottom: 1rem;
        }

        .game-info {
            img {
                width: 100%;
            }
            p {
                line-height: 2.5rem;
            }
        }
    }

    @media all and (min-width: 700px) {
        .each-game {
            width: 80%;
            margin-left: 5rem;
            .game-info {
                height: 100%;
                display: flex;

                img {
                    height: 20rem;
                    width: 30rem;
                    vertical-align: center;
                    margin-right: 3rem;
                    border-radius: 2rem;
                    box-shadow: 5px 5px 5px black;
                }
            }
        }
    }
`;

export default UserGames;
