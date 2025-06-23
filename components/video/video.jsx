import React from 'react'

import Style from './video.module.css'
import images from "../../img";
import Image from 'next/image'
import { styleEffect } from 'framer-motion';
const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}> 
        <h1><span>🎦</span></h1>
        <p> check out the hottest video.view more
            perpective on just about any topic
        </p>
        <div className={Style.Video_box_frame}>
            <div className={Style.Video_box_frame_left}>
                <Image src={images.NFTVideo}
                alt="Video image"
                width={1920}
                height={1080}
                objectFit="cover"
                />
            </div>
            <div className={Style.Video_box_frame_right}>Hey </div>
        </div>
      </div>
    </div>
  )
}

export default Video
