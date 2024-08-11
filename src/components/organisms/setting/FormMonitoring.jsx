import styled from 'styled-components'

import WrapperFormSetting from '../../molecule/WrapperFormSetting';


function FormSettingMonitoring({typeinput, typebuttom, placeholder, onChange, onSubmit, name, label, htmlFor, icon, text, txt, btnsetting, iptsetting, labelsetting, textsetting}) {
    return ( 
        <Form onSubmit={onSubmit}>
            <WrapperFormSetting 
                icon={icon} 
                text={text} 
                onChange={onChange} 
                label={label} 
                htmlFor={htmlFor} 
                typeinput={typeinput} 
                typebuttom={typebuttom}
                name={name}
                txt={txt}
                placeholder={placeholder}
                btnsetting={btnsetting}
                iptsetting={iptsetting}
                labelsetting={labelsetting}
                textsetting={textsetting}
            />
        </Form>
     );
}

export default FormSettingMonitoring;

const Form = styled.form`
    height: 95%;
    width: 90%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7vh;
    background-color: #0e74ce;
`