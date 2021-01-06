import styled from 'styled-components';

const ChatHeader = () => {
  return (
    <StyledHeader>
      <h1>Chat</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  align-items: center;
  grid-area: chatHeader;

  h1 {
    color: #fff;
  }

  button {
    height: 4.8rem;
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export default ChatHeader;
