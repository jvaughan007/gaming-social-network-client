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
  // useEffect(() => {
  //   const socket = socketIOClient('ws://localhost:5000');
  //   // socket.on('message', (data) => {
  //   //   console.log(data);
  //   // });
  //   socket.emit('message', {
  //     user_id: 1,
  //     conv_id: 420,
  //     msg: 'from react msg hi bye this working?'
  //   });

  //   socket.on('message', (msg) => {
  //     console.log(msg);
  //   });

  //   return () => socket.disconnect();
  // }, []);

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

  return (
    <>
      <Router>
        <GlobalStyle></GlobalStyle>
        <ThemeProvider theme={theme}>
          <StyledWrapper>
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

export default App;
