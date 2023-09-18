import React,{useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectCoverflow } from 'swiper/modules';
import"swiper/css/bundle"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import styled from "styled-components";
import { Imagem } from "..";

import image1 from "./fotos/foto1.jpg";
import image2 from "./fotos/foto2.jpg";
import image3 from "./fotos/foto3.jpg";
import image4 from "./fotos/foto4.jpg";
import image5 from "./fotos/foto5.jpg";
import image6 from "./fotos/foto6.jpg";
import image7 from "./fotos/foto7.jpg";
import image8 from "./fotos/foto8.jpg";
import image9 from "./fotos/foto9.jpg";
import image10 from "./fotos/foto10.jpg";
import image11 from "./fotos/foto11.jpg";

const Colecao = [image2,image1,image3,image4,image5,image6,image7,image8,image9,image10,image11];
const Conteiner = styled.div`
display: flex;
width: 60%;
height: 100%;
`


 export const CarouselPaginaInicial = ( ) => {
  const screenSize = 400; 

  const slidesPerView = window.innerWidth < screenSize ? 1 : 3;
  const spaceBetween = window.innerWidth < screenSize ? 10 : 30
     return (
      <Conteiner>
      <Swiper
      modules={[Navigation,Pagination,Autoplay,EffectCoverflow]}
      spaceBetween={spaceBetween} 
      slidesPerView={slidesPerView} 
      autoplay={{delay:5000}}
      loop={true}
      
    >
      {Colecao.map((slide, index) => (
        <SwiperSlide key={index}>
          <Imagem src={slide} alt={`Slide ${index}`} />
        </SwiperSlide>
      
      ))}
    </Swiper>
    </Conteiner>  
    );
  };
 
