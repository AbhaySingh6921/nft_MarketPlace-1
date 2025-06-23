"use client";
import React, { useState } from "react";
import Style from "./nftcardtwo.module.css";
import { BsImage } from "react-icons/bs";
import {
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import Image from "next/image";
import images from "../../img";
import Link from 'next/link'

// internal import
const NFTCardTwo = ({ NFTData }) => {
  const [like, setLike] = useState(false);
  const [likeInc, setLikeInc] = useState(21);
  const fallbackImage = images.nft_image_1;

  const likeNFT = () => {
    if (!like) {
      setLike(true);
      setLikeInc(23);
    } else {
      setLike(false);
      setLikeInc(24); // use 24 directly to match logic
    }
  };

  // Defensive: If NFTData isn't loaded, render a loading message
  if (!NFTData || !Array.isArray(NFTData)) {
    return (
      <div className={Style.NFTCardTwo}>
        Loading NFTs...
      </div>
    );
  }

  // Defensive: If empty, show a message
  if (NFTData.length === 0) {
    return (
      <div className={Style.NFTCardTwo}>No NFTs found.</div>
    );
  }

  return (
    <div className={Style.NFTCardTwo}>
      {NFTData.map((nfts, i) => {
        // Simple log for your debugging
        
        return (
          <Link  href={{pathname:"/nftdetail", query:nfts} } key={i}>
          <div className={Style.NFTCardTwo_box} key={i}>
            <div className={Style.NFTCardTwo_box_like}>
              <div
                className={Style.NFTCardTwo_box_like_box}
              >
                <BsImage
                  className={
                    Style.NFTCardTwo_box_like_box_box_icon
                  }
                />
                <p onClick={likeNFT}>
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart />
                  )}{" "}
                  <span>{likeInc + 1}</span>
                </p>
              </div>
            </div>
            <div className={Style.NFTCardTwo_box_img}>
              <Image
                src={nfts.image || fallbackImage}
                alt="NFT"
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
                onError={(e) => {
                  // Use an actual DOM image fallback (this only works with img, not next/image)
                  // For next/image, always supply a working fallback through the src prop!
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
                // For next/image, supply a checked safe fallback as you do above
                // If static import fails for next/image, consider switching to <img> for maximum reliability!
              />
            </div>
            <div className={Style.NFTCardTwo_box_info}>
              <div
                className={Style.NFTCardTwo_box_info_left}
              >
                <p>
                  {nfts.name
                    ? nfts.name
                    : `Clone #${i + 1}`}
                </p>
              </div>
              <small>4{i + 2}</small>
            </div>
            <div className={Style.NFTCardTwo_box_price}>
              <div
                className={Style.NFTCardTwo_box_price_box}
              >
                <small>Current Bid</small>
                <p>
                  {nfts.price}
                  ETH
                </p>
              </div>
              <p
                className={Style.NFTCardTwo_box_price_stock}
              >
                <MdTimer /> <span>{i + 1} hour left</span>
              </p>
            </div>
          </div>
           </Link>
        );
       
      })}
    </div>
  );
};

export default NFTCardTwo;
