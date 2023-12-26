import React, { useEffect } from 'react';
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import styles from './Carousel.module.css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

function Carousel({data, renderComponent}){
    return (
        <div className={styles.wrapper}>
           <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        spaceBetween={40}
        modules={[Navigation]}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data && data.map((element, index) => (
          <SwiperSlide key={element.id}>{renderComponent(element)}</SwiperSlide>
        ))}
      </Swiper>
        </div>
    )
}

export default Carousel;