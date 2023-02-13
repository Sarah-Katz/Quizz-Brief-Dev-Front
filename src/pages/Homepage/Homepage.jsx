import LoginButton from "../../components/LoginButton/loginButton";
import './Homepage.css';

export default function Homepage() {
    return (
        <div className="home-page-container">
            <img className="home-page-logo" src="/img/favicon.ico" alt="LOGO" />
            <button className="home-page-button">JOUER</button>
            <LoginButton/>
        </div>
    );
}