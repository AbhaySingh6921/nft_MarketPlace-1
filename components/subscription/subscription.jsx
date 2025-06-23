import React from 'react'
import { RiSendPlaneFill} from 'react-icons/ri';
import Image from "next/image";
//  internal import
import Style from './subscription.module.css';
import images from "../../img";


const Subscription = () => {
  return (
    <div className={Style.subscribe}>
        <div className={Style.subscribe_box}>
            <div className={Style.subscribe_box_left}>
                <h2>Never miss a drop</h2>
                <p>subscribe to our super-exclusive drop list and be the first about upcoming drops</p>
            </div>
            <div className={Style.subscribe_box_left_box}>
                <span>01</span>
                <small>get more discout</small>
            </div>
            <div className={Style.subscribe_box_left_box}>
                <span>02</span>
                <small>get premium</small>
            </div>
            <div className={Style.subscribe_box_left_input}>
                <input type="email" placeholder="enter your email"></input>
                <RiSendPlaneFill className={Style.subscribe_box_left_input_icon}/>
            </div>
            <div className={Style.subscribe_box_right}>
                <Image src={images.update}
                alt='get update'
                height={600}
                width={600}
                />
            </div>

        </div>
      
    </div>
  )
}

export default Subscription;
