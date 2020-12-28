import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Signup/Signup";
import VertNavBar from "./components/VerticalNavBar/VertNavBar";
import Chat from "./components/Messages/Chat";

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
