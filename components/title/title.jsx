import React from 'react'
import Image from "next/image";

//internal import

import Style from "./title.module.css";

const Title = ({heading,paragraph}) => {//here it reacieve two props heading and paragraph
  return (
    <div className={Style.title}>
        <div className={Style.title_box}>
            <h2>{heading}</h2>{/*//dynamic heading*/}
            <p>{paragraph}</p>
        </div>
      
    </div>
  )
}

export default Title;
