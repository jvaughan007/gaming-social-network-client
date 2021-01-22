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

const StyleWrapper = styled.main``;

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

export default UserGames;
