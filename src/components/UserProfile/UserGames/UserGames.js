import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserGames = (profile) => {
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
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllFavorites();
    }, []);

    return (
        <StyleWrapper>
            <div className='games-body'></div>
        </StyleWrapper>
    );
};

const StyleWrapper = styled.main`
    .games-body {
    }
`;

export default UserGames;
