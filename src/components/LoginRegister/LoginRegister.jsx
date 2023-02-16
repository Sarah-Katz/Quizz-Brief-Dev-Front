import './LoginRegister.css'
import '../LoginButton/loginButton'
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
import usePasswordValidator from 'react-use-password-validator'


export default function LoginRegister() {

    const [isLogin, setIsLogin] = useState(true)

    function handleClick() {
        const body = document.querySelector('body')
        body.classList.remove('show-modal')
    }
    function handleClickRegister() {
        const body = document.querySelector('body')
        body.classList.remove('show-modal')
        body.classList.add('show-register')
        setIsLogin(false)
    }
    function handleClickHideRegister() {
        const body = document.querySelector('body')
        body.classList.remove('show-register')
        setIsLogin(true)
    }
    const {
        password,setPassword,
        isValid,setIsValid
      } = usePasswordValidator({
        digits: 2,
        lowercase: true,
        uppercase: 2,
        spaces: false
      });
    
      const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted!');
      };
    
    
    if (isLogin) {

    return (

        <div className="modal">
            <div className="parent"></div>
            <div className="modal-containt">
                <div className="login-register">
                    <form action="" onSubmit={handleSubmit}>
                    <RxCross1 onClick={handleClick} className='close-button'/>
                        <div className="form-group">
                            <label htmlFor="inputEmail"></label>
                            <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="Entrez votre email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword" />
                            <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Entrez votre mot de passe"
                            onChange={e => {
                                setPassword(e.target.value);
                                setIsValid(e.target.value);
                            }}
                            value={password}/>
                        </div>
                        <button 
                        type="submit" 
                        className="login-register-button" 
                        disabled={!isValid}>Se connecter</button>
                        <button 
                        onClick={handleClickRegister} 
                        className="login-register-button">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    );
} 
    else {

    return (

            <div className='modal register'>
                <div className="parent"></div>
                <div className="register-containt">
                <div className="register-modal">
                    <RxCross1 onClick={handleClickHideRegister} className='close-button'/>
                    <h1 className='title-register'>Création du compte</h1>
                    <div className='register-forms'>
                        <div className="form-group-register">
                            <label htmlFor="inputName"></label>
                            <input 
                            type="text" 
                            className="form-control-register" 
                            name="pseudo" 
                            placeholder="Entrez votre PSEUDO"/>
                        </div>
                        <div className="form-group-register">
                            <label htmlFor="inputEmail"></label>
                            <input 
                            type="email" 
                            className="form-control-register" 
                            name="email" 
                            placeholder="Entrez votre Email"/>
                        </div>
                        <div className="form-group-register">
                            <label htmlFor="inputConfirmEmail"></label>
                            <input 
                            type="email" 
                            className="form-control-register" 
                            name="confirm-email" 
                            placeholder="Confirmez votre Email"/>
                        </div>
                        <div className="form-group-register">
                            <label htmlFor="inputConfirmPassword"></label>
                            <input 
                            type="password" 
                            className="form-control-register" 
                            name="password" 
                            placeholder="Entrez votre mot de passe"/>
                        </div>
                        <div className="form-group-register">
                            <label htmlFor="inputPassword"></label>
                            <input 
                            type="password" 
                            className="form-control-register" 
                            name="confirm-password" 
                            placeholder="Confirmer votre mot de passe"/>
                        </div>
                    </div>
                    <button className="register-button">S'inscrire</button>
                </div>
                </div>
            </div>
        );    
    };
}