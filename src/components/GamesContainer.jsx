import styled from 'styled-components'

const GamesContainer = styled.ul`
    overflow: visible;
    position: fixed;
    top: ${({currentGame}) => 40 - currentGame * 16}vh;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: top 0.3s ease-out;
`

export default GamesContainer