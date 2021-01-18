import React, { useState, useEffect } from 'react';
import TokenService from '../Services/TokenService';

const UserContext = React.createContext({
  user: {},
  error: null,
  setUser: () => {},
  setError: () => {}
});

export default UserContext;

export const UserProvider = ({ ...props }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (TokenService.checkForToken()) {
      return user;
    } else {
      window.localStorage.removeItem('jwt');
      setUser(null);
      setError({ message: 'user is not authorized' });
      return;
    }
  }, []);

  const value = {
    user: user,
    error: error,
    setUser: setUser,
    setError: setError
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
