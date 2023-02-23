import { useContext, useRef } from 'react';
import './NavMenu.css';
import { Link } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import LoginButton from '../LoginButton/loginButton';
import { UserContext } from '../../context/UserContext';

export default function NavMenu() {
    const { isLogged, logout } = useContext(UserContext);
    let ref = useRef(null);

    const showNavMenu = () => {
        let toggle = ref.current;
        toggle.className = 'navmenu-container visible';
    }

    const hideNavMenu = () => {
        let toggle = ref.current;
        toggle.className = 'navmenu-container';
    }

    return (
        <header>
            <RxHamburgerMenu className='navmenu-burger' onClick={showNavMenu} />
            <nav className='navmenu-container' ref={ref}>
                <RxCross1 className='navmenu-cross' onClick={hideNavMenu} />
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
        </header>
    );
}