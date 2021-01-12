import React, { Fragment, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../Contexts/UserContexts';

const GuardedRoute = ({ ...props }) => {
    console.log(props.userAuth);
    return (
        <Fragment>
            {props.userAuth ? props.children : <Redirect to='/login' />}
        </Fragment>
    );
};

export default GuardedRoute;
