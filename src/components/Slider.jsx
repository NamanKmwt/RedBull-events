import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-cards';
import './Slider.css'
import {  EffectCards } from 'swiper/modules';
import Card from "./Card";
import { data } from "../assets/data";
import { useEffect } from "react";

export default function Slider(){
    let datas = [];
        data.map((obj) => {
            datas.push(obj);
        })
    let size = window.innerWidth;

    const handleScroll = () => {
        if (window.innerWidth < 500) {
            window.scrollTo(0, 400);
        } else {
            window.scrollTo({
              top:800,
              behavior:"smooth"
            });
        }
    };
    
    useEffect(() => {
          handleScroll();
          window.addEventListener("resize", handleScroll);
          return () => window.removeEventListener("resize", handleScroll);
      }, []);
 
   
    return(
        <Swiper
      // install Swiper modules
    //   modules={[Navigation, Pagination, EffectCoverflow]}
    modules={[EffectCards]}
      effect={'cards'}
      grabCursor = {true}
        className="myswiper"

    >
      <SwiperSlide><Card data={datas[0]} /></SwiperSlide>
      <SwiperSlide><Card data={datas[1]}/></SwiperSlide>
      <SwiperSlide><Card data={datas[2]}/></SwiperSlide>
      <SwiperSlide><Card data={datas[3]}/></SwiperSlide>
      <SwiperSlide><Card  data={datas[4]}/></SwiperSlide>
      <SwiperSlide style={{filter:"brightness(2.6)"}} onClick={handleScroll}><Card  data={datas[5]}/></SwiperSlide>
    </Swiper>
    )
}

