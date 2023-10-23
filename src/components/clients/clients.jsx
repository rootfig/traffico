'use client'
import React from 'react';
import styles from '@/components/clients/clients.module.css'
import { messageData } from '@/common'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../card/card';


export default function Clients() {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };
  return (
    <div className={styles.client}>
      <div className={styles.navigate}>
        <button onClick={() => slider?.current?.slickPrev()}><img width={90} src="/img/arrow_left.svg" /></button>
        <button onClick={() => slider?.current?.slickNext()}><img width={90} src="/img/arrow_right.svg" /></button>
      </div>

      <div className={styles.cards}>
        <Slider ref={slider} {...settings}>
          {messageData.map((item) => (
            <Card key={item.name} item={item} />
          ))}

        </Slider>
      </div>

    </div>
  )
}