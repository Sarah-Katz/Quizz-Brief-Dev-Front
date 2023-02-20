import GameHistory from '../../components/GameHistory/GameHistory';
import LoginButton from '../../components/LoginButton/loginButton';
import LoginRegister from '../../components/LoginRegister/LoginRegister';
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Profile() {
    const isLogged = localStorage.getItem('isLogged');
    const userID = localStorage.getItem('userID');
    const userName = localStorage.getItem('userName');

    if (isLogged) {
        return (
            <div>
                <NavMenu />
                <div className='profile-container'>
                    <h2 className='profile-username'>{userName}</h2>
                    <GameHistory />
                </div>
                <LoginRegister />
            </div>
        );
    } else {
        return (
            <div>
                <NavMenu />
                <div className='profile-container'>
                    <LoginButton />
                </div>
                <LoginRegister />
            </div>
        );
    }
}