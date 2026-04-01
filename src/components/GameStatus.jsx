import { useGameContext } from "../context/GameContext";
import './GameStatus.css';

function GameStatus() {
    const { lives, resetGame, word } = useGameContext();

    return (
        <div className="game-status">
            <h2>{lives === 0 ? 'Tu as perdu !' : 'Tu as gagné !'}</h2>
            <p>Le mot était&nbsp;<b translate="no">{word}</b></p>
            <button onClick={resetGame}>Rejouer</button>
        </div>
    )
}

export default GameStatus;