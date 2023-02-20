import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameHistory() {
    const userID = localStorage.getItem('userID');
    const [games, setGames] = useState([]);
    const [averageScore, setAverageScore] = useState(0);

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
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [userID]);

    return (
        <div className="game-history">
            <h2>Game History</h2>
            {games.length > 0 ? (
                <div>
                    <p>Average score: {averageScore}</p>
                    <ul>
                        {games.map((game) => (
                            <li key={game.id}>
                                {new Date(game.created_at).toLocaleDateString('fr-FR')} - Score: {game.score}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No games found.</p>
            )}
        </div>
    );
}
