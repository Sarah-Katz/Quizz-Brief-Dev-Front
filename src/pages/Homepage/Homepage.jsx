import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LoginButton from "../../components/LoginButton/loginButton";
import NavMenu from '../../components/NavMenu/NavMenu'
import './Homepage.css';
import { Link } from 'react-router-dom'
import LoginRegister from "../../components/LoginRegister/LoginRegister";

export default function Homepage() {
    const { logout } = useContext(UserContext);
    const isLogged = localStorage.getItem('isLogged');
    return (
        <div className="all-home-page">
            <NavMenu />
            <div className="home-page-container">
                <img className="home-page-logo" src="/img/favicon.ico" alt="LOGO" />
                <Link
                    className="home-page-button"
                    to='/categories'>JOUER
                </Link>
                {isLogged ? <button className='navmenu-button' onClick={() => logout()}>Déconnexion</button> : <LoginButton />}
            </div>
            <LoginRegister />
        </div>
    );
}