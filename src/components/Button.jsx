import styled from 'styled-components'
import buttonSound from '../assets/button.mp3'

const StyledButton = styled.button`
    color: black;
    width: ${(props) => props.width ? props.width + 'px' : '100px' };
    height: ${(props) => props.height ? props.height + 'px' : '100px' };
    border-radius: 10px;
    font-size: ${(props) => props.fontSize? props.fontSize : '1.2rem' };

    &:hover {
        background-color: darkgray;
    }

    &:active {
        background-color: white
    }
`

function Button ({content, width, height, fontSize, eventHandler}) {
    const onClickHandler = () => {
        eventHandler()
        const button = new Audio(buttonSound)
        button.play()
    }
    return <StyledButton width={width} height={height} fontSize={fontSize} onClick={onClickHandler} >{content? content : 'hi'}</StyledButton>
}

export default Button