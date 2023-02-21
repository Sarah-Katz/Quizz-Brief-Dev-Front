import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameHistory() {
    const userID = localStorage.getItem('userID');
    const [games, setGames] = useState([]);
    const [averageScore, setAverageScore] = useState(0);
    const [totalGames, setTotalGames] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/parties?user_id=${userID}`);
                const gamesData = response.data;
                setGames(gamesData);

                // Calculate average score
                const totalScore = gamesData.reduce((sum, game) => sum + game.score, 0);
                const avgScore = totalScore / gamesData.length;
                setAverageScore(avgScore);

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
            <p className='profile-averagescore'>Moyenne : {averageScore} points</p>
            <p className='profile-totalgames'>Vous avez joué {totalGames} parties</p>
            <h2 className='game-history-title'>Historique de vos parties</h2>
            {games.length > 0 ? (
                <div className='game-history'>
                    <ul className='game-history-list'>
                        {games.map((game) => (
                            <li className='game-history-game' key={game.id}>
                                {new Date(game.created_at).toLocaleDateString('fr-FR')} - Score: {game.score}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Aucune partie trouvée.</p>
            )}
        </div>
    );
}
