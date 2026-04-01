import { useGameContext } from '../context/GameContext';
import './Keyboard.css';

function Keyboard() {
    const keys = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']]

    const { onKeyClick, isPlaying, usedKeys } = useGameContext();

    return (
        <div className="keyboard" translate='no'>
            {keys.map((row, index) => (
                <div key={index}>
                    {row.map((c, index) => (
                        <button
                            key={index}
                            disabled={!isPlaying || usedKeys.includes(c)}
                            onClick={() => onKeyClick(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard;