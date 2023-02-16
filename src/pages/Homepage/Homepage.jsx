import LoginButton from "../../components/LoginButton/loginButton";
import './Homepage.css';
import {Link} from 'react-router-dom'
import LoginRegister from "../../components/LoginRegister/LoginRegister";

export default function Homepage() {
    return (
        <div className="all-home-page">
            <div className="home-page-container">
                <img className="home-page-logo" src="/img/favicon.ico" alt="LOGO" />
                <Link 
                    className="home-page-button" 
                    to='/categories'>JOUER
                </Link>
                <LoginButton/>
            </div>
            <LoginRegister/>
        </div>
    );
}