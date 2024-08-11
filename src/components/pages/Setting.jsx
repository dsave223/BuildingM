import TemplateSettings from "../templates/TemplateSettings";
import ImageCarousel1 from '../../assets/imagenes/Img13.jpg';
import ImageCarousel2 from '../../assets/imagenes/Img3.jpg';
import ImageCarousel3 from '../../assets/imagenes/Img14.jpg';
import ImageCarousel4 from '../../assets/imagenes/Img17.jpg';
import ImageCarousel5 from '../../assets/imagenes/Img5.jpg';
import ImageCarousel6 from '../../assets/imagenes/Img15.jpg';
import ImageCarousel7 from '../../assets/imagenes/Img7.jpg';
import ImageCarousel8 from '../../assets/imagenes/Img11.jpg';
import ImageCarousel9 from '../../assets/imagenes/Img9.jpg';

function Setting() {
    return ( 
        <TemplateSettings
            src1={ImageCarousel1} 
            src2={ImageCarousel2} 
            src3={ImageCarousel3}
            src4={ImageCarousel4}
            src5={ImageCarousel5}
            src6={ImageCarousel6}
            src7={ImageCarousel7}
            src8={ImageCarousel8}
            src9={ImageCarousel9}
        />
     );
}

export default Setting;