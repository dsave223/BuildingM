import styled from "styled-components";
import TableContent from "../../molecule/Tablecontent";

function Table({columns, data, title, color, colorborder, id}) {
    return ( 
        <TableContainer $colorborder={colorborder} id={id}>
            <TableContent title={title} color={color} columns={columns} data={data}/>
        </TableContainer>
     );
}

export default Table;

const TableContainer = styled.div`
    width: 96%;
    height: 100%;
    margin-left: 2%;
    margin-bottom: 2%;
    margin-right: 2%;
    overflow: hidden;
    border: 1px solid orange;
    ${props => props.$colorborder &&`
        border: 1px solid #44bba9;
    `}
`
