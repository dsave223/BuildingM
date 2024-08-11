import styled from 'styled-components'

function Image({src, alt, image, logo, logohome, carousel}) {
    return ( 
        <Img src={src} loading='lazy' alt={alt} $image={image} $logo={logo} $logohome={logohome} $carousel={carousel}/>
     );
}

export default Image;

const Img = styled.img`
    overflow: hidden;
    ${props => props.$image &&`
        max-width: 100%;
    `}
    ${props => props.$logo &&`
        width: 50%;
    `}
    ${props => props.$logohome &&`
        max-width: 100%;
    `}
    ${props => props.$carousel &&`
        max-width: 127%;
    `}
`;