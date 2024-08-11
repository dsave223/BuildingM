import styled from 'styled-components'
import Image from '../atoms/Image';

function ContainerImage({src, alt, image, logohome, imgdvs, imghome}) {
    return ( 
        <Containerimage $imgdvs={imgdvs} $imghome={imghome}>
            <Image src={src} alt={alt} image={image} logohome={logohome}/>
        </Containerimage>
     );
}

export default ContainerImage;

const Containerimage = styled.div`
    ${props => props.$imgdvs &&`
        width: 100%;
        height: 89vh;
        overflow:hidden;
    `}
    ${props => props.$imghome &&`
        width: 100%;
        height: 100%;
        overflow:hidden;
    `}
`;