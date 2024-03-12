import Button from "../components/Button"
import styled from "styled-components"

const Text = styled.p`
    font-size: 2rem;
`

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 50vh;
`


const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2vh;
`

function GameModeSelect ({setGameMode}) {
    const gameModes = ['+', '−', '×', '÷']
    return (
        <Container>
            <Text>어떤 게임을 할까?</Text>
            <ButtonsContainer>
                {gameModes.map(gameMode => <Button key={gameMode} operator={true} width={100} height={100} fontSize='2.4rem' content={gameMode} eventHandler={() => setGameMode(gameMode)}/> )}
            </ButtonsContainer>
        </Container>
    )
}

export default GameModeSelect