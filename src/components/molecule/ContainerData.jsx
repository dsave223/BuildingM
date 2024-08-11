import styled from "styled-components";

import Text from "../atoms/Text";

function ContainerData({icon, text, unit, dataview, dataunit}) {
    return ( 
        <DataContent $dataview={dataview}>
            {icon}
            <Text text={text} dataunit={dataunit}/>
            {unit}
        </DataContent>
     );
}

export default ContainerData;

const DataContent = styled.div`
    display: flex;
    width: 90%;
    border-radius: 2vh;
    justify-content: center;
    align-items: center;
    height: 7vh;
    font-size: 1.5rem;
    color: white;
    gap: 1vh;
    background-color: #101820;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`