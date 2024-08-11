import styled from 'styled-components'
import { Formik } from 'formik';

function Input({type, placeholder, name, onChange, iptLogin, iptsetting}) {
    return ( 
        <Ipt type={type} placeholder={placeholder} onChange={onChange} name={name} $iptsetting={iptsetting} $iptLogin={iptLogin} />
     );
}

export default Input;

const Ipt = styled.input`
    
    ${props => props.$iptLogin &&`
        width: 100%;
        border-radius: 1.5vh;
        height: 6vh;
        border: 0;
        text-align: left;
        text-indent: 2%;
        font-family: 'Rubik', sans-serif;
    `}
    ${props => props.$iptsetting &&`
        width: 45%;
        border-radius: 1.5vh;
        height: 5.5vh;
        border: 0;
        text-align: left;
        text-indent: 2%;
        font-family: 'Rubik', sans-serif;
    `}
`;