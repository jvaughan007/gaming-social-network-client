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
import Game from './components/Game/Game';
import UserProfile from './components/UserProfile/UserProfile';
import Group from './components/Group/Group';

const App = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
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
        <Route exact path='/:username'>
          <UserProfile />
        </Route>
        <Route exact path='/game/:id'>
          <Game></Game>
        </Route>
        <Route exact path='/group/:id'>
          <Group></Group>
        </Route>
        <Route path='/404'>
          <NotFound></NotFound>
        </Route>
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
};

export default App;
