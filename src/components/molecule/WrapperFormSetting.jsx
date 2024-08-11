import styled from "styled-components";

import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

function WrapperFormSetting({label, onChange, typeinput, typebuttom, placeholder, name, icon, text, txt, btnsetting, iptsetting, labelsetting, textsetting}) {

    return ( 
        <Wrapper>
            <ContentLabel>
                <Label label={label} labelsetting={labelsetting}/>
            </ContentLabel>
            <Content>
                <Input type={typeinput} placeholder={placeholder} name={name} onChange={onChange} iptsetting={iptsetting}/>
                <Button type={typebuttom} icon={icon} text={text} btnsetting={btnsetting}/>
            </Content>
            <ContentText>
                <Text text={txt} textsetting={textsetting}/>
            </ContentText>
        </Wrapper>
     );
}

export default WrapperFormSetting;

const Wrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Content = styled.div`
    width: 100%;
    gap: 5vh;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ContentLabel = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const ContentText = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: white;
`