import styled from 'styled-components'

const StyledGame = styled.li`
    font-size: 7vh;
    text-align: center;
    height: 16vh;
    line-height: 16vh;
    flex-shrink: 0;
    list-style: none;
    ${props => props.$isCurrentGame ? 'color: blue;' : ''}
    transition: color 0.5s;
`

function Game ({game, gameMode, $isCurrentGame}) {
    const [num1, num2] = game
    return <StyledGame $isCurrentGame={$isCurrentGame} >{`${num1} ${gameMode} ${num2} = ?`} </StyledGame>
}

export default Game