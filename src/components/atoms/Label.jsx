import styled from 'styled-components'

function Label({htmlFor, label, labelsetting}) {
    return ( 
        <AtomLabel htmlFor={htmlFor} $labelsetting={labelsetting}>{label}</AtomLabel>
     );
}

export default Label;

const AtomLabel = styled.label`
    ${props => props.$labelsetting && `
        font-family: 'Rubik', sans-serif;
        font-zise: 1rem;
        color: white;
    `}
`