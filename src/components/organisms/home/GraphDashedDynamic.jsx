import styled from "styled-components";

import ChartDashed from "../../molecule/graph/ChartDashed";

function GraphDashedDynamic({id, title, name, namelineone, namelinetwo, namelinethree, voltage, power, intensity}) {
    return ( 
        <ContentGraph id={id}>
            <ChartDashed 
                title={title}
                name={name}
                namelineone={namelineone} 
                namelinetwo={namelinetwo} 
                namelinethree={namelinethree} 
                voltage={voltage} 
                power={power} 
                intensity={intensity}
            />
        </ContentGraph>
     );
}

export default GraphDashedDynamic;

const ContentGraph = styled.div`
    width: 70%;
    height: 100%;
    background-color: #e3e3e368;
    overflow: hidden;
    border-radius: 2vh;
    margin: 0 2% 0 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`
