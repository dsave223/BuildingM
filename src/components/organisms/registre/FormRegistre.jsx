import styled from 'styled-components'
import WrapperSubtitle from '../../molecule/WrapperSubtitle';
import WrapperInput from '../../molecule/WrapperInput';
import ContainerButton from '../../molecule/ContainerButton';
import WrapperText from '../../molecule/WrapperText';

function FormRegistre({subtitleOne, subtitleTwo, typeName, typeEmail, typePhone, typePassword, placeholderName, placeholderEmail, placeholderPhone, placeholderPassword, nameUser, nameEmail, namePhone, namePassword, onSubmit, onChange, type, message, text, textLgn, textLinkLgn, toLgn}) {
    return ( 
        <Formregistre onSubmit={onSubmit}>
            <ContentTitle>
                <WrapperSubtitle subtitleOne={subtitleOne} subtitleTwo={subtitleTwo} subTitleLogin/>
            </ContentTitle>
            <ContentWrapper>
                <WrapperInput type={typeName} placeholder={placeholderName} onChange={onChange} name={nameUser} formLogin iptLogin styled/>
                <WrapperInput type={typeEmail} placeholder={placeholderEmail} onChange={onChange} name={nameEmail} formLogin iptLogin inputTop/>
                <WrapperInput type={typePhone} placeholder={placeholderPhone} onChange={onChange} name={namePhone} formLogin iptLogin inputTop/>
                <WrapperInput type={typePassword} placeholder={placeholderPassword} onChange={onChange} name={namePassword} formLogin iptLogin inputTop/>
                <MessageContent>
                    {message}
                </MessageContent>
            </ContentWrapper>
            <ContentButton>
                <ContainerButton type={type} text={text} btnlogin formLogin/>
                <WrapperText text={textLgn} textLink={textLinkLgn} to={toLgn}/>
            </ContentButton>
        </Formregistre>
     );
}

export default FormRegistre;

const Formregistre = styled.form`
    background-color: #FFA500;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContentTitle = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
    
const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;
`

const ContentButton = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    gap: 2vh;
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