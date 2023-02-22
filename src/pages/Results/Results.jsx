import LoginButton from '../../components/LoginButton/loginButton';
// import NavMenu from '../../components/NavMenu/NavMenu'
import { Link } from 'react-router-dom';
import '../Results/Results.css'

export default function Results({first}) {
    const isLogged = localStorage.getItem('isLogged');
    var paramUrl = window.location.href.split('http://localhost:3000/results?note=')
    return (
        <div className='results-container'>

            <div className='results-score'>
                <div>Votre score:</div>
                <div className='score'>{paramUrl}</div>
            </div>
            <Link to='/categories'>Retour au catégories</Link>
            <LoginButton />
        </div>
    );
}