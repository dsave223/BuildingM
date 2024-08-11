import styled from 'styled-components'
import WrapperSubtitle from '../../molecule/WrapperSubtitle';
import WrapperInput from '../../molecule/WrapperInput';
import ContainerButton from '../../molecule/ContainerButton';
import WrapperText from '../../molecule/WrapperText';

function FormLogin({type, onSubmit, subtitleOne, subtitleTwo, typeEmail, typePassword, placeholderEmail, placeholderPassword, onChange, nameEmail, namePassword, message, text, textPwd, textRgt, textLinkPwd, textLinkRgt, toPwd, toRgt}) {
    
    return ( 
        <Formlogin onSubmit={onSubmit}>
            <ContentTitle>
                <WrapperSubtitle subtitleOne={subtitleOne} subtitleTwo={subtitleTwo} subTitleLogin/>
            </ContentTitle>
            <ContentWrapper>
                <WrapperInput type={typeEmail} placeholder={placeholderEmail} name={nameEmail} onChange={onChange} formLogin iptLogin styled inputBottom/>
                <WrapperInput type={typePassword} placeholder={placeholderPassword} name={namePassword} onChange={onChange} formLogin iptLogin inputTop/>
                <WrapperText text={textPwd} textLink={textLinkPwd} to={toPwd}/>
                <MessageContent>
                    {message}
                </MessageContent>
            </ContentWrapper>
            <ContentButton>
                <ContainerButton type={type} text={text} btnlogin formLogin/>
                <WrapperText text={textRgt} textLink={textLinkRgt} to={toRgt}/>
            </ContentButton>
        </Formlogin>
     );
}

export default FormLogin;

const Formlogin = styled.form`
    background-color: #4BA1FC;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentTitle = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
`
    
const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vh;
    height: 40vh;
`

const ContentButton = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    gap: 1vh;
    flex-direction: column;
    align-items: center;
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

