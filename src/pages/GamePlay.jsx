import { useEffect } from "react";
import AnswerInput from "../components/AnswerInput";
import CurrentGame from "../components/CurrentGame";
import Game from "../components/Game"; 
import GamesContainer from "../components/GamesContainer";
import IconButton from "../components/IconButton";

function GamePlay ({games, gameCount, gameMode, currentGame, setCurrentGame, setTime}) {
    useEffect(() => setTime({start: new Date(), clear: null}), [])
    return (
        <>
            <GamesContainer currentGame={currentGame} >
                {games.map((game, idx) => <Game key={gameMode + idx} game={game} gameMode={gameMode} $isCurrentGame={currentGame === idx}/>)}
            </GamesContainer>
            <CurrentGame />
            {games.length ? <AnswerInput game={games[currentGame]} gameCount={gameCount} gameMode={gameMode} currentGame={currentGame} setCurrentGame={setCurrentGame} setTime={setTime} /> : null}
        </>
    )
}

export default GamePlay