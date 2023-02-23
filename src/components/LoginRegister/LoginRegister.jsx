// Importer les fichiers CSS et composants nécessaires
import './LoginRegister.css';
import '../LoginButton/loginButton';
import { RxCross1 } from 'react-icons/rx';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';


const emailRegex = /^\S+@\S+.\S+$/;
// Expression régulière qui permet de valider une chaîne de caractères contenant au moins 8 caractères
// Avec au moins une lettre majuscule, une lettre minuscule et un chiffre
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;



export default function LoginRegister() {

  // Etat du login + fonction login
  const isLogged = localStorage.getItem('isLogged');
  const { login } = useContext(UserContext);

  // Switch modal
  const [isLogin, setIsLogin] = useState(true);

  // État initial du formulaire de saisie de la modale de connection !
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    connection: '',
    name: '',
    emailForm: '',
    confirmEmail: '',
    passwordForm: '',
    confirmPassword: '',
  });

  // État initial des erreurs de saisie
  const [formErrors, setFormErrors] = useState({});

  // Gérer le changement dans le formulaire de saisie
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const errors = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email) {
      errors.email = "Veuillez entrer une adresse e-mail.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Veuillez entrer une adresse e-mail valide.";
    }

    if (!formData.password) {
      errors.password = "Veuillez entrer un mot de passe.";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre.";
    }

    if (!passwordRegex.test(formData.password) || !emailRegex.test(formData.email)) {
      errors.connection = 'E-mail ou Mot de passe est incorrect'
    }

    if (isLogin && Object.keys(errors).length === 0) {
      login(formData.email, formData.password)
    }
    setFormErrors(errors);
  }

    // Formulaire d'inscription

    const handleSubmitRegister = (e) => {
      e.preventDefault();
      if (!isLogin) {
        if (!formData.name) {
          errors.name = "Veuillez entrer un nom.";
        }
  
        if (!formData.emailForm) {
          errors.emailForm = "Veuillez entrer une adresse e-mail.";
        } else if (!emailRegex.test(formData.emailForm)) {
          errors.emailForm = "Veuillez entrer une adresse e-mail valide.";
        }
  
        if (!formData.confirmEmail) {
          errors.confirmEmail = "Veuillez confirmer l'adresse e-mail.";
        } else if (formData.confirmEmail !== formData.emailForm) {
          errors.confirmEmail = "Les adresses e-mail ne correspondent pas.";
        }
  
        if (!formData.passwordForm) {
          errors.passwordForm = "Veuillez entrer un mot de passe.";
        } else if (!passwordRegex.test(formData.passwordForm)) {
          errors.passwordForm =
            "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule et un chiffre.";
        }
  
        if (!formData.confirmPassword) {
          errors.confirmPassword = "Veuillez confirmer le mot de passe.";
        } else if (formData.confirmPassword !== formData.passwordForm) {
          errors.confirmPassword = "Les mots de passe ne correspondent pas.";
        }
  
        if (!isLogin && Object.keys(errors).length === 0) {
          // Envoi du formulaire vers la BDD
  
          const registerData = {
            name: formData.name,
            email: formData.emailForm,
            password: formData.passwordForm

          };
          axios.post('http://localhost:8000/api/users', registerData);
          setTimeout(() => {
            login(formData.emailForm, formData.password);
          }, 500);
        }
      }
      setFormErrors(errors);
    };

  // Gérer la fermeture de la fenêtre modale
  const handleCloseModal = () => {
    const body = document.querySelector('body');
    body.classList.remove('show-modal', 'show-register');
    setIsLogin(true);
  };

  // Gérer l'affichage de la fenêtre modale d'inscription
  const handleShowRegister = () => {
    const body = document.querySelector('body');
    body.classList.add('show-modal', 'show-register');
    setIsLogin(false);
  };

  // Rendu du formulaire de connexion
  if (isLogin) {

    return (

      <div className="modal">
        <div className="parent" onClick={handleCloseModal}></div>
        <div className="modal-containt">
          <div className="login-register">
            <form action="" onSubmit={handleSubmit}>
              <RxCross1 className='close-button' onClick={handleCloseModal} />
              <div className="form-group">
                <label htmlFor="inputEmail">E-mail</label>
                <input
                  type="email"
                  className={formErrors.email ? 'saisie error form-control' : 'form-control'}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Entrez votre email"
                />
                {formErrors.email && <span className="error-message"></span>}
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Mot de passe</label>
                <input
                  type="password"
                  className={formErrors.password ? 'saisie error form-control' : 'form-control'}
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  placeholder="Entrez votre mot de passe"
                />
              </div>
              {formErrors.connection && <span className="error-message">{formErrors.connection}</span>}
              <button
                type="submit"
                className="login-register-button"
                onClick={handleSubmit}
              >Se connecter</button>
              <button
                type='button'
                onClick={handleShowRegister}
                className="login-register-button">
                S'inscrire
              </button>
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
            <img className="fondEcran" src="/img/background/stars.jpg" alt="Fond D'ecran etoilés" />
            <RxCross1 onClick={handleCloseModal} className='close-button' />
            <h1 className='title-register'>Création du compte</h1>
            <form action='' className='register-forms' onSubmit={handleSubmitRegister}>
              <div className="form-group-register">
                <label htmlFor="inputName">Pseudo</label>
                <input
                  type="text"
                  className={formErrors.name ? 'saisie error form-control-register' : "form-control-register"}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Entrez votre PSEUDO" />
              </div>
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              <div className="form-group-register">
                <label htmlFor="inputEmail">E-mail</label>
                <input
                  type="email"
                  name="emailForm"
                  className={formErrors.emailForm ? 'saisie error form-control-register' : "form-control-register"}
                  value={formData.emailForm}
                  onChange={handleInputChange}
                  placeholder="Entrez votre Email" />
              </div>
              {formErrors.emailForm && <span className="error-message">{formErrors.emailForm}</span>}
              <div className="form-group-register">
                <label htmlFor="inputConfirmEmail">Confirmation E-mail</label>
                <input
                  type="email"
                  name="confirmEmail"
                  className={formErrors.confirmEmail ? 'saisie error form-control-register' : "form-control-register"}
                  value={formData.confirmEmail}
                  onChange={handleInputChange}
                  placeholder="Confirmez votre Email" />
              </div>
              {formErrors.confirmEmail && <span className="error-message">{formErrors.confirmEmail}</span>}
              <div className="form-group-register">
                <label htmlFor="inputConfirmPassword">Mot de passe</label>
                <input
                  type="password"
                  name="passwordForm"
                  className={formErrors.passwordForm ? 'saisie error form-control-register' : "form-control-register"}
                  value={formData.passwordForm}
                  onChange={handleInputChange}
                  placeholder="Entrez votre mot de passe" />
              </div>
              {formErrors.passwordForm && <span className="error-message">{formErrors.passwordForm}</span>}
              <div className="form-group-register">
                <label htmlFor="inputPassword">Confirmation mot de passe</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={formErrors.confirmPassword ? 'saisie error form-control-register' : "form-control-register"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirmer votre mot de passe" />
              </div>
              {formErrors.confirmPassword && <span className="error-message">{formErrors.confirmPassword}</span>}
              <button
                type='submit'
                className="register-button"
              >S'inscrire</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
};