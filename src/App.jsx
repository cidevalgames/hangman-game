import { useGameContext } from './context/GameContext'
import GameStatus from './components/GameStatus'
import Keyboard from './components/Keyboard'
import WordDisplay from './components/WordDisplay'
import './App.css'

function App() {
  const { isPlaying, lives } = useGameContext();

  return (
    <div className='app'>
      {isPlaying ? (
        <>
          <h1>Le jeu du pendu</h1>
          <WordDisplay />
          <p className='error-count'>Erreurs : <span translate='no'> {6 - lives} / 6</span></p>
          <Keyboard />
        </>
      ) : (
        <GameStatus />
      )}
    </div>
  )
}

export default App
