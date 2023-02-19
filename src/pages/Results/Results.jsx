import LoginRegister from '../../components/LoginRegister/LoginRegister';
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Results() {
    const isLogged = localStorage.getItem('isLogged');
    return (
        <div>
            <NavMenu />
            <div className='results-container'></div>
            <LoginRegister />
        </div>
    );
}