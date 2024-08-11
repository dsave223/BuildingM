import styled from 'styled-components'
import ContainerImage from '../molecule/ContainerImage';
import GrupSistem from '../molecule/GrupSistem';

function DivisionSistem({backwards, srcImg, srcSistem, altImg, altSistem, title, image, logo, imgdvs, rgt, lg}) {
    return ( 
        <Aestheticdivision $backwards={backwards}>
            <GrupSistem src={srcSistem} alt={altSistem} title={title} titleSistem logo={logo} rgt={rgt} lg={lg} cntLogo cntTitle/>
            <ContainerImage src={srcImg} alt={altImg} image={image} imgdvs={imgdvs}/>
        </Aestheticdivision>
     );
}

export default DivisionSistem;

const Aestheticdivision = styled.div`
    height: 100vh;
    width: 50%;
    ${props => props.$backwards &&`
        display: flex;
        flex-direction: column-reverse;
    `}
`;