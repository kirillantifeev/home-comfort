import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Delivery.module.css'
import { faqList } from '../Accordion/AccordionMockData';
import Accordion from '../Accordion/Accordion';

const dataSlider = ['slider_1', 'slider_2', 'slider_3', 'slider_4', 'slider_5', 'slider_6']

export default function Delivery() {

  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
    <h2 ref={titleRef} className={styles.title}>Как может выглядеть ваша квартира с нашей мебелью</h2>
    <p className={styles.text}>Ниже представлены примеры декора квартир с использованием мебели нашего магазина. Вы можете выбрать подходящий для вас дизайн, чтобы определиться со стилем нужных товаров.</p>
    <Swiper className={styles.slider}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {dataSlider.map((el, index) => (
        <SwiperSlide key={index}><img src={`/img/${el}.jpg`} alt='мебель в квартирах покупателей'/></SwiperSlide>
      ))}
      
      
    </Swiper>
    <h2 className={styles.titleAccordion}>Часто задаваемые вопросы</h2>
    <Accordion faqList={faqList}/>
    </>
  );
}