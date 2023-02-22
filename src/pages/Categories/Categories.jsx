import './Categories.css'
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../../components/NavMenu/NavMenu';
import LoginRegister from '../../components/LoginRegister/LoginRegister';

const url = 'http://localhost:8000/api/categories'

export default function Categories() {
    const isLogged = localStorage.getItem('isLogged');
    const userName = localStorage.getItem('userName');
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }


    function AjoutParametreUrl(maCategorie) {
        const categorie = (`categorie=${maCategorie}`);
        const urlActuel = window.location.href;
        const urlComplete = `${urlActuel}${urlActuel.includes('?') ? '&' : '?'}${categorie}`;
        const urlCompleteEncoder = encodeURI(urlComplete)

        window.history.replaceState(null, null, urlCompleteEncoder);
    }

    return (
        <div>
            <NavMenu />
            <div className="categories-all-containt">
                {isLogged ? <h2>Vous êtes connecté.e en tant que : {userName}</h2> : <h2>Vous n'êtes pas connecté.e</h2>}
                <ul className='categories-container'>
                    {categories.map((category, i) => {
                        return (
                            <li className='categorie-buttons' key={i} onClick={() => AjoutParametreUrl(category.categorie)}>
                                <Link to='/quizz'>{category.categorie}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <LoginRegister />
        </div>
    );
}
