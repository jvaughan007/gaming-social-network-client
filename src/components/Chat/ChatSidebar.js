import styled from 'styled-components';
import avatar from './avatar-1577909_640.png';
import addIcon from './plus.svg';

const ChatSidebar = () => {
  return (
    <StyledDiv>
      <button>
        <img src={addIcon} alt='Add Icon' /> New Conversation
      </button>
      {/* 131B21 - 1F2731 - 192229 - */}
      <ul>
        <li>
          <img src={avatar} alt='Avatar' />
          <div>
            <p>username</p>
            <p>time sent</p>
          </div>
        </li>
        <li>
          <img src={avatar} alt='Avatar' />
          <div>
            <p>username</p>
            <p>time sent</p>
          </div>
        </li>
        <li>
          <img src={avatar} alt='Avatar' />
          <div>
            <p>username</p>
            <p>time sent</p>
          </div>
        </li>
        <li>
          <img src={avatar} alt='Avatar' />
          <div>
            <p>username</p>
            <p>time sent</p>
          </div>
        </li>
      </ul>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: #323232;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 2.4rem;
    width: 90%;
    height: 4.8rem;
    border-radius: 0.4rem;
    border: none;
    background: #9453d3;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;

    img {
      margin-right: 0.8rem;
    }
  }

  ul {
    margin-top: 2.4rem;
    width: 90%;

    li {
      display: flex;
      width: 100%;
      height: 7.2rem;
      align-items: center;
      padding-left: 0.8rem;
      border-radius: 0.4rem;
      background: white;
      cursor: pointer;

      p:first-child {
        font-weight: 700;
      }

      p:last-child {
        font-size: 1.4rem;
      }

      :not(:last-child) {
        margin-bottom: 0.8rem;
      }

      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 20rem;
        margin-right: 1.6rem;
      }
    }
  }
`;

export default ChatSidebar;
