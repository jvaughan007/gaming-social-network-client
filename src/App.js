import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import React, { useContext } from 'react';
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

import { UserProvider } from './components/Contexts/UserContexts';
import UserContext from './components/Contexts/UserContexts';
import GuardedRoute from './components/GuardedRoutes/GuardedRoute';

const App = () => {
    const context = useContext(UserContext);
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
            white: '#fff',
        },
    };

    return (
        <UserProvider>
            <Router>
                <GlobalStyle></GlobalStyle>
                <ThemeProvider theme={theme}>
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
                            <GuardedRoute exact path='/dashboard'>
                                <UserDashboard></UserDashboard>
                            </GuardedRoute>
                            <GuardedRoute exact path='/messages'>
                                <Chat />
                            </GuardedRoute>
                            <GuardedRoute
                                exact
                                path='/games'
                                userAuth={context.userAuth}
                            >
                                <Games></Games>
                            </GuardedRoute>
                            <GuardedRoute exact path='/groups/filter'>
                                <Groups></Groups>
                            </GuardedRoute>
                            <Route exact path='/:username'>
                                <UserProfile />
                            </Route>
                            <GuardedRoute exact path='/group/:id'>
                                <Group></Group>
                            </GuardedRoute>
                            <GuardedRoute exact path='/groups/new'>
                                <CreateGroup></CreateGroup>
                            </GuardedRoute>
                            <GuardedRoute exact path='/game/:id'>
                                <Game></Game>
                            </GuardedRoute>
                            <Route path='/404'>
                                <NotFound></NotFound>
                            </Route>
                            <Redirect to='/404' />
                        </Switch>
                    </StyledWrapper>
                </ThemeProvider>
            </Router>
        </UserProvider>
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
