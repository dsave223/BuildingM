import styled from 'styled-components'
import DataTable from 'react-data-table-component'

function TableContent({data, columns, color, title}) {
    const customStyles = {
        headRow: {
            style: {
                backgroundColor: color,
            },
        },
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    
    return (
        <Content>
            <DataTable
                columns={columns}
                data={data}
                title={title}
                paginationComponentOptions={paginationComponentOptions}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='400px'
                theme="solarized"
                customStyles={customStyles}
            />
        </Content>
    );
}

export default TableContent;

const Content = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
