import { createContext, useState } from 'react';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("usertoken"));

  return (
    <UserContext.Provider value={[ loggedIn, setLoggedIn ]}>
      {children}
    </UserContext.Provider>
  );
};