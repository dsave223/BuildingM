import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import { useFormik } from 'formik';
import FormMonitoring from '../organisms/setting/FormMonitoring';
import FormSecurity from '../organisms/setting/FormSecurity';
import Header from '../organisms/Header';
import Carousel from '../organisms/setting/Carousel';
import { FaArrowCircleLeft } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { RiSettings6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import Logo from '../../assets/BMLogo.svg';



function TemplateSettings({src1, src2, src3, src4, src5, src6, src7, src8, src9}) {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState ('security');
    const [message, setMessage] = useState('');
    
    const handleClick = (section) => {
        setSelectedSection(section);
    };

    const handleNavigate = () => {
        navigate('/home');
    }

    const submitForm = async (values) => {
        try {
          const dataToUpdate = Object.entries(values)
            .filter(([key, value]) => key !== 'setting' && value !== '')
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
      
          if (Object.keys(dataToUpdate).length === 0) {
            setMessage('No ha proporcionado ningún campo para actualizar.');
          } else {
            const response = await axios.post('http://34.206.91.255:3002/auth/configuracion/:id', dataToUpdate);
            console.log('Respuesta de API:', response.data);
            setMessage('¡Formulario enviado con éxito!');
          }
        } catch (error) {
          console.error('Error al enviar el formulario a la API:', error);
          setMessage('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
        }
    };
    
    const formik = useFormik ({
        initialValues: {
          setting: '',
          updateName: '', 
          updateEmail: '',
          updatePassword: '',
        },
        onSubmit: submitForm,
    });

    return ( 
        <Setting>
            <Header 
                src={Logo} alt='Logo' logohome
                iconEng={<FaArrowCircleLeft/>} textEng='Atras/regresar' 
                iconTmp={<RiSettings6Line/>} textTmp='Ajustes de monitoreo'
                iconCnfg={<TbLock/>} textCnfg='Seguridad'
                typeone='buttom' typetwo='buttom' typethree='buttom'
                onClicksectionone={handleNavigate}
                onClicksectiontwo={() => handleClick('monitoring')}
                onClicksectionthree={() => handleClick('security')}
                headerMenu btnheader iconbtn
                showButtomExit={false}
            />
            <Scroll>
                <ContentState>
                    { selectedSection == 'monitoring' && (
                        <Content>
                            <FormMonitoring 
                                label='Ingrese una hora o minuto para el tiempo de monitoreo:' 
                                onChange={formik.handleChange} 
                                placeholder='Ingrese algun tiempo'  
                                text='Cambiar'
                                txt='Podra modificar el tiempo de renderizado sera a su
                                    conveniencia, este es el tiempo en que se puede ver 
                                    los datos de la grafica de la vista de energia.
                                '
                                icon={<RiSettings6Line/>}
                                typeinput='number' 
                                typebuttom='submit'
                                onSubmit={formik.handleSubmit}
                                name='setting'
                                btnsetting
                                iptsetting
                                labelsetting
                                textsetting
                            />
                        </Content>
                    )}
                    { selectedSection == 'security' && (
                        <Content>
                            <FormSecurity
                                titeFirst='Actualizacion de Nombre'
                                titeSecond='Actualizacion de Correo Electronico'
                                titeThird='Actualizacion de Contrasea'
                                txtFirst={'Podra actualizar su nombre ' + ' o puede dedarr este campo vacio'}
                                txtSecond={'Podra actualizar su correo electronico ' + ' o puede dedarr este campo vacio'}
                                txtThird='Podra actualizar su contraseña por una nueva para mayor proteccion y seguridad de su cuenta'
                                text='Actualizar'
                                type='submit'
                                typeFirst='text'
                                typeSecond='email'
                                typeThird='password'
                                nameFirst='updateName'
                                nameSecond='updateEmail'
                                nameThird='updatePassword'
                                placeholderFirst='Ingrese un nuevo mobre de usuario'
                                placeholderSecond='Ingrese un nuevo Correo Electronico'
                                placeholderThird='Ingrese una nueva contraseña'
                                message={message}
                                onChange={formik.handleChange}
                                onSubmit={formik.handleSubmit}
                                icon={<RxUpdate/>}
                            />
                        </Content>
                    )}
                </ContentState>
                <ContentCarousel>
                    <Carousel 
                        title='Ajustes' 
                        text='Aqui podras administrar el sistema de monitoreo, como tu cuenta de usuario, para una mejor experiencia y facilidad de control.'
                        alt='Imagenes' 
                        src1={src1} 
                        src2={src2} 
                        src3={src3} 
                        src4={src4} 
                        src5={src5} 
                        src6={src6} 
                        src7={src7} 
                        src8={src8} 
                        src9={src9}
                    />
                </ContentCarousel>
            </Scroll>
        </Setting>
     );
}

export default TemplateSettings;

const Setting =  styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

const Scroll = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
`

const ContentState = styled.div`
    width: 70%;
    height: 100%;
    background-color: #E3E3E3;
`

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentCarousel = styled.div`
    width: 30%;
    height: 100%;
`