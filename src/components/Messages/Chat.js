import styled from 'styled-components';
import VertNavBar from '../VerticalNavBar/VertNavBar';
import React, { useEffect } from 'react';

const Chat = () => {
    return (
        <StyledMain>
            <div>
                <div className='chat-sect'></div>
                <nav>
                    <VertNavBar />
                </nav>
                <h1>Messages</h1>
            </div>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    width: 28.8rem;
    margin: 0 auto;

    @media (min-width: 576px) {
    width: 50rem;
    }

    @media (min-width: 768px) {
    width: 70rem;
    }

    @media (min-width: 992px) {
    width: 90rem;
    }

    @media (min-width: 1200px) {
    width: 112rem;
    }
    .chat-sect {
        background-color: #212121;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        z-index: -1000;s
    }

    nav {
        position: fixed;
        left: 0;
    }

    h1{
        color: white;
        padding-top: 1rem;
        margin-bottom: 2rem;
        text-align: center;

    }

`;

export default Chat;
