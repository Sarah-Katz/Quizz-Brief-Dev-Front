import LoginRegister from '../../components/LoginRegister/LoginRegister';
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Profile() {
    return (
        <div>
            <NavMenu />
            <div className='profile-container'></div>
            <LoginRegister />
        </div>
    );
}