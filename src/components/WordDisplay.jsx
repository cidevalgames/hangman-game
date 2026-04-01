import { useGameContext } from '../context/GameContext';
import './WordDisplay.css';

function WordDisplay() {
    const { displayedWord } = useGameContext();

    return (
        <p className="word-display" translate='no'>
            {displayedWord.map((c, index) => (
                <span key={index}> {c} </span>
            ))}
        </p>
    )
}

export default WordDisplay;