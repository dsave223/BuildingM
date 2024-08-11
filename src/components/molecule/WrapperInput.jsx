import styled from 'styled-components'
import Input from '../atoms/Input';

function WrapperInput({type, placeholder, name, onChange, formLogin, iptLogin, inputBottom, inputTop, iptsetting}) {
    return ( 
        <WI $formLogin={formLogin} $inputBottom={inputBottom} $inputTop={inputTop}>
            <Input type={type} placeholder={placeholder} name={name} onChange={onChange} iptLogin={iptLogin} iptsetting={iptsetting}/>
        </WI>
     );
}

export default WrapperInput;

const WI = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.$formLogin &&`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65%;
        height: 22%;
        display: flex;
        flex-direction: colum;
        overflow:hidden;
    `}
    ${props => props.$inputBottom &&`
        margin: 0 0 2% 0;
    `}
    ${props => props.$inputTop &&`
        margin: 2% 0 0 0;
    `}
`;