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
import Login from './components/Login/Login';
import Games from './components/Games/Games';
import UserDashboard from './components/UserDashboard/UserDashboard';
import UserProfile from './components/UserProfile/UserProfile';
import Game from './components/Game/Game';
import Group from './components/Group/Group';
import Groups from './components/Groups/Groups';
import CreateGroup from './components/CreateGroup/CreateGroup';
import PrivateRoute from './PrivateRoute';
import DemoPage from './components/DemoPage/DemoPage';

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
              {/* don't enter these routes if already signed in */}
              {/* redirect to /dashboard */}
              <Route path='/' exact>
                <Home></Home>
              </Route>
              <Route path='/demo' exact>
                <DemoPage></DemoPage>
              </Route>
              <Route path='/demo' exact>
                <DemoPage></DemoPage>
              </Route>
              <Route exact path='/signup'>
                <Signup></Signup>
              </Route>
              <Route exact path='/login'>
                <Login></Login>
              </Route>
              {/* end */}
              <PrivateRoute
                path='/dashboard'
                component={UserDashboard}
                exact
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/games'
                component={Games}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/groups'
                component={Groups}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/:username'
                component={UserProfile}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/group/:slug'
                component={Group}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/groups/new'
                component={CreateGroup}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/game/:id'
                component={Game}
              ></PrivateRoute>
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
  /* width: 28.8rem;
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
  } */
`;

export default App;
