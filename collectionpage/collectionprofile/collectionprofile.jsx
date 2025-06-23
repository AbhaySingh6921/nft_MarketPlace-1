import React from 'react'
import Image from 'next/image'
import images from '../../img'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialGithub,
  


  
} from 'react-icons/ti';
import Style from './collectionprofile.module.css'
import { styleEffect } from 'framer-motion';

const CollectionProfile = () => {
  const popularArray=[1,2,3,4,5];

  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image 
          src={images.nft_image_1}
          alt="nft image"
          width={800}
          height={800}
          className={Style.collectionProfile_box_left_img}
          />
          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
            <TiSocialFacebook/>
            </a>
             <a href="#">
            <TiSocialGithub/>
            </a>
             <a href="#">
            <TiSocialLinkedin/>
            </a>
            <a href="#">
            <TiSocialYoutube/>
            </a>
          </div>
        </div>
        <div className={Style.CollectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>
            karafuru is home to 5,55 genetaive art where color reign
            supreme.Leave the drab reality and enter a world of vibrant
          </p>
          <div className={Style.CollectionProfile_box_middle_box}>
            {popularArray.map((el,i)=>(
              <div className={styleEffect.CollectionProfile_box_middle_box_item} key={i+1}>
                <small>Floor price</small>
              <small> ${i+1}95,4678</small>
              <span>+ {i+2}.11%</span>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionProfile
