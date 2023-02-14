import './Categories.css'
import { React, useEffect, useState } from 'react';

const url = 'http://localhost:8000/api/categories'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
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

    return (
        <div>
            <div className="categories-all-containt">
                <h1>Vous êtes connecter en tant que :</h1>
                <ul>
                    {categories.map((category, i) => {
                        return (
                            <li key={i}>
                                {category.categorie}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
