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
  // create different container widths here for responsiveness
`;

export default App;
