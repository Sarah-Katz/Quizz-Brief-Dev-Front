import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import LoginButton from '../LoginButton/loginButton';
import { UserContext } from '../../context/UserContext';

export default function NavMenu() {
    const {isLogged, logout} = useContext(UserContext)

    return (
        <nav>
            <RxCross1 className='navmenu-cross' />
            <Link to='/categories' className='navmenu-link'>Jouer</Link>
            <Link to='/profile' className='navmenu-link'>Profil</Link>
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