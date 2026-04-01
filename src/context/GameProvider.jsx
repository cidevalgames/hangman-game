import { useState, useEffect, useCallback } from "react";
import { GameContext } from './GameContext';

const words = ["elephant", "girafe", "dauphin", "tortue", "jaguar", "manchot"];

export function GameProvider({ children }) {
    const [word, setWord] = useState('');
    const [displayedWord, setDisplayedWord] = useState([]);
    const [usedKeys, setUsedKeys] = useState([]);
    const [lives, setLives] = useState(6);
    const [isPlaying, setIsPlaying] = useState(true);

    const resetGame = useCallback(() => {
        setIsPlaying(true);
        setLives(6);
        setRandomWord();
        setUsedKeys([]);
    }, [])

    const resetDisplayedWord = (word) => {
        const newDisplayedWord = Array(word.length).fill('_');
        setDisplayedWord(newDisplayedWord);
    }

    const setRandomWord = () => {
        const randInt = Math.floor(Math.random() * words.length);
        const word = words[randInt];
        setWord(word);
        resetDisplayedWord(word);
    }

    const onKeyClick = (key) => {
        checkLetter(key);
        setUsedKeys([...usedKeys, key]);
    }

    const checkLetter = (c) => {
        const newArr = [...displayedWord];

        for (let i = 0; i < word.length; i++) {
            if (word[i] === c) {
                newArr[i] = c;
            }
        }

        if (newArr.join('') === displayedWord.join('')) {
            setLives(lives - 1);
        }

        setDisplayedWord(newArr);
    }

    // Update word display everytime the player finds a letter.
    useEffect(() => {
        const displayedWordString = displayedWord.join('');

        if (displayedWordString === '') return;

        if (displayedWordString === word) {
            setIsPlaying(false);
        }
    }, [displayedWord]);

    // Game over if the player's lives are equal to 0.
    useEffect(() => {
        if (lives <= 0) {
            setIsPlaying(false);
        }
    }, [lives])

    // Reset game on first page loading.
    useEffect(() => {
        resetGame();
    }, [resetGame])

    return (
        <GameContext.Provider value={{ word, displayedWord, usedKeys, lives, isPlaying, resetGame, onKeyClick }}>
            {children}
        </GameContext.Provider>
    )
}