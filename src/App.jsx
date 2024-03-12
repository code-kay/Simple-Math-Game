import { useState, useEffect } from 'react'
import './App.css'
import GameModeSelect from './pages/GameModeSelect'
import DifficultySelect from './pages/DifficultySelect'
import GamePlay from './pages/GamePlay'
import GameCountSelect from './pages/GameCountSelect'
import Header from './components/Header'
import Main from './components/Main'
import GameStart from './pages/GameStart'
import GameClear from './pages/GameClear'



function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [gameMode, setGameMode] = useState(null)
  const [difficulty, setDifficulty] = useState(0)
  const [gameCount, setGameCount] = useState(0)
  const [games, setGames] = useState([])
  const [currentGame, setCurrentGame] = useState(0)
  const [time, setTime] = useState({start: null, clear: null})

  const gameResetHandler = () => {
    setGameMode(null)
    setDifficulty(0)
    setGameCount(0)
    setGames([])
    setCurrentGame(0)
  }
  
  useEffect(() => {
    if (gameMode && difficulty && gameCount) {
      let games = []
      while (games.length < gameCount) {
        const num1 = Math.ceil( Math.random() * difficulty )
        const num2 = Math.ceil( Math.random() * difficulty )
        if (num1 !== num2) {
          if (gameMode !== '÷') {
              games.push([num1, num2])
          } else if (num2 !== 1) {
            num1 % num2 === 0 ? games.push([num1, num2]) : null
          }
        }
      }
      setGames(games)
    }
  }, [gameMode, difficulty, gameCount])

  return (
    <>
      <Header isPlaying={games.length !== 0} gameResetHandler={gameResetHandler} />
      <Main>
        { !isStarted ? <GameStart setIsStarted={setIsStarted} />
          : !gameMode ? <GameModeSelect setGameMode={setGameMode} />
          : !difficulty ?  <DifficultySelect setDifficulty={setDifficulty} />
          : !gameCount ? <GameCountSelect setGameCount={setGameCount} />
          : currentGame < gameCount ? <GamePlay gameMode={gameMode} games={games} gameCount={gameCount} currentGame={currentGame} setCurrentGame={setCurrentGame} setTime={setTime}/>
          : <GameClear gameResetHandler={gameResetHandler} gameCount={gameCount} time={time}/> }
      </Main>
    </>
  )
}

export default App
