import { useState, useEffect } from 'react';
import axios from 'axios';
import './GameHistory.css'

export default function GameHistory() {
    const userID = localStorage.getItem('userID');
    const [games, setGames] = useState([]);
    const [averageScore, setAverageScore] = useState(0);
    const [totalGames, setTotalGames] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/parties/${userID}`);
                const gamesData = response.data;
                setGames(gamesData);

                // Calculate average score
                const totalScore = gamesData.reduce((sum, game) => sum + game.score, 0);
                const avgScore = totalScore / gamesData.length;
                setAverageScore(Math.round(avgScore));

                // Get number of games
                const gamesNumber = gamesData.length;
                setTotalGames(gamesNumber);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [userID]);

    return (
        <div className="game-history-container">
            {averageScore > 0 ? <p className='game-history-averagescore'>Moyenne : {averageScore} points</p> : <p className='game-history-averagescore'>Joue une partie pour <br></br> voir ta moyenne !</p>}
            <p className='game-history-totalgames'>Vous avez joué {totalGames} parties</p>

            {games.length > 0 ? (
                <div className='game-history'>
                    <h2 className='game-history-title'>Historique de vos parties</h2>
                    <ul className='game-history-list'>
                        {games.map((game) => (
                            <li className='game-history-game' key={game.id}>
                                {new Date(game.created_at).toLocaleDateString('fr-FR')} - Score: {game.score}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="game-history">
                    <h2 className='game-history-title'>Historique de vos parties</h2>
                    <p className='game-history-empty'>Aucune partie trouvée.</p>
                </div>
            )}
        </div>
    );
}
