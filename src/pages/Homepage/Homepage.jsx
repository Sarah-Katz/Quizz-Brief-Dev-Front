import LoginButton from "../../components/LoginButton/loginButton";
import './Homepage.css';
import {Link} from 'react-router-dom'

export default function Homepage() {
    return (
        <div>
        <div className="home-page-container">
            <img className="home-page-logo" src="/img/favicon.ico" alt="LOGO" />
            <Link 
                className="home-page-button" 
                to='/categories'>JOUER
            </Link>
            <LoginButton/>
        </div>
        </div>
    );
}