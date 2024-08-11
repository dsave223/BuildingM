import styled from 'styled-components'

function SubTitle({title, subTitleLogin, subTitleSetting}) {
    return ( 
        <Tlt $subTitleLogin={subTitleLogin} $subTitleSetting={subTitleSetting}>{title}</Tlt>
     );
}

export default SubTitle;

const Tlt = styled.h2`
    ${props => props.$subTitleSetting &&`
        font-size: 1.2rem;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    `}
    ${props => props.$subTitleLogin &&`
        font-size: 2rem;
        font-family: 'Open Sans', sans-serif;
    `}
`;