import Button from "../components/Button";
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
    grid-template-columns: repeat(3, 1fr);
    gap: 2vh;
`


function GameCountSelect ({setGameCount}) {
    const counts = [10, 30, 50]
    return (
        <Container>
            <Text>몇 문제 풀까?</Text>
            <ButtonsContainer>
                {counts.map(count => <Button key={'count' + count} width={100} height={100} content={count} eventHandler={() => setGameCount(count)}/> )}
            </ButtonsContainer>
        </Container>
    )
}

export default GameCountSelect