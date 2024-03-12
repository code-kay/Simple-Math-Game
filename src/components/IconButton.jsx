import styled from 'styled-components'

const StyledExitButton = styled.button`
    padding: 20px;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 10;
`

function IconButton ({eventHandler, icon}) {
    return <StyledExitButton onClick={eventHandler} icon={icon} ></StyledExitButton>
}

export default IconButton