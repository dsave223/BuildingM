import styled from "styled-components";
import Text from "../atoms/Text";

function WrapperMeasurement({txt, text, unit, dataenergy, dataunit, datatitle, icon}) {
    return ( 
        <WrapperDiv>
            <Icon>{icon}</Icon>
            <DivisionTitle>
                <Text text={text} datatitle={datatitle}/>
            </DivisionTitle>
            <DivicionData>
                <Text text={txt} dataenergy={dataenergy}/>
            </DivicionData>
            <DivicionUnit>
                <Text text={unit} dataunit={dataunit}/>
            </DivicionUnit>
        </WrapperDiv>
     );
}

export default WrapperMeasurement;

const WrapperDiv = styled.div`
    width: 100%;
    height: 10vh;
    border-radius: 2vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: #101820;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Icon = styled.div`
    font-size: 2rem;
    width: 15%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`

const DivisionTitle = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: left;
    text-align: center;
    height: 100%;

`
const DivicionData = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const DivicionUnit = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`