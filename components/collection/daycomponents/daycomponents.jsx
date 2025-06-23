import React from 'react';
import Style from './daycomponents.module.css';
import images from '../../../img';
import { MdVerified } from 'react-icons/md';
import Image from 'next/image';
import { TbBackground } from 'react-icons/tb';

const DayComponents = ({el,i}) => {
  return (
    <div className={Style.daysComponents}>
      <div className={Style.daysComponents_box}>
        <div className={Style.daysComponets_box_img}>
          <Image
            key="background"
            src={el.background}
            className={Style.daysComponents_box_img_img}
            alt="profile background"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.daysComponents_box_profile}>
          <Image
            key="profile1"
            src={images.creatorbackground2}
            alt="profile1"
            width={200}
            height={200}
            className={Style.daysComponents_box_img_1}
          />
          <Image
            key="profile2"
            src={images.creatorbackground2}
            alt="profile2"
            width={200}
            height={200}
            className={Style.daysComponents_box_img_2}
          />
          <Image
            key="profile3"
            src={images.creatorbackground2}
            alt="profile3"
            width={200}
            height={200}
            className={Style.daysComponents_box_img_3}
          />
        </div>

        <div className={Style.dayComponents_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.dayComponents_box_title_info}>
            <div className={Style.dayComponents_box_title_info_profile}>
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                objectFit="cover"
                className={Style.daysComponents_box_profile_img}
              />
              <p>
                Creator
                <span>
                  abhay singh <small><MdVerified /></small>
                </span>
              </p>
            </div>
            <div className={Style.daysComponents_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayComponents;
