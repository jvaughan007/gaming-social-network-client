import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import Chat from './components/Messages/Chat';
import Login from './components/Login/Login';
import Games from './components/Games/Games';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Game from './components/Game/Game';

const App = () => {
  const socket = socketIOClient('http://localhost:5000');

  return (
    <>
      <Router>
        <GlobalStyle></GlobalStyle>
        <StyledWrapper>
          <Switch>
            <Route exact path='/'>
              <Home socket={socket}></Home>
            </Route>
            <Route exact path='/dashboard'>
              <UserDashboard></UserDashboard>
            </Route>
            <Route exact path='/signup'>
              <Signup></Signup>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/messages'>
              <Chat />
            </Route>
            <Route exact path='/games'>
              <Games></Games>
            </Route>
            <Route exact path='/game/:id'>
              <Game></Game>
            </Route>
            <Route path='/404'>
              <NotFound></NotFound>
            </Route>
            <Redirect to='/404' />
          </Switch>
        </StyledWrapper>
      </Router>
    </>
  );
};

const StyledWrapper = styled.div`
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
`;

export default App;
