import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "../atoms/Text";

function WrapperText({text, to, textLink}) {
    return ( 
        <Wrappertext>
            <Linkconten>
                <Link to={to} className="link">{textLink}</Link>
            </Linkconten>
            <TextContainer>
                <Text text={text}/>
            </TextContainer>
        </Wrappertext>
     );
}

export default WrapperText;

const Wrappertext = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 65%;
    gap: 1vh;
    height: 3vh;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vh;
`;

const Linkconten = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3vh;
    .link{
        text-decoration-line: none;
        text-decoration: none;
        color: azure;
        font-size: small;
        font-weight: 800;
        font-style: normal;
        font-family: 'Rubik', sans-serif;
    }
`;
