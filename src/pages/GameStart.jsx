import Button from "../components/Button";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 65vh;
`

function GameStart ({setIsStarted}) {
    return (
        <Container>
            <Button content="게임 시작" eventHandler={()=> setIsStarted(true)}/>
        </Container>
    )
}

export default GameStart