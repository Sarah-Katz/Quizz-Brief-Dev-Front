import { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import LoginButton from '../LoginButton/loginButton';
import { UserContext } from '../../context/UserContext';

export default function NavMenu() {
    const {isLogged, logout} = useContext(UserContext)
    
    return (
        <nav>
            <RxCross1 className='navmenu-cross' />
            <button className='navmenu-button'>Jouer</button>
            <button className='navmenu-button'>Profil</button>
            {isLogged === true ? (
                <button className='navmenu-button' onClick={() => logout()}>
                    Déconnexion
                </button>
            ) : (
                <LoginButton />
            )}
        </nav>
    );
}