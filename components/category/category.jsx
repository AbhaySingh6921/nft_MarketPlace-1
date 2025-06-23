import React from 'react'
//  internal import
import Style from './category.module.css';
import Image from 'next/image';
import images from "../../img";
import { BsCircleFill } from 'react-icons/bs';

const Category = () => {
  const CategoryArray = [
    images.creatorbackground10,
    images.creatorbackground11,
    images.creatorbackground6,
    images.creatorbackground2
  ];

  return (
    <div className={Style.category}>
      {CategoryArray.map((el, i) => (
        <div className={Style.category_box} key={i}>
          <Image
            src={el}
            className={Style.category_box_image}
            alt="background image"
            width={350}
            height={150}
            objectFit="cover"
          />
          <div className={Style.category_box_title}>
            <span>
              <BsCircleFill />
            </span>
            <div className={Style.category_box_title_info}>
              <h4>Enterainment</h4>
              <small>1995 NFTs</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
