import styled from "styled-components";
import Button from "../atoms/Button";

function MenuDropdown ({typedropdown, typegraphone, typegraphtwo, menuOpen, onclickGrahpOne, onclickOn, onclickGrahpTwo, iconGrahpOne, iconGrahpTwo, icondeployment, textOne, text, textTwo}) {
  
    return ( 
        <Menu open={menuOpen}>
          <ContentItem >
            <Button type={typedropdown} onclick={onclickOn} icon={iconGrahpOne} text={text} menuOpen={menuOpen} icondeployment={icondeployment}/>
          </ContentItem>
          <ContentItem>
            <Button type={typegraphone} onclick={onclickGrahpOne} icon={iconGrahpOne} text={textOne} btndropdown/>
          </ContentItem>
          <ContentItem>
            <Button type={typegraphtwo} onclick={onclickGrahpTwo} icon={iconGrahpTwo} text={textTwo} btndropdown/>
          </ContentItem>
        </Menu>
     );
}

export default MenuDropdown;

const Menu = styled.div`
  position: static;
  flex-direction: column;
  width: 90%;
  height: 27vh;
  justify-content: center;
  align-items: center;
  margin: 46% 0 0 0;
  display: ${props => (props.open ? 'flex' : 'none')};
  background-color: #101820;
  border-radius: 2vh;
  color: white;
  z-index: 1;
`;

const ContentItem = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  border-radius: 2.5vh;
  margin: 3%;
`