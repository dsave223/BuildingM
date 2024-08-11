import styled from 'styled-components'
import Button from '../atoms/Button';

function ContainerButton({icon, type,  icondeployment, onclick, text, btnlogin, formLogin, headerMenu, buttonview, btnheader, btnview, buttongrahpview, menuOpen, contentbtn, iconbtn, btnsetting}) {
    return ( 
        <Grupbutton $formLogin={formLogin} $headerMenu={headerMenu} $buttonview={buttonview} $buttongrahpview={buttongrahpview}>
            <Button icon={icon} type={type} onclick={onclick} text={text} btnlogin={btnlogin} btnheader={btnheader} btnview={btnview} menuOpen={menuOpen} icondeployment={icondeployment} iconbtn={iconbtn} contentbtn={contentbtn} btnsetting={btnsetting}/>
        </Grupbutton>
     );
}

export default ContainerButton;

const Grupbutton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.$formLogin &&`
        width: 65%;
        height: 25%;
        display: flex;
        justify-content: center;
        margin: 6% 0 0 0;
        align-items: center;
        overflow:hidden;
    `}
    ${props => props.$headerMenu &&`
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
    `}
    ${props => props.$buttonview &&`
        width: 25%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
    `}
    ${props => props.$buttongrahpview &&`
        width: 100%;
        height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
    `}
`;