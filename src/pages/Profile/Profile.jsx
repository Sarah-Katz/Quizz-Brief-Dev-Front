import axios from 'axios';
import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import GameHistory from '../../components/GameHistory/GameHistory';
import LoginButton from '../../components/LoginButton/loginButton';
import LoginRegister from '../../components/LoginRegister/LoginRegister';
import NavMenu from '../../components/NavMenu/NavMenu'
import './Profile.css';

export default function Profile() {
    const isLogged = localStorage.getItem('isLogged');
    const userID = localStorage.getItem('userID');
    const userName = localStorage.getItem('userName');
    const [isModif, setModif] = useState(false);

    const modif = () => {
        let data = {
            name: 'test'
        }
            axios.post(`http://localhost:8000/api/users/${userID}`, data).then(response => response.json()).then(data => console.log(data));
    };


    // Conditional render
    if (isLogged) {
        return (
            <div>
                <NavMenu />
                <FaPen className='profile-pen' onClick={modif} />
                <div className='profile-container'>
                    <h2 className='profile-username'>{userName}</h2>
                    <GameHistory />
                </div>
                <LoginRegister />
            </div>
        );
    } else if (isLogged && isModif) {
        <div>
            <NavMenu />
            <div className='profile-container'>
                <h2 className='profile-username'>{userName}</h2>
            </div>
            <LoginRegister />
        </div>
    } else {
        return (
            <div>
                <NavMenu />
                <FaPen className='profile-pen' />
                <div className='profile-container'>
                    <LoginButton />
                </div>
                <LoginRegister />
            </div>
        );
    }
}