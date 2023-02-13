import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Categorie">Catégorie</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Quizz">Quizz</Link>
                    </li>
                    <li>
                        <Link to="/Results">Résultats</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar