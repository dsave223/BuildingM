import styled from "styled-components";
import { useState } from "react";

import ContainerButton from "../../molecule/ContainerButton";
import ContainerData from "../../molecule/ContainerData";
import MenuDropdown from "../../molecule/MenuDropdown";

function ButtonsContent({ typemenu, typedropdown, typegraphone, typegraphtwo, typedate, typetable, onclickdate, onclicktable, icon, iconCnd, iconTb, iconTm, iconGrahpOne, iconGrahpTwo, icondeployment, unit, text, textCnd, textTb, textTm, textOne, textTwo, onclickGrahpOne, onclickGrahpTwo, buttoncontent, buttonview, dataunit, buttongrahpview, showOpcion, onMenuToggle}) {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (onMenuToggle) {
            onMenuToggle(!menuOpen);
        }
    };

    return ( 
        <NavbarMenu $buttoncontent={buttoncontent}>
            {showOpcion == false && (
                <MenuView>
                    <ContainerButton
                        icon={icon} 
                        unit={unit}
                        text={text}
                        buttongrahpview={buttongrahpview}
                        onclick={toggleMenu}
                        menuOpen={menuOpen}
                        type={typemenu}
                        icondeployment={icondeployment}
                    />
                    <MenuDropdown
                        onclickGrahpOne={onclickGrahpOne}
                        onclickGrahpTwo={onclickGrahpTwo}
                        iconGrahpOne={iconGrahpOne}
                        iconGrahpTwo={iconGrahpTwo}
                        textOne={textOne}
                        textTwo={textTwo}
                        onclickOn={toggleMenu}
                        text={text}
                        menuOpen={menuOpen}
                        icondeployment={icondeployment}
                        typedropdown={typedropdown}
                        typegraphone={typegraphone}
                        typegraphtwo={typegraphtwo}    
                    />
                </MenuView>
            )}

            {showOpcion == true && (
                <DataViewContent>
                    <ContainerData icon={icon} text={text} unit={unit} dataunit={dataunit}/>
                </DataViewContent>
            )}

            <ContainerButton type={typedate} onclick={onclickdate} icon={iconCnd} text={textCnd} buttonview={buttonview} btnview/>
            <ContainerButton type={typetable} onclick={onclicktable} icon={iconTb} text={textTb} buttonview={buttonview} btnview/>
            <DataViewContent>
                <ContainerData icon={iconTm} text={textTm} dataunit/>
            </DataViewContent>
        </NavbarMenu>
     );
}

export default ButtonsContent;

const NavbarMenu = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    color: white;
    width: 100%;
    height: 12vh;
    position: static;
`

const DataViewContent = styled.div`
    width: 25%;
    height: 12vh;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuView = styled.div`
    width: 25%;
    height: 12vh;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`