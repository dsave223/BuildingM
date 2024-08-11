import styled from 'styled-components'

function Button({icon, icondeployment, onclick, text, btnlogin, btnheader, btnview, btndropdown, menuOpen, iconbtn, btnsetting, type}) {
    return ( 
        <Btn type={type} onClick={onclick} $btnsetting={btnsetting} $btnLogin={btnlogin} $btnheader={btnheader} $btnview={btnview} $menuOpen={menuOpen} $btndropdown={btndropdown}><IconContent $icon={iconbtn}>{icon}</IconContent><TxtContent>{text}</TxtContent>{icondeployment}</Btn>
     );
}

export default Button;

const Btn = styled.button`
    ${props => props.$menuOpen==true && `
        width: 90%;
        posi
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vh;
        border-radius: 2vh;
        height: 7vh;
        font-size: 1.2rem;
        font-family: 'Inter', sans-serif;
        color: white;
        cursor:pointer;
        z-index: 6;
        background-color: #FFA500; // Cambia el color del botón cuando el menú está abierto
    `}
    ${props => props.$menuOpen==false && `
        width: 90%;
        border: 0;
        border-radius: 2vh;
        height: 7vh;
        display: flex;
        gap: 2vh;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        background-color: #101820;
        font-family: 'Inter', sans-serif;
        color: white;
        z-index: 6;
        cursor:pointer;
        background-color: #101820;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `}
    ${props => props.$btnLogin &&`
        width: 100%;
        border: 0;
        border-radius: 10vh;
        height: 7vh;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
        color: white;
        background-color: #101820;
        font-size: x-large;
        font-weight: 900;
        cursor:pointer;
    `}
    ${props => props.$btnheader&&`
        width: 90%;
        border: 0;
        border-radius: 2vh;
        height: 7vh;
        align-items: center;
        justify-content: left;
        font-family: 'Inter', sans-serif;
        color: white;
        flex-direction: row;
        display: flex;
        background-color: #101820;
        cursor:pointer;
        gap: 2vh;
        &:hover {
            color: black;
            background-color: white;
        }
    `}
    ${props => props.$btnview&&`
        width: 90%;
        border: 0;
        border-radius: 2vh;
        height: 7vh;
        font-size: 1.2rem;
        align-items: center;
        justify-content: center;
        background-color: #101820;
        font-family: 'Inter', sans-serif;
        color: white;
        display: flex;
        gap: 2vh;
        cursor:pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    `}
    ${props => props.$btndropdown&&`
        width: 100%;
        border: 0;
        border-radius: 2vh;
        height: 7vh;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        color: black;
        align-items: center;
        justify-content: center;
        text-align: center;
        display: flex;
        background-color: #B4E9F5;
        cursor:pointer;
    `}
    ${props => props.$btnsetting &&`
        width: 45%;
        border: 0;
        gap: 2vh;
        border-radius: 2vh;
        height: 6vh;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
        color: white;
        display: flex;
        background-color: #101820;
        font-size: 1.3rem;
        cursor:pointer;
    `}
`;

const TxtContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const IconContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.$icon &&`
        margin: 0 0 0 8%;
        font-size: 1.6rem;
    `}
`
