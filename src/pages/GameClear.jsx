import Button from "../components/Button";
import styled from "styled-components";
import Confetti from 'react-confetti'
import { useEffect, useState } from "react";

const Text = styled.p`
    font-size: 2rem;
    text-align: center;
`

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 65vh;
`

function GameClear ({gameResetHandler, gameCount, time}) {
    const [windowSize, setWindowSize] = useState({width: null, height: null})
    const clearTime = ((time.clear - time.start) / 1000).toFixed(2)
    const timePerGame = (clearTime/gameCount).toFixed(2)
    const handleWindoSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    useEffect(() => {
        window.onresize = () => handleWindoSize()
    })
    return (
        <Container>
            <Confetti style={{zIndex:999, filter: 'drop-shadow(5px 5px 5px rgba(150,150,150,0.2))', width: windowSize.width, height: windowSize.height }}/>
            <Text>축하합니다! 🎉 <br/> 모든 문제를 풀었습니다!</Text>
            <Text>{gameCount !== 10 ? <>총 {clearTime}초, <br/> 문제당 평균 {timePerGame}초 걸렸어요!</> : `총 ${clearTime}초 걸렸어요!`}</Text>
            <Button content="한 번 더?" eventHandler={gameResetHandler} ></Button>
        </Container>
    )
}

export default GameClear