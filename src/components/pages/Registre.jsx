import TemplateRegistre from '../templates/TemplateRegistre';

import Image from '../../assets/imagenes/Image.jpg'
import Logo from '../../assets/BMLogo.svg'

function Registre() {
    return ( 
        <TemplateRegistre
            placeholderName='Ingrese un Nombre'
            placeholderEmail='Ingrese su Correo'
            placeholderPhone='Ingrese un Numero Telefonico'
            placeholderPassword='Ingrese su contraseña'
            srcImg={Image} srcSistem={Logo}
        />
     );
}

export default Registre;