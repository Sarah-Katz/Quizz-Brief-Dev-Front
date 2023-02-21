import LoginRegister from '../../components/LoginRegister/LoginRegister';
import NavMenu from '../../components/NavMenu/NavMenu'
import { Link } from 'react-router-dom';

export default function Results({first}) {
    const isLogged = localStorage.getItem('isLogged');
    var paramUrl = window.location.href.split('http://localhost:3000/results?note=')
    return (
        <div>
            <NavMenu />
            <div className='results-container'>{paramUrl}</div>
            <Link to='/categories'>Retour au catégories</Link>
            <LoginRegister />
        </div>
    );
}