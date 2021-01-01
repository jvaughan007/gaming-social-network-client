import { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import VertNavBar from '../VerticalNavBar/VertNavBar';

const socket = socketIOClient('https://gaming-social-network.herokuapp.com');

const Chat = () => {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([
        { text: 'first message' },
        { text: 'second message' },
    ]);
    const messageInput = useRef(null);

    useEffect(() => {
        socket.on('message', (msg) => {
            setMessages([...messages, msg]);
        });
        messageInput.current.focus();

        // return () => socket.disconnect();
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim().length) {
            return;
        }

        socket.emit('message', text);
        messageInput.current.value = '';
        return setText('');
    };

    return (
        <StyledMain>
            <div>
                <div className='chat-sect'></div>
                <nav>
                    <VertNavBar />
                </nav>
                <h1>Messages</h1>
                <StyledMessages>
                    <ul>
                        {messages.map((msg, idx) => (
                            <li key={idx}>
                                <span>User: </span>
                                {msg.text}
                            </li>
                        ))}
                    </ul>
                </StyledMessages>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        onChange={(e) => setText(e.target.value)}
                        ref={messageInput}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </StyledMain>
    );
};

const StyledMessages = styled.div`
    background: #9453d3;
    color: #fff;

    ul {
        li {
            span {
                font-weight: 600;
            }

            :not(:last-child) {
                margin-bottom: 0.8rem;
            }
        }
    }
`;

const StyledMain = styled.main`
    width: 28.8rem;
    margin: 0 auto;

    form {
        display: flex;
    }

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
        z-index: -1000;
    }

    nav {
        position: fixed;
        left: 0;
    }

    h1 {
        color: white;
        padding-top: 1rem;
        margin-bottom: 2rem;
        text-align: center;
    }
`;

export default Chat;
