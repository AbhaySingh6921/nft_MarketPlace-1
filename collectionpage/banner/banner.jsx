import React from 'react'
import Style from './banner.module.css'
import Image from 'next/image'
import images from '../../img'

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}> 
        <Image
          src={bannerImage}
          alt="background"
          width={1600}
          height={300}
          className={Style.image}
        />
      </div>
      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          alt="background"
          width={1600}
          height={900}
          className={Style.image}
        />
      </div>
    </div>
  )
}

export default Banner
