import styled from 'styled-components'
import buttonSound from '../assets/button.mp3'

const StyledButton = styled.button`
    padding: 30px;
    width: ${(props) => props.operator ? '100px' : '25vw' };
    height: ${(props) => props.operator ? '100px' : '20vh' };
    border-radius: 10px;
    font-size: ${(props) => props.operator ? '2.4rem' : '1.5rem' };

    &:hover {
        background-color: darkgray;
    }

    &:active {
        background-color: white
    }
`

function Button ({content, width, height, operator, eventHandler}) {
    const onClickHandler = () => {
        eventHandler()
        const button = new Audio(buttonSound)
        button.play()
    }
    return <StyledButton width={width} height={height} operator={operator} onClick={onClickHandler} >{content? content : 'hi'}</StyledButton>
}

export default Button