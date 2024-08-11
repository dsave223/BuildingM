import styled from 'styled-components'

import SubTitle from '../atoms/SubTitle';
import Text from '../atoms/Text';

function ContentInfo({title, text, inf}) {
    return ( 
        <ContentText $inf={inf}>
            <SubTitle title={title} subTitleSetting/>
            <Text text={text}/>
        </ContentText>
     );
}

export default ContentInfo;

const ContentText = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    
    ${props => props.$inf && `
        position: static;
        z-index: 2;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: -29% 0 0 0 ;
        height: 15vh;
        border-radius: 5vh 0 0 0;
        border-left: 2px solid;
        border-top: 2px solid;
        border-color: black;
        color: white;
        background-color: #00000053;
    `}
`