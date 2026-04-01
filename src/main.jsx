import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameProvider } from './context/GameProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>,
)
