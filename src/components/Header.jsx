import styled from 'styled-components'

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100vw;
    text-align: center;
    height: 18vh;
    line-height: 18vh;
    font-size: 3.5rem;
    background: linear-gradient(white 80%, transparent);
    mask: linear-gradient(white 60%, transparent);
    backdrop-filter: blur(8px);
`

function Header () {
    return <StyledHeader>연산 게임</StyledHeader>
}

export default Header