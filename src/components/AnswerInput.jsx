import styled from 'styled-components'
import correctSound from '../assets/correct.wav'
import wrongSound from '../assets/wrong.wav'
import clearSound from '../assets/clear.mp3'


const InputContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 20vh;
    display: grid;
    place-items: center;
    background: linear-gradient(transparent 0%, white 20%);
    mask: linear-gradient(transparent 0%, white 40%);
    backdrop-filter: blur(8px);
`

const StyledInput = styled.input`
    z-index: 3;
    width: 80vw;
    margin-top: 5vh;
    border-radius: 1vh;
    padding: 20px;
    font-size: 6vh;
    text-align: center;
`

function AnswerInput ({game, gameCount, gameMode, currentGame, setCurrentGame, setTime}) {
    const soundPlay = (type) => {
        const correct = new Audio(correctSound)
        const wrong = new Audio(wrongSound)
        const clear = new Audio(clearSound)
        type === 'correct' ? correct.play() : type === 'wrong' ? wrong.play() : clear.play()
    }

    const [num1, num2] = game
    const answer = gameMode === '+' ? num1 + num2 : gameMode === '−' ? num1 - num2 : gameMode === '×' ? num1 * num2 : num1 / num2
    const answerCheck = (event) => {
        if (event.key === 'Enter') {
            if (+ event.target.value === answer ) {
                if (currentGame !== gameCount - 1 ){ 
                    soundPlay('correct')
                } else {
                    setTime(prev => ({...prev, clear: new Date()}))
                    soundPlay('clear')
                }
                setCurrentGame(currentGame + 1)
                event.target.value = ''
            } else {
                soundPlay('wrong')
            }
            
        }
    }
    return (
        <InputContainer>
            <StyledInput onKeyDown={answerCheck} type='number' />
        </InputContainer>
    )
}

export default AnswerInput