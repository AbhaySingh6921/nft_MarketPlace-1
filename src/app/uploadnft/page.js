'use client'
import React,{useEffect,useState,useContext} from 'react'
import Style from '../../../style/uploadnft.module.css'
import {UpLoadNFT} from '../../../uploadnft/uploadnftindex'

//smart contract section
import { NFTMarketPlaceContext } from '../../../context/NFTMarketPlaceContext'
const Page = () => {
  const {  uploadToIPFS, CreateNFT}=useContext(NFTMarketPlaceContext);
  return (
    <div className={Style.uploadNFT}>
       <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create New NFT</h1>
          <p>You Can set preferred display name,create your profile and  manange other personal setting</p>
         </div>
         <div className={Style.uploadNFT_box_title}>
          <h2>Image,Video,Audio ,or #D Model</h2>
          <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF</p>

          </div>  
          <div className={Style.uploadNFT_box_form}>
            <UpLoadNFT   uploadToIPFS={ uploadToIPFS} CreateNFT={CreateNFT}/>
          </div> 
       </div>
    </div>
  )
}

export default Page
