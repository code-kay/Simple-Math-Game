import styled from 'styled-components'
import Button from './Button'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100vw;
    padding: 5vh;
    display:grid;
    grid-template-columns: ${props => props.isPlaying? '30px auto 30px' : '1fr' };
    justify-items: center;
    align-items: center;
    height: 18vh;
    line-height: 18vh;
    background: linear-gradient(white 80%, transparent);
    mask: linear-gradient(white 60%, transparent); 
    backdrop-filter: blur(8px);

    & > h1 {
        font-size: 3rem;
        justify-self: center;
    }
`

function Header ({isPlaying, gameResetHandler}) {
    return (
        <StyledHeader isPlaying={isPlaying} >
            {isPlaying? <Button content='< 새 게임' width={60} height={40} fontSize='0.8rem' eventHandler={gameResetHandler} /> : null }
            <h1>연산 게임</h1>
        </StyledHeader>
    )
}

export default Header