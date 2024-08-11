//Importaciones para el funcionamiento del sistema
import styled from "styled-components";
import { useState } from "react";
//componentes
import ContainerButton from "../molecule/ContainerButton";
import ContainerImage from "../molecule/ContainerImage";

function Header({ showButtomExit, typeone, typetwo, typethree, typefour, src, alt, logohome, iconEng, iconTmp, iconCnfg, iconExit, iconbtn, textEng, textTmp, textCnfg, textExit, onClicksectionone, onClicksectiontwo, onClicksectionthree, onClicksectionfour, headerMenu, btnheader}) {

    return ( 
        <Menu>
            <ContainerSistem>
                <ContainerImage src={src} alt={alt} logohome={logohome} imghome/>
            </ContainerSistem>
            { showButtomExit == true && (
                <>
                    <ContainerButtomCenter>
                    <ContainerButton type={typeone} icon={iconEng} text={textEng} onclick={onClicksectionone} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    <ContainerButton type={typetwo} icon={iconTmp} text={textTmp} onclick={onClicksectiontwo} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    <ContainerButton type={typethree} icon={iconCnfg} text={textCnfg} onclick={onClicksectionthree} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    </ContainerButtomCenter>
                
                    <ContainerButtomExit>
                        <ContainerButton type={typefour} icon={iconExit} text={textExit} onclick={onClicksectionfour} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    </ContainerButtomExit>
                </>
            )}
            { showButtomExit == false && (
                <>
                    <ContainerButtomCenter>
                    <ContainerButton type={typeone} icon={iconEng} text={textEng} onclick={onClicksectionone} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    <ContainerButton type={typetwo} icon={iconTmp} text={textTmp} onclick={onClicksectiontwo} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    <ContainerButton type={typethree} icon={iconCnfg} text={textCnfg} onclick={onClicksectionthree} headerMenu={headerMenu} btnheader={btnheader} contentbtn iconbtn={iconbtn}/>
                    </ContainerButtomCenter>
                </>
            )}
        </Menu>
     );
}

export default Header;

const Menu = styled.header`
    background-color: #101820;
    width: 13%;
    height: 100%;
    overflow:hidden;
    margin: 0;
    padding: 0;
    gap: 0;
    overflow: hidden;
`

const ContainerSistem = styled.div`
    width: 100%;
    height: 25%;
    overflow: hidden;
`

const ContainerButtomCenter = styled.div`
    width: 100%;
    height: 55%;
`

const ContainerButtomExit = styled.div`
    width: 100%;
    height: 20%;
`

//<ContainerButton icon={iconCB} text={textCB} onclick={() => onclick('aire')} headerMenu btnheader/>