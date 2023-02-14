import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [isLogged, setLogged] = useState(true);

    const login = (username, password) => {
        // Perform login logic here, for example using an API call
        // If the login is successful, set the user data in the state
        setUser({ username });
        setLogged(true);
    };

    const logout = () => {
        // Perform logout logic here, for example by removing the user data from the state
        setUser({});
        setLogged(false);
    };

    return (
        <UserContext.Provider value={{ user, isLogged, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
