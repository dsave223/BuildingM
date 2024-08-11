import styled from "styled-components";
import io from 'socket.io-client'
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import {LiaTemperatureHighSolid} from "react-icons/lia"
import {AiFillSetting, AiFillCaretDown} from "react-icons/ai"
import {IoExit} from "react-icons/io5"
import { BsTable, BsFillLightningFill, BsFillLightningChargeFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { FaTemperatureFull } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { RiCelsiusFill } from "react-icons/ri";
import { RxTriangleDown } from "react-icons/rx";
import { MdAir, MdEnergySavingsLeaf } from "react-icons/md";
import { PiLightningAFill } from "react-icons/pi";
import { SiLightning } from "react-icons/si";
import Header from "../organisms/Header";
import ButtonsContent from "../organisms/home/ButtonsContent";
import GraphDynamic from "../organisms/home/GraphDynamic";
import GraphDashedDynamic from "../organisms/home/GraphDashedDynamic";
import ContentDiv from "../organisms/home/ContentDiv";
import Table from "../organisms/home/Table";
import Logo from '../../assets/BMLogo.svg';

function TemplateHome({}) {
    const [selectedSection, setSelectedSection] = useState ('energia');
    const [temperature, setTemperature] = useState(0);
    const [temperatureTable, setTemperatureTable] = useState([]);
    const [pivIntensity, setPivIntensity] = useState(0);
    const [pivVoltage, setPivVoltage] = useState(0);
    const [pivPower, setPivPower] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [costo, setCosto] = useState(0);
    const [probabilidad, setProbabilidad] = useState(0);
    const [consumoTable, setConsumoTable] = useState([]);
    const [latestVoltage, setLatestVoltage] = useState(0);
    const [latestIntensity, setLatestIntensity] = useState(0);
    const [latestPower, setLatestPower] = useState(0);
    const navigate = useNavigate();

    const handleClick = (section) => {
      setSelectedSection(section);
    };

    const handleNavigate = () => {
        navigate('/setting');
    }

    const handleButtonClick = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const socket = io('');
        socket.on('datos', (data) => {
        console.log('Datos recibidos:', data);
        setTemperature(data.temperature);
        setTemperatureTable(data.temperatureTable);
        setPivIntensity(data.intensity);
        setPivVoltage(data.voltage);
        setPivPower(data.power);
        setConsumo(data.consumo);
        setCosto(data.costo);
        setProbabilidad(data.probabilidad);
        setConsumoTable(data.consumoTable)
        setLatestVoltage(data.latestVoltage);
        setLatestIntensity(data.latestIntensity);
        setLatestPower(data.latestPower);
        });
        return () => socket.disconnect();
    }, []);

    const columnsenergy = [
        {
            name: 'Consumo',
            selector: (row) => row.consumo,
            sortable: true,
        },
        {
            name: 'Costo',
            selector: (row) => row.costo,
            sortable: true,
        },
        {
            name: 'Hora',
            selector: (row) => row.hora,
            sortable: true,
        },
        {
            name: 'Fecha',
            selector: (row) => row.fecha,
            sortable: true,
        },
    ]

    const columnstemperature = [
        {
            name: 'Grados celcius',
            selector: (row) => row.grados,
            sortable: true,
        },
        {
            name: 'Humedad',
            selector: (row) => row.humedad,
            sortable: true,
        },
        {
            name: 'Hora',
            selector: (row) => row.hora,
            sortable: true,
        },
        {
            name: 'Fecha',
            selector: (row) => row.fecha,
            sortable: true,
        },
    ]

    return ( 
        <Templatehome>
            <Header
                src={Logo} alt='Logo de la empresa'
                iconEng={<BsFillLightningChargeFill/>}
                iconTmp={<LiaTemperatureHighSolid/>}
                iconCnfg={<AiFillSetting/>}
                iconCB={<MdAir/>}
                iconExit={<IoExit/>}
                textEng='Energia'
                textTmp='Temperatura'
                textCnfg='Ajustes'
                textCB='Aire acondicionado'
                textExit='Cesar Sesion'
                onClicksectionone={() => handleClick('energia')}
                onClicksectiontwo={() => handleClick('temperatura')}
                onClicksectionthree={handleNavigate}
                onClicksectionfour={''}
                typeone='button'
                typetwo='button'
                typethree='button'
                typefour='button'
                showButtomExit={true}
                headerMenu
                iconbtn
                btnheader
                titleSistem
                logohome
                />
            <ScrollView>
                {selectedSection == 'energia' &&(
                    <EnergyView>
                        {
                            <>
                                <SectionButton>
                                    <ButtonsContent
                                        icon={<GoGraph/>}
                                        iconCnd={<FaRegCalendarAlt/>}
                                        iconTb={<BsTable/>}
                                        unit={<RxTriangleDown/>}
                                        iconTm={<IoIosTime/>}
                                        iconGrahpOne={<GoGraph/>}
                                        iconGrahpTwo={<GoGraph/>}
                                        icondeployment={<AiFillCaretDown />}
                                        typemenu='button'
                                        typedropdown='button'
                                        typegraphone='button'
                                        typegraphtwo='button'
                                        onclickGrahpOne={() => handleButtonClick('grahpPIV')}
                                        onclickGrahpTwo={() => handleButtonClick('grahpCE')}
                                        onclickdate=''
                                        onclicktable={() => handleButtonClick('tableEnergy')}
                                        typedate='button'
                                        typetable='button'
                                        text='Graficas'
                                        textCnd='Calendario'
                                        textTb='Tabla'
                                        textTm='00:10:00'
                                        textOne='Grafica de Potencia (P.I.V.)'
                                        textTwo='Grafica de Consumo de Energia'
                                        buttoncontent
                                        buttonview
                                        buttongrahpview
                                        showOpcion={false}
                                    />
                                </SectionButton>
                                
                                <Section $sectiontop>
                                    <GraphDashedDynamic
                                        id='grahpPIV'
                                        title='Grafica P.I.V'
                                        name='P.I.V.'
                                        intensity={pivIntensity} 
                                        voltage={pivVoltage} 
                                        power={pivPower}
                                        namelineone='Voltaje'
                                        namelinetwo='Intensidad'
                                        namelinethree='Potencia'
                                    />
                                    <ContentDiv
                                        textvlt='Voltaje:'
                                        textitng='Intensidad:'
                                        textpwr='Potencia:'
                                        txtvlt={latestVoltage}
                                        txtitng={latestIntensity}
                                        txtpwr={latestPower}
                                        unitvlt='V'
                                        unititng='A'
                                        unitpwr='W'
                                        iconP={<SiLightning/>}
                                        iconI={<PiLightningAFill/>}
                                        iconV={<BsFillLightningFill/>}
                                    />
                                </Section>
                                <Section $section>
                                    <GraphDynamic 
                                        id='grahpCE'
                                        title='Grafica de Consumo de Energia' 
                                        dataserie={consumo}
                                        seriesname='Consumo' 
                                        name="Consumo de energia" 
                                        unit="kWh"
                                        color='#2ECC71'
                                    />
                                    <ContentDiv
                                        textvlt='Consumo:'
                                        textitng='Costo:'
                                        textpwr='Probabilidad:'
                                        txtvlt={consumo}
                                        txtitng={costo}
                                        txtpwr={probabilidad}
                                        unitvlt='kWh'
                                        unititng='$'
                                        unitpwr='%'
                                        iconP={<MdEnergySavingsLeaf color="#2ECC71"/>}
                                        iconI={<MdEnergySavingsLeaf color="#2ECC71"/>}
                                        iconV={<MdEnergySavingsLeaf color="#2ECC71"/>}
                                    />
                                </Section>
                                <Section $sectiontable>
                                    <Table 
                                        title='Tabla de consumo de energia'
                                        color='orange'
                                        data={consumoTable}
                                        columns={columnsenergy}
                                        id='tableEnergy'
                                    />
                                </Section>
                            </>
                            
                        }
                    </EnergyView>
                )}

                {selectedSection == 'temperatura' &&(
                    <TemperatureView>
                        {
                            <>
                                <SectionButton>
                                    <ButtonsContent
                                        icon={<FaTemperatureFull/>}
                                        unit={<RiCelsiusFill/>}
                                        iconCnd={<FaRegCalendarAlt/>}
                                        iconTb={<BsTable/>}
                                        iconTm={<IoIosTime/>}
                                        typedate='button'
                                        typetable='button'
                                        text='30'
                                        onclickdate=''
                                        onclicktable={() => handleButtonClick('tableTemperature')}
                                        textCnd='Calendario'
                                        textTb='Tabla'
                                        textTm='5'
                                        buttoncontent
                                        buttonview
                                        dataunit
                                        showOpcion={true}
                                    />
                                </SectionButton>
                                <Section $sectiontop>
                                    <GraphDynamic 
                                        title='Grafica de Temperatura' 
                                        dataserie={temperature}
                                        seriesname='Grados' 
                                        name="Temperatura" 
                                        unit="ºC"
                                        dynamicTmp
                                        color='#00FFFF'
                                    />
                                </Section>
                                <Section $sectiontable>
                                    <Table
                                        id='tableTemperature'
                                        title='Tabla de temperatura'
                                        color='#44bba9'
                                        data={temperatureTable} 
                                        columns={columnstemperature} 
                                        colorborder
                                        />
                                </Section>
                            </>
                        }
                    </TemperatureView>
                )}
            </ScrollView>
        </Templatehome>
     );
}

export default TemplateHome;

const Templatehome = styled.div`
    background-color: #000000;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
`

const ScrollView = styled.div`
    background-color: white;
    width: 87%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

const EnergyView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const TemperatureView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SectionButton = styled.div`
    width: 100%;
    height: 12%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Section = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
    
    ${props => props.$section &&`
        display: flex;
        flex-direction: row-reverse;
    `}
    ${props => props.$sectiontop &&`
        margin-top: 2%;
    `}
    ${props => props.$sectiontable &&`
        margin-top: 2%;
        height: 70%;
        display: flex;
        flex-direction: column;
    `}
`