import styled from 'styled-components'

function Text({text, dataunit, dataenergy, datatitle, textsetting}) {
    return ( 
        <Txt $dataunit={dataunit} $textsetting={textsetting} $dataenergy={dataenergy} $datatitle={datatitle}>{text}</Txt>
     );
}

export default Text;

const Txt = styled.p`
    font-family: 'Rubik', sans-serif;
    font-size: small;
    font-weight: 800;
    font-style: normal;
    
    ${props => props.$dataenergy &&`
        font-size: 1.5rem;
        font-family: 'Inter', sans-serif;
    `}
    ${props => props.$datatitle &&`
        font-size: 1.2rem;
        font-family: 'Inter', sans-serif;
        text-align: justify;
        font-weight: 800;
    `}
    ${props => props.$datatitleCopie &&`
        font-size: 1.5rem;
        font-family: 'Inter', sans-serif;
        text-align: justify;
        font-weight: 800;
    `}
    ${props => props.$dataunit &&`
        font-size: 1.3rem;
        font-family: 'Inter', sans-serif;
    `}
    ${props => props.$textsetting &&`
        font-size: 1rem;
        color: white;
        text-shadow: 4px 4px 20px orange;
    `}
`;