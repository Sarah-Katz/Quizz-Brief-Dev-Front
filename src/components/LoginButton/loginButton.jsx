import './LoginButton.css'

export default function LoginButton() {

    function handleClick() {
        const body = document.querySelector('body')
        body.classList.add('show-modal')
    }

    return (
        <div>
            <button onClick={handleClick} className="login-button-button">Se connecter / S'inscrire</button>
        </div>
    );
}
