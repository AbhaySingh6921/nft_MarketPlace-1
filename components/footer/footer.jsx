import React from 'react';

import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialGithub,
  
} from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';

//internal import
import Style from './footer.module.css';
import images from "../../img";
import{Discover,HelpCenter} from "../navbar/index.js";



const Footer=() => {
    return(
        <div className={Style.footer}>
            <div className={Style.footer_box}> 
                <div className={Style.footer_box_social}>
                    <Image src={images.logo}
                    alt="footer logo"
                    height={100}
                    width={100}
                    />
                    <p> the world first and largest digital market place for ntfs</p>
                    <div className='Style.footer_social'>
                        <a href="#">
                            <TiSocialFacebook/>
                        </a>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                        <a href="#">
                            <TiSocialGithub/>
                        </a>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                    </div>
                </div>
                {/* Discover section*/ }
                <div className={Style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover/>
                </div>
                {/* HelpCenter section*/ }
                <div className={Style.footer_box_help}>
                    <h3>HelpCenter</h3>
                    <HelpCenter/>
                </div>
                {/* subscribe section*/ }
                <div className={Style.subscribe}>
                    <h3>subscribe</h3>
                    <div className={Style.subsribe_bar}>
                    <input type='email' placeholder="enter the email"/>
                    <RiSendPlaneFill className={Style.subscribe_box_send}/>
                </div>
                <div className={Style.subscription_box_info}>
                    <p> discover ,collect,and sell NFTS</p>
                </div>
                </div>
                
            </div>
         </div>
         
    )
}
export default Footer;