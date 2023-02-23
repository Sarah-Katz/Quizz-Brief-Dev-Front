import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginButton from '../../components/LoginButton/loginButton';
import LoginRegister from '../../components/LoginRegister/LoginRegister';
import { Link } from 'react-router-dom';
import '../Results/Results.css'

export default function Results({ first }) {
    const userID = localStorage.getItem('userID');
    const isLogged = localStorage.getItem('isLogged');
    var paramUrl = window.location.href.split('http://localhost:3000/results?note=');
    const [games, setGames] = useState([]);
    const [averageScore, setAverageScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/parties/${userID}`);
                const gamesData = response.data;
                setGames(gamesData);

                // Calculate average score
                const totalScore = gamesData.reduce((sum, game) => sum + game.score, 0);
                const avgScore = totalScore / gamesData.length;
                setAverageScore(avgScore);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [userID]);

    if (isLogged) {
        return (
            <div className='results-container'>
                <div className='results-infos'>
                    <div className='results-score'>Votre score:</div>
                    <div className='score'>{paramUrl}</div>
                    {averageScore > 0 ? <p className='results-averagescore'>Moyenne: <br /> {averageScore}</p> : <p className='results-averagescore'>Joue une partie pour <br></br> voir ta moyenne !</p>}
                </div>
                <div className='results-buttons'>
                    <Link to='/categories'>Retour au catégories</Link>
                    <Link to='/profile'>Voir mon profil</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className='results-container'>
                <div className='results-infos'>
                    <div className='results-score'>Votre score:</div>
                    <div className='score'>{paramUrl}</div>
                </div>
                <div className='results-buttons'>
                    <Link to='/categories'>Retour au catégories</Link>
                    <LoginButton />
                </div>
                <LoginRegister />
            </div>
        );
    }

}