'use client'
import React,{useState} from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'
import { TbPlayerPlay,TbPlayerPause } from 'react-icons/tb'
//internal import 
import Style from './audiocard.module.css'

import images from '../../../img';



const AudioCard= () => {
   
  const[like,setLike]=useState(false);
  const[play,setPlay]=useState(false);

  const likeNft=()=>{
    if(!like){
      setLike(true);
    }else{
         setLike(false)
    }
  }
   const playMusic=()=>{
    if(!play){
      setPlay(true);
    }else{
         setPlay(false)
    }
  }


  return (
    <div className={Style.AudioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={()=>likeNft()}>
            {
              like ?(
                <AiFillHeart className={Style.audioCard_box_like_icon}/>
              ) :(
                <MdAddCircleOutline className={Style.audioCard_box_unlike_icon}/>
              )
            }
            <span>24</span>
          </div>
          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_like_time_remaining}>
              <small> reaminaing time</small>
              <h5>3h:20min:20sec</h5>
            </div>
          </div>
        </div>
        {/* music pause and play*/ }
        <div className={Style.audioCard_box_player}>
          <Image src={images.musiceWave} alt="music" width={200}/>
        <div className={Style.audioCard_box_musicPlayer} onClick={()=>playMusic()}>
           {
            play ?(
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause/>
              </div>
            ):(
              <TbPlayerPlay/>
            )
           }
        </div>
      </div>
      <div className={Style.audioCard_box_detail}>
        <div className={Style.audioCard_box_detail_info}>
          <h4>Nft music #112</h4>
          <div className={Style.audioCard_box_detail_info_price}>
            <small>Price</small>
            <p>$5465463</p>
          </div>
          <div className={Style.audioCard_box_detail_stock}>
            <small>24 in stock</small>
          </div>
        </div>
      </div>  
        <div className={Style.audioCard_box_img}>
          <Image src={images.creatorbackground10}
          alt="bg"
          width={500}
          height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default AudioCard  
