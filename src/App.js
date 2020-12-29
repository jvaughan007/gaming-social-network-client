import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import Chat from './components/Messages/Chat';
import Login from './components/Login/Login';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle></GlobalStyle>
        <StyledWrapper>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 30256d074a4873002ffc92943717e79131ee8af5
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
<<<<<<< HEAD
>>>>>>> 122503f07092a3e4afdd0c150602d6b3e2c45d0f
=======
>>>>>>> 30256d074a4873002ffc92943717e79131ee8af5
`;

export default App;
