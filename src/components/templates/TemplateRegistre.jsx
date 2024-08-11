import styled from 'styled-components';
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import FormRegistre from '../organisms/registre/FormRegistre';
import DivisionSistem from '../organisms/DivisionSistem';

function TemplateRegistre({placeholderName, placeholderEmail, placeholderPhone, placeholderPassword, srcImg, srcSistem}) {
  const [message, setMessage] = useState('');

  const submitForm = async (values) => {
      try {
        if (!values.name || !values.email || !values.phone || !values.password) {
          setMessage('Campos incompletos o incorrectos. Por favor, revise otra vez :(');
        } else {
          const response = await axios.post('http://34.206.91.255:3002/auth/register', values);
          setMessage('Formulario enviado con exito :)');
          console.log('Respuesta de API:', response.data);
        }
      } catch (error) {
        console.log('Error al enviar el formulario a la API:', error);
      }
  };

  const formik = useFormik({
      initialValues: {
        name : null,
        email: null,
        phone: null,
        password: null,
      },
      onSubmit: submitForm,
  });

  return ( 
    <Templateregistre>
        <FormRegistre
            subtitleOne='Bienvenido' subtitleTwo='Registrate Ahora!'
            typeName='text' placeholderName={placeholderName} nameUser='name'
            typeEmail='text' placeholderEmail={placeholderEmail} nameEmail='email'
            typePhone='tel' placeholderPhone={placeholderPhone} namePhone='phone'
            typePassword='password' placeholderPassword={placeholderPassword} namePassword='password'
            textLgn='Ya tienes cuenta' toLgn='/' textLinkLgn='Inicia Sesion' text='Registrate' 
            type='submit' onChange={formik.handleChange} onSubmit={formik.handleSubmit}
            message={message}
        />
        <DivisionSistem 
            srcImg={srcImg} altImg='Imagen de presentacion' srcSistem={srcSistem} altSistem='Logo de la aplicacion'
            title='Building Monitoring' image logo imgdvs backwards rgt
        />
    </Templateregistre>
  );
}

export default TemplateRegistre;

const Templateregistre = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
`;