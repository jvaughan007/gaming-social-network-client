import { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
// import ChatHeader from './ChatHeader';
import ChatSidebar from './ChatSidebar';
import ChatWindow from './ChatWindow';
import { API_URL } from '../../config';

const socket = socketIOClient(API_URL);

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    { text: 'first message' },
    { text: 'second message' }
  ]);
  const messageInput = useRef(null);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages([...messages, msg]);
    });
    // messageInput.current.focus();

    // return () => socket.disconnect();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) {
      return;
    }

    socket.emit('message', {
      token: localStorage.getItem('jwt'),
      text
    });
    messageInput.current.value = '';
    return setText('');
  };

  return (
    <StyledMain>
      <ChatSidebar></ChatSidebar>
      <ChatWindow></ChatWindow>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
`;

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

export default Chat;
