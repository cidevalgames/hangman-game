# 🎯 Hangman Game

A classic word-guessing game built with React and Vite.

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-green)

## 🚀 Demo

👉 [Play the game](https://cidevalgames.github.io/hangman-game/)

## 📖 How to play

- A random word is chosen at the start
- Click on letters to guess the word
- You have **6 lives** — each wrong letter costs one
- Guess the word before running out of lives!

## 🛠️ Tech stack

- **React 18** — UI and state management
- **Vite** — build tool and dev server
- **Context API** — global state without prop drilling
- **CSS** — custom styling

## ⚙️ Installation

```bash
git clone https://github.com/cidevalgames/hangman-game.git
cd hangman-game
npm install
npm run dev
```

## 📁 Project structure

```
src/
├── context/
│   ├── GameContext.js       # Context + useGameContext hook
│   └── GameProvider.jsx     # State, logic, and effects
├── components/
│   ├── Keyboard.jsx         # QWERTY keyboard
│   ├── WordDisplay.jsx      # Hidden word display
│   └── GameStatus.jsx       # Win / lose screen
├── App.jsx
└── main.jsx
```

## 📚 Concepts learned

- `useState`, `useEffect`, `useCallback`
- Context API to avoid prop drilling
- Conditional rendering
- `.map()` for rendering lists
- Deployment with `gh-pages`
