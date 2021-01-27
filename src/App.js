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
import Wrapper from './components/common/Wrapper';

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
          <Switch>
            {/* don't enter these routes if already signed in */}
            {/* redirect to /dashboard */}
            <Route path='/' exact>
              <Wrapper>
                <Home></Home>
              </Wrapper>
            </Route>

            <Route exact path='/signup'>
              <Wrapper>
                <Signup></Signup>
              </Wrapper>
            </Route>
            <Route exact path='/login'>
              <Wrapper>
                <Login></Login>
              </Wrapper>
            </Route>
            {/* end */}
            <Route path='/demo' exact>
              <Wrapper>
                <DemoPage></DemoPage>
              </Wrapper>
            </Route>
            <PrivateRoute
              path='/dashboard'
              component={UserDashboard}
              exact
            ></PrivateRoute>
            <PrivateRoute exact path='/games' component={Games}></PrivateRoute>
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
            <Route path='/error/404'>
              <NotFound></NotFound>
            </Route>
            <Redirect to='/error/404' />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
