'use client'
import React ,{useState}from 'react'
import Image from 'next/image'
import Style from "./audiocardsmall.module.css"
import images from "../../../img"
import { TbPlayerPause, TbPlayerPlay } from 'react-icons/tb'

const AudioCardSmall = () => {
  const [play,setPlay]=useState(false);

  const playMusic=()=>{
    if(!play){
      setPlay(true);
    }else{
      setPlay(false);
    }
  }

  return (
    <div className={Style.audioPlayer}>
      <div className={Style.audioPlayer_box}>
        <Image src={images.creatorbackground1}
        alt="bg"
        width={100}
        height={100}
        className={Style.audioPlayer_box_img}
        />
        <div className={Style.audioPlayer_box_info}>
          <h4>NFT music # 1123</h4>
          <div className={Style.audioPlayer_box_info_box}>
            
            <div className={Style.audioPlayer_box_info_box_price}>
              <small>Price</small>
              <p> 1.00 ETH</p>
            </div>
          </div>
        </div>
         <div className={Style.audioPlayer_box_playBtn} onClick={()=>playMusic()}>
          {play ? <TbPlayerPause/>:<TbPlayerPlay/>}
         </div>
      </div>
      
    </div>
  )
}

export default AudioCardSmall
