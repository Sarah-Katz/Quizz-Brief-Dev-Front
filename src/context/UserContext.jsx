import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [userName, setUserName] = useState('invité.e');
    const [userID, setUserID] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const storedIsLogged = localStorage.getItem('isLogged');
        const storedUserID = localStorage.getItem('userID');
        const storedUserName = localStorage.getItem('userName');
        if (storedIsLogged !== null) {
            setIsLogged(JSON.parse(storedIsLogged));
        }
        if (storedUserID !== null) {
            setUserID(storedUserID);
        }
        if (storedUserName !== null) {
            setUserName(storedUserName);
        }
    }, []);

    const getUsers = async () => {
        let response = await axios('http://localhost:8000/api/users');
        let users = response.data;
        return users;
    };

    const login = async (mail, password) => {
        let users = await getUsers();
        setTimeout(() => {
            let foundUser = false;
            users.forEach(user => {
                    console.log(user);
                    console.log(mail, user.email);
                if (mail === user.email && password === user.password) {
                    setUserName(user.name);
                    setUserID(user.id);
                    setIsLogged(true);
                    localStorage.setItem('isLogged', true);
                    localStorage.setItem('userID', user.id);
                    localStorage.setItem('userName', user.name);
                    foundUser = true;
                    setTimeout(() => {
                        window.location.assign('/categories');
                    }, 3000)
                }
            });
            if (!foundUser) {
                alert('Utilisateur introuvable');
            }
        }, 500);
    };

    const logout = () => {
        setUserName('invité.e');
        setUserID(null);
        setIsLogged(false);
        localStorage.removeItem('isLogged');        
        localStorage.removeItem('userID');
        localStorage.removeItem('userName');
    };

    return (
        <UserContext.Provider value={{ userName, userID, isLogged, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
