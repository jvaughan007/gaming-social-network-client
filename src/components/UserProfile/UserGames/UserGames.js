import React, { useState } from 'react';
import styled from 'styled-components';
import Games from '../../Games/Games';

const UserGames = (profile) => {
    const user = profile.profile;
    return (
        <StyleWrapper>
            <div className='games-body'>
                <Games />
            </div>
        </StyleWrapper>
    );
};

const StyleWrapper = styled.main`
    .games-body {
        color: white;
        margin-top: 2rem;
        margin-left: 1rem;
        font-size: 1.9rem;

        .usernames {
            display: flex;
            flex-direction: column;
            margin-top: 1.5rem;

            span {
                margin-top: 0.5rem;
            }
        }
    }
`;

export default UserGames;
