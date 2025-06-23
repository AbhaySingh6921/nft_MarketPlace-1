"use client"
import React from 'react'
import Style from './subscription.module.css'
import{TiTick} from 'react-icons/ti' 
import {Button} from '../components/componentindex'   
const Subscription = ({el,i}) => {
  return (
    <div className={Style.SubscriptionBox}>
       <div className={Style.SubscriptionBox_box}>
          <span className={Style.SubscriptionBox_box_span}>{el.plan}</span>
          <small className={Style.SubscriptionBox_box_small}>{el.popular || " not popular"}</small>
          <p className={Style.SubscriptionBox_box_small_para}>{el.price}</p>
          <div className={Style.SubscriptionBox_box_info}>
            {el.service.map((el, i) => (
                <p className={Style.SubscriptionBox_box_para} key={i}>
                    <span><TiTick/></span> {el}
                </p>
            ))}
          </div>
          <Button btnName="submit" handleClick={()=>{}}
          classStyle={Style.button}
          />
        </div>
    </div>
  )
}

export default Subscription
