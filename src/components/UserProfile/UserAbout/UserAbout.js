import React, { useState, useEffect } from 'react';
import UserProfile from '../UserProfile';
import styled from 'styled-components';

const UserAbout = (profile) => {
    const user = profile.profile;
    return (
        <StyledWrapper>
            <div className='about-body'>
                <div>
                    <p>{user.user_bio}</p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .about-body {
        color: white;
        margin-top: 2rem;

        p {
            width: 32rem;
            text-align: center;
            margin: auto;
            line-height: 2.4rem;
        }
    }
`;

export default UserAbout;
