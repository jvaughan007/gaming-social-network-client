import React, { useState } from 'react';
import styled from 'styled-components';

const UserGames = (profile) => {
    const user = profile.profile;
    return (
        <StyleWrapper>
            <div className='games-body'>
                <div className='gaming-info'>
                    <span>Preferred platform: {user.preferred_hardware}</span>
                    <div className='usernames'>
                        <span>Usernames:</span>
                        <span>Origin: {user.external_usernames}</span>
                    </div>
                </div>
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
