'use client'
import React, { useState } from 'react'
import Style from './nftdeatilimg.module.css'
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { BsImage } from 'react-icons/bs'
import images from '../../img'

const NFTDeatilImg = ({nft}) => {
  const [description, setDescription] = useState(true);
  const [detail, setDetail] = useState(true);
  const [like, setLike] = useState(false);

  const likeNFT = () => {
    setLike(!like);
  }

  const openDescription = () => {
    setDescription(!description);
  }

  const openDetail = () => {
    setDetail(!detail);
  }

  return (
    <div className={Style.NFTDeatilImg}>
      <div className={Style.NFTDeatilImg_box}>
        <div className={Style.NFTDeatilImg_box_NFT}>
          <div className={Style.NFTDeatilImg_box_NFT_like}>
            <BsImage className={Style.NFTDeatilImg_box_NFT_like_icon} />
            <p onClick={likeNFT}>
              {like ? (
                <AiOutlineHeart className={Style.NFTDeatilImg_box_NFT_like_icon} />
              ) : (
                <AiFillHeart className={Style.NFTDeatilImg_box_NFT_like_icon} />
              )}
              <span>23</span>
            </p>
          </div>

          <div className={Style.NFTDeatilImg_box_NFT_img}>
            <Image
              src={nft.image}
              className={Style.NFTDeatilImg_box_NFT_img_img}
              alt="NFT image"
              width={700}
              height={800}
              objectFit='cover'
            />
          </div>
        </div>

        <div className={Style.NFTDeatilImg_box_description} onClick={openDescription}>
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.NFTDeatilImg_box_description_box}>
            <p>
              {nft.description};
            </p>
          </div>
        )}

        <div className={Style.NFTDeatilImg_box_detail} onClick={openDetail}>
          <p>Detail</p>
          {detail ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {detail && (
          <div className={Style.NFTDeatilImg_box_detail_box}>
            <small>2000 x2000 px image (567kb)</small>
            <p>
              <small>Contract Address</small><br />
              {nft.seller};
            </p>
            <p><small>Token Id</small>{nft.tokenid}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NFTDeatilImg
