import './LoginRegister.css'
import '../LoginButton/loginButton'
import { RxCross1 } from 'react-icons/rx';

export default function LoginRegister() {

    function handleClick() {
        const body = document.querySelector('body')
        body.classList.remove('show-modal')
    }

    return (
        <div className="modal">
            <div className="parent"></div>
            <div className="modal-containt">
                <div className="login-register">
                    <RxCross1 onClick={handleClick} className='close-button'/>
                    <div className="form-group">
                        <label htmlFor="inputEmail"></label>
                        <input type="email" className="form-control" name="email" placeholder="Entrez votre email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword"></label>
                        <input type="password" className="form-control" name="password" placeholder="Entrez votre mot de passe"/>
                    </div>
                    <button className="login-register-button">Se connecter</button>
                    <button className="login-register-button">S'inscrire</button>
                </div>
            </div>
        </div>

    );
}