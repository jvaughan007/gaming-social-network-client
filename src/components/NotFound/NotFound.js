import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  let history = useHistory();

  return (
    <StyledMain>
      <h1>404</h1>
      <p>The page you were looking for does not exist</p>
      <button onClick={() => history.push('/')}>Go Home</button>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 12rem;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    text-align: center;
  }

  button {
    background: #131b21;
    color: #fff;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 0.4rem;
    height: 4.8rem;
    padding: 0.8rem 2.4rem;
    margin-top: 2.4rem;
  }
`;

export default NotFound;
