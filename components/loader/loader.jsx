import React from 'react'
import Image from 'next/image'
//internal import 
import image from '../../img';
import Style from './loader.module.css';

const Loader = () => {
  return (
    <div className={Style.Loader}> 
       <div className={Style.Loader_box}> 
          <div className={Style.Loader_box_img}> 
           <Image
           src={image.Loader}
           alt="loader"
           width={200}
           height={200}
           className={Style.Loader_box_img_img}
           />
           </div>
       </div>
    </div>
  )
}

export default Loader
