import styled from "styled-components";

import WrapperMeasurement from "../../molecule/WrapperMeasurement";

function ContentDiv({textvlt, textitng, textpwr, txtvlt, txtitng, txtpwr, unitvlt, unititng, unitpwr, icondiv, iconI, iconV, iconP, unitdiv, titlediv, datadiv}) {
    return ( 
        <Content>
            <WrapperMeasurement text={textvlt} txt={txtvlt} unit={unitvlt} icon={iconV} dataenergy datatitle dataunit/>
            <WrapperMeasurement text={textitng} txt={txtitng} unit={unititng} icon={iconI} dataenergy datatitle dataunit/>
            <WrapperMeasurement text={textpwr} txt={txtpwr} unit={unitpwr} icon={iconP} dataenergy datatitle dataunit/>
        </Content>
     );
}

export default ContentDiv;

const Content = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8vh;
`