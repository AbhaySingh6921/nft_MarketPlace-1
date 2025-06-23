import React from 'react'
import Style from './nfttabs.module.css'
import Image from 'next/image'

const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i) => {
        return (
          <div className={Style.NFTTabs_box} key={i}>
            <Image
              src={el}
              alt="profile image"
              width={40}
              height={40}
              className={Style.NFTTabs_box_img}
            />
            <div className={Style.NFTTabs_box_info}>
              <span>Offered for $700 by <small>abhay sinh</small></span>
              {icon}
              <small>June 14 - 4:89</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NFTTabs;
