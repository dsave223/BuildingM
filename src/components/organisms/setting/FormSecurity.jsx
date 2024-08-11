import styled from 'styled-components'

import WrapperInput from '../../molecule/WrapperInput';
import ContentInfo from '../../molecule/ContentInfo';
import ContainerButton from '../../molecule/ContainerButton';

function FormSecurity({onSubmit, onChange, icon, type, text, titeFirst, titeSecond, titeThird, txtFirst, txtSecond, txtThird, typeFirst, typeSecond, typeThird, placeholderFirst, placeholderSecond, placeholderThird, nameFirst, nameSecond, nameThird, message}) {
    return ( 
        <Content>
            <Form onSubmit={onSubmit}>
                <ContentInfo title={titeFirst} text={txtFirst}/>
                <WrapperInput type={typeFirst} placeholder={placeholderFirst} name={nameFirst} onChange={onChange} iptsetting/>
                <ContainerButton icon={icon} type={type} text={text} btnsetting/>
            </Form>

            <Form onSubmit={onSubmit}>
                <ContentInfo title={titeSecond} text={txtSecond}/>
                <WrapperInput type={typeSecond} placeholder={placeholderSecond} name={nameSecond} onChange={onChange} iptsetting/>
                <ContainerButton icon={icon} type={type} text={text} btnsetting/>
            </Form>

            <Form onSubmit={onSubmit}>
                <ContentInfo title={titeThird} text={txtThird}/>
                <WrapperInput type={typeThird} placeholder={placeholderThird} name={nameThird} onChange={onChange} iptsetting/>
                <ContainerButton icon={icon} type={type} text={text} btnsetting/>
            </Form>

            <MessageContent>
                    {message}
            </MessageContent>

        </Content>
     );
}

export default FormSecurity;

const Content = styled.div`
    height: 95%;
    width: 90%;
    background-color: orange;
    overflow: hidden;
    border-radius: 7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width: 100%;
    height: 30vh;
    gap: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MessageContent = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    font-family: 'Rubik', sans-serif;
    font-size: small;
    font-weight: 800;
    font-style: normal;
` 