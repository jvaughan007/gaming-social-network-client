import React, { useState } from 'react';
import styled from 'styled-components';

const UserGames = (profile) => {
    const user = profile.profile;
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
