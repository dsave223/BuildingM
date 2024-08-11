import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import FormLogin from '../organisms/login/FormLogin';
import DivisionSistem from '../organisms/DivisionSistem';

function TemplateLogin({placeholderEmail, placeholderPassword, srcImg, srcSistem}) { 
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const submitForm = async (values) => {
    try {
      if (!values.email || !values.password) {
        setMessage('Campos incompletos o incorrectos. Por favor, revise otra vez :(');
      } else {
        const response = await axios.post('http://34.206.91.255:3002/auth/login', values);
        console.log('Respuesta de API:', response.data);
        setMessage('¡Formulario enviado con éxito!');
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al enviar el formulario a la API:', error);
    }
  };

  const formik = useFormik({
      initialValues: {
        email: null,
        password: null,
      },
      onSubmit: submitForm,
  });
    
  return ( 
    <Templatelogin>
      <FormLogin
        subtitleOne='Bienvenido' subtitleTwo='Inicia secion'
        typeEmail='text' placeholderEmail={placeholderEmail} nameEmail='email'
        typePassword='password' placeholderPassword={placeholderPassword} namePassword='password'
        textPwd='Olvidaste tu contraseña?' textRgt='No teiene cuenta' textLinkPwd='Puedes cambiarlo' textLinkRgt='Registrate ahora'
        toPwd='/' toRgt='/registre' text='Iniciar Sesion' message={message}
        type='submit' onSubmit={formik.handleSubmit} onChange={formik.handleChange}
      />
      <DivisionSistem 
        srcImg={srcImg} altImg='Imagen de presentacion' srcSistem={srcSistem} altSistem='Logo de la aplicacion'
        title='Building Monitoring' image logo imgdvs lg
      />
    </Templatelogin>
  );
}

export default TemplateLogin;

const Templatelogin = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
`;