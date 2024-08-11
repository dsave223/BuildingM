import styled from 'styled-components'

function Title({title, titleSistem}) {
    return ( 
        <Ttl $titleSistem={titleSistem}>{title}</Ttl>
     );
}

export default Title;

const Ttl = styled.h1`
    ${props => props.$titleSistem &&`
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
    `}
`;