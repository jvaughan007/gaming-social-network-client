import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Games from './components/Games/Games';
import UserDashboard from './components/UserDashboard/UserDashboard';
import UserProfile from './components/UserProfile/UserProfile';
import Game from './components/Game/Game';
import Group from './components/Group/Group';
import Groups from './components/Groups/Groups';
import CreateGroup from './components/CreateGroup/CreateGroup';
import PrivateRoute from './PrivateRoute';

const theme = {
  colors: {
    dark1: '#131B21',
    dark2: '#192229',
    dark3: '#1F2731',
    purple: '#9453D3',
    teal: '#0D7377',
    blue: '#14FFEC',
    white: '#fff'
  }
};

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle></GlobalStyle>
        <ThemeProvider theme={theme}>
          <StyledWrapper>
            <Switch>
              <PrivateRoute path='/' component={Home} exact></PrivateRoute>
              <PrivateRoute
                path='/dashboard'
                component={UserDashboard}
                exact
              ></PrivateRoute>
              {/* don't enter these routes if already signed in */}
              <Route exact path='/signup'>
                <Signup></Signup>
              </Route>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              {/* end */}
              <Route exact path='/messages'>
                <Chat />
              </Route>
              <Route exact path='/games'>
                <Games></Games>
              </Route>
              <Route exact path='/groups/filter'>
                <Groups></Groups>
              </Route>
              <Route exact path='/:username'>
                <UserProfile />
              </Route>
              <Route exact path='/group/:id'>
                <Group></Group>
              </Route>
              <Route exact path='/groups/new'>
                <CreateGroup></CreateGroup>
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
        </ThemeProvider>
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
