'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

// Internal imports
import images from '../../../img';
import Style from './followertabcard.module.css';


const FollowerTabCard = ({el,i }) => {
  if (!el) return null; // Safeguard to avoid undefined errors
  const [following, setFollowing] = useState(false);

  const followMe = () => {
    setFollowing((prev) => !prev);
  };

  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTabCard_rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>
      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image
            src={el.background|| images.creatorbackground1}
            alt="profile bg"
            width={500}
            height={300}
          />
        </div>
        <div className={Style.FollowerTabCard_box_profile}>
          <Image
            className={Style.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
            src={el.user || images.user1}
          />
        </div>
        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_name}>
            <h4>
              {el.seller?.slice(0,10)}<span><MdVerified /></span>
            </h4>
            <p>{el.total || 0} ETH</p>
          </div>
          <div className={Style.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={followMe}>
                Following
              </a>
            ) : (
              <a onClick={followMe}>
                Follow <span><TiTick /></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
