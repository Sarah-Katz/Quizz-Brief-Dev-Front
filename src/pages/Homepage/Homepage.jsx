import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import LoginButton from "../../components/LoginButton/loginButton";
import './Homepage.css';
import { Link } from 'react-router-dom'
import LoginRegister from "../../components/LoginRegister/LoginRegister";

export default function Homepage() {
    const { logout } = useContext(UserContext);
    const isLogged = localStorage.getItem('isLogged');
    return (
        <div className="all-home-page">
            <div className="home-page-container">
                <div className="logo-container">
                    <h1 className="logo-E">EINS<span>TEEN</span></h1>
                    <h1 className="logo-Q">QUIZZ</h1>
                </div>
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