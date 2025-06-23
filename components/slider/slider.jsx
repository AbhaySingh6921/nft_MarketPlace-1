'use client'
import React ,{useState,useEffect,useRef}from 'react'
import  Style from "./slider.module.css"
import{motion} from 'framer-motion';
import { TiArrowLeftThick,TiArrowRightThick } from 'react-icons/ti';
import SliderCard from './slidercard/slidercard';
import images from '../../img'

const Slider = () => {

    const sliderArray=[
      
      {
            background :images.creatorbackground6,
            user:images.user1,
          },
           {
            background :images.creatorbackground2,
            user:images.user2,
          },
           {
            background :images.creatorbackground1,
            user:images.user3,
          },
           {
            background :images.creatorbackground8,
            user:images.user4,
          },
           {
            background :images.creatorbackground10,
            user:images.user6,
          },
    ];
    const[width,setwidth]=useState(false);
    const dragSlider=useRef();

    useEffect(() => {
  if (dragSlider.current) {
    setwidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }
}, []);


    const handleScroll = (direction) => {
  if (!dragSlider.current) return;

  const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
  if (direction === "left") {
    dragSlider.current.scrollLeft -= scrollAmount;
  } else {
    dragSlider.current.scrollLeft += scrollAmount;
  }
};
return (
  <div className={Style.slider}>
    <div className={Style.slider_box}>
      <h2>Explore NFT video</h2>
      <div className={Style.slider_box_button}>
        <p>Click on play icon & enjoy NFTs video</p>
        <div className={Style.slider_box_button_btn}>
          <div className={Style.slider_arrow} onClick={() => handleScroll("left")}>
            <TiArrowLeftThick />
          </div>
          <div className={Style.slider_arrow} onClick={() => handleScroll("right")}>
            <TiArrowRightThick />
          </div>
        </div>
      </div>
    </div>

    <motion.div className={Style.slider_box_scroll} ref={dragSlider}>
      <motion.div
        className={Style.slider_box_drag}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {sliderArray.map((el, i) => (
          <SliderCard key={i + 1} el={el} i={i} />
        ))}
      </motion.div>
    </motion.div>
  </div>
);


 
}

export default Slider
