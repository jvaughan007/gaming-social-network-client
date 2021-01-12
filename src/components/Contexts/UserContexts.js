import React, { useState, useEffect } from 'react';

const UserContext = React.createContext({
    user: null,
    userAuth: null,
    error: null,
});

export default UserContext;

export const UserProvider = ({ ...props }) => {
    const [userAuth, setUserAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const checkToken = async (e) => {
        try {
            const jwt = window.localStorage.getItem('jwt');

            const res = await fetch('http://localhost:5000/auth/verifyJWT', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${jwt}`,
                },
            });

            const data = await res.json();
            console.log(data);
            setUserAuth(true);
            return setUser(data);
        } catch (err) {
            console.log(err);
            return err;
        }
    };

    useEffect(() => {
        checkToken();
    }, []);

    const value = {
        user: user,
        userAuth: userAuth,
        error: error,
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};
