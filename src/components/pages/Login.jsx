import TemplateLogin from "../templates/TemplateLogin";

import Image from '../../assets/imagenes/Imagen.jpg'
import Logo from '../../assets/BMLogo.svg'

function Login() {
    return ( 
        <TemplateLogin
            placeholderEmail='Ingrese su Correo'
            placeholderPassword='Ingrese su contraseña'
            srcImg={Image} srcSistem={Logo}
        />
     );
}

export default Login;