import styled from 'styled-components'
import Title from '../atoms/Title';
import Image from '../atoms/Image';

function GrupSistem({src, alt, title, titleSistem, logo, rgt, lg, cntLogo,cntTitle}) {
    return ( 
        <Grupsistem $lg={lg} $rgt={rgt}>
            <ContentLogo $cntLogo={cntLogo}>
                <Image src={src} alt={alt} logo={logo}/>
            </ContentLogo>
            <ContentTitle $cntTitle={cntTitle}>
                <Title title={title} titleSistem={titleSistem}/>
            </ContentTitle>
        </Grupsistem>
     );
}

export default GrupSistem;

const Grupsistem = styled.div`
    ${props => props.$lg &&`
        width: 100%;
        height: 11%;
        background-color: #101820;
        overflow:hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ${props => props.$rgt &&`
        width: 100%;
        height: 11%;
        background-color: #101820;
        overflow:hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

const ContentLogo = styled.div`
    ${props => props.$cntLogo &&`
        display: flex;
        flex-direction: row-reverse;
        height: 100%;
        align-items: center;
        width: 30%;
    `}
`

const ContentTitle = styled.div`
    ${props => props.$cntTitle &&`
        display: flex;
        width: 70%;
        height: 100%;
        align-items: center;
    `}
`