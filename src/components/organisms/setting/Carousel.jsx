import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from '../../atoms/Image';
import ContentInfo from '../../molecule/ContentInfo';

export default function Carousel({title, text, src1, src2, src3, src4, src5, src6, src7, src8, src9, alt}) {
  return (
    <Constent>
        <ContentImage>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={src1} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src2} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src3} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src4} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src5} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src6} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src7} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src8} alt={alt} carousel/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={src9} alt={alt} carousel/>
                </SwiperSlide>
            </Swiper>
        </ContentImage>
        <ContentInfo title={title} text={text} inf/>
    </Constent>
  );
}

const Constent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const ContentImage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: static;
    z-index: 1;
    -webkit-filter: brightness(60%);
    filter: brightness(60%);
`