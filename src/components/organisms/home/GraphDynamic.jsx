import styled from "styled-components";

import ChartRealTime from "../../molecule/graph/ChartRealTime";

function Graph({id, title, dataserie, seriesname, name, unit, dynamicTmp, color}) {
    return ( 
        <ContentGraph $dynamicTmp={dynamicTmp} id={id}>
            <ChartRealTime title={title} dataserie={dataserie} seriesname={seriesname} name={name} unit={unit} color={color}/>
        </ContentGraph>
     );
}

export default Graph;

const ContentGraph = styled.div`
    width: 70%;
    height: 100%;
    background-color: #e3e3e368;
    overflow: hidden;
    border-radius: 2vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: 0 0 0 2%;
    ${props => props.$dynamicTmp &&`
        width: 96%;
        height: 100%;
        background-color: #e3e3e368;
        overflow: hidden;
        border-radius: 2vh;
        margin: 2%;
    `}
`

