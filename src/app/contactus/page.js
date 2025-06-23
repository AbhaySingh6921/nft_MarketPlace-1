'use client'
import React from 'react'
import Style from '../../../style/contactus.module.css'
import Image from "next/image";
import images from "../../../img";
import formStyle from '../../../accountpage/form/form.module.css';
import {Button} from '../../../components/componentindex';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialGithub,
  TiArrowSortedDown,
    TiArrowSortedUp,
    TiSocialTwitter,
    TiSocialInstagram,
  
} from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';
const Page = () => {
  return (
    <div className={Style.contactus}>
       <div className={Style.contactus_box}>
          <h1>Contact</h1>
            <div className={Style.contactus_box_box_left}>
                <div className={Style.contactus_box_box_left_item}>
                    <h3>Address</h3>
                    <p> photo booth tatooed prism,portland taiyaki hoodie neutral ,typewriter</p>
                </div>
                
                <div className={Style.contactus_box_box_left_item}>
                  <h3>Phone</h3>
                  <p>267389xxxx</p>
                </div>
                <div className={Style.contactus_box_box_left_item}>
                  <h3>Sociall</h3>
                  <a href='#'><TiSocialFacebook/>  Facebook</a>
                  <a href='#'><TiSocialGithub/>GITHub </a>
                  <a href='#'><TiSocialTwitter/> Twitter</a>
                  <a href='#'><TiSocialInstagram/> Instagram </a>
                </div>
               <div className={Style.contactus_box_box_right}>
                <form>
                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="name">Username</ label>
                        <input
                           type="text"
                           placeholder="abhay"
                           className={formStyle.Form_box_input_userName}
                        />
                     </div>
                           <div className={formStyle.Form_box_input}>
                            <label htmlFor="email">Email</label>
                            <div className={formStyle.Form_box_input_box}>
                              <div className={formStyle.Form_box_input_box_icon}>
                                <HiOutlineMail />
                              </div>
                              <input type="text" placeholder="email" />
                           </div>
                          </div>
                          <div className={formStyle.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              cols="30"
              rows="6"
              placeholder="something about your self"
            ></textarea>
          </div>
            <Button btnName="send message" handleClick={()=>{}} classStyle={Style.button}/>
                </form>
                </div>
             </div>
       </div>
    </div>
  )
}

export default Page
