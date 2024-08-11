import styled from 'styled-components'
import SubTitle from '../atoms/SubTitle';

function WrapperSubtitle({subtitleOne, subtitleTwo, subTitleLogin}) {
    return ( 
        <Wrappersubtitle>
            <SubOne>
                <SubTitle title={subtitleOne} subTitleLogin={subTitleLogin}/>
            </SubOne>
            <SubTwo>
                <SubTitle title={subtitleTwo} subTitleLogin={subTitleLogin}/>
            </SubTwo>
        </Wrappersubtitle>
     );
}

export default WrapperSubtitle;

const Wrappersubtitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1vh;
    height: 20vh;
`;

const SubOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8vh;
`;

const SubTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6vh;
`;