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
    grid-template-columns: repeat(3, 1fr);
    gap: 2vh;
`

function DifficultySelect ({setDifficulty}) {
    const difficulties = [[10, '😆'], [100, '😐 '], [1000, '🤯']]
    return (
        <Container>
            <Text>난이도는 어떻게 할까?</Text>
            <ButtonsContainer>
                {difficulties.map(([difficulty, text]) => <Button key={text} width={100} height={100} content={text} eventHandler={() => setDifficulty(difficulty)}/> )}
            </ButtonsContainer>
        </Container>
    )
}

export default DifficultySelect