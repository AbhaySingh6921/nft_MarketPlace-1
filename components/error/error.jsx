'use client'
import React, { useState, useEffect, useContext } from 'react'
import Image from "next/image"
// internal import
import Style from './error.module.css'
import images from '../../img'

// smart contract import
import { NFTMarketPlaceContext } from '../../context/NFTMarketPlaceContext'

const Error = () => {
  const { error, setOpenError } = useContext(NFTMarketPlaceContext);

  return (
    <div className={Style.Error} onClick={() => setOpenError(false)}>
      <div className={Style.Error_box}>
        <div className={Style.Error_box_info}>
          <Image
            src={images.error}
            alt="error"
            width={200}
            height={200}
            className={Style.Error_box_info_img}
          />
          <p>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default Error;
