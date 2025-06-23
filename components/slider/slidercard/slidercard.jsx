import React from 'react'
import{motion} from 'framer-motion';
import Image from 'next/image';
//internal import
import images from '../../../img'
import Style from './slidercard.module.css'

const SliderCard = ({el,i}) => {
  return (
    <motion.div className={Style.sliderCard}>
        <div className={Style.slideCard_box}>
            <motion.div className={Style.slideCard_box_img}>
                <Image
                src={el.background}
                alt="slider profile"
                width={500}
                height={300}
                objectfit="cover"
                 />
            </motion.div>
            <div className={Style.slideCard_box_title}>
                <p>NFT Vedio #1234</p>
                <div className={Style.slideCard_box_title_like}>
                 
                  <small>1 0f 100</small>
                </div>
            </div>
            <div className={Style.slideCard_box_price}>
                <div className={Style.slideCard_box_price_box}>
                    <small>Current Bid</small>
                    <p>1.00eth</p>
                </div>
                <div className={Style.slideCard_box_box_price_time}>
                    <small>Reamining time</small>
                    <p>3h:16min:12sec</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default SliderCard
