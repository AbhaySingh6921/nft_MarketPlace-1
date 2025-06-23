'use client'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsImage } from 'react-icons/bs'
import Image from "next/image";
import Link from 'next/link';

// internal import
import Style from "./nftcard.module.css";
import images from '../../img';

const NFTCard = ({NFTData}) => {
  const [like, setLike] = useState(true);
  // const popularArray = [
  //         images.nft_image_1,
  //         images.nft_image_2,
  //         images.nft_image_3,
  //         images.nft_image_1, 
  //         images.nft_image_2,
  //         images.nft_image_3,
  //       ];// Replace with actual NFT data

  const likeNFT = () => {
    if(!like){
        setLike(true)
    }else{
         setLike(false)
    }
  };

  return (
    <div className={Style.NFTCard}>
      {NFTData.map((el, i) => (
        <Link key={i} href={{pathname:"/nftdetail", query:el}}><div className={Style.NFTCard_box} >
          <div className={Style.NFTCard_box_img}>
            <Image
              src={el.image}
              alt="NFT image"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div className={Style.NFTCard_box_update_left_like} onClick={likeNFT}>
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart className={Style.NFTCard_box_update_left_like_icon} />
                )}
                <span> 2</span>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h:27m:25s</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>{el.name}</h4>
                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div className={Style.NFTCard_box_update_details_price_box_bid}>
                    <small>Current Bid</small>
                    <p>{el.price}</p>
                  </div>
                  <div className={Style.NFTCard_box_update_details_price_box_stock}>
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImage />
            </div>
          </div>
        </div></Link>
        
      ))}
    </div>
  );
};

export default NFTCard;
