// import axios from 'axios';
// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// const UserContextProvider = (props) => {
//     // const [userName, setUserName] = useState();
//     let userName = 'invité.e';
//     let userID = null;
//     let isLogged = false;

//     const getUsers = async () => {
//         let response = await axios('http://localhost:8000/api/users');
//         let users = response.data;
//         return users;
//     };

//     const login = async (mail, password) => {
//         let users = await getUsers();
//         setTimeout(() => {
//             users.forEach(user => {
//                 if (mail === user.email && password === user.password) {
//                     userName = user.name;
//                     userID = user.id;
//                     isLogged = true;
//                     // window.location.assign('/categories');
//                 } else {
//                     console.log('pas cool');
//                 }
//             });
//         }, 200);       // If the login is successful, set the user data in the state
//     };

//     const logout = () => {
//         // Perform logout logic here, for example by removing the user data from the state
//        userID = 'Invité.e'
//         isLogged = false;
//         userID = null;
//     };

//     return (
//         <UserContext.Provider value={{ userName, userID, isLogged, login, logout }}>
//             {props.children}
//         </UserContext.Provider>
//     );
// };

// export default UserContextProvider;

import axios from 'axios';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [userName, setUserName] = useState('invité.e');
    const [userID, setUserID] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const getUsers = async () => {
        let response = await axios('http://localhost:8000/api/users');
        let users = response.data;
        return users;
    };

    const login = async (mail, password) => {
        let users = await getUsers();
        setTimeout(() => {
            users.forEach(user => {
                if (mail === user.email && password === user.password) {
                    setUserName(user.name);
                    setUserID(user.id);
                    setIsLogged(true);
                } else {
                    console.log('pas cool');
                }
            });
        }, 200);       // If the login is successful, set the user data in the state
    };

    const logout = () => {
        setUserName('invité.e');
        setUserID(null);
        setIsLogged(false);
    };

    return (
        <UserContext.Provider value={{ userName, userID, isLogged, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

