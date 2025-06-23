import React from 'react';
import Image from 'next/image';
import Style from "./notification.module.css";
import Link from 'next/link';
import Images from '../../../img/index.js';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const Notification=() => {
    return(
        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_img}>
                    <Image src={Images.user1}
                     alt="profile image"
                     width={50}
                     height={50}
                     className={Style.notification_box_img}
                     />
                </div>
                <div className={Style.notification_box_info}>
                    <h4>Abhay Singh</h4>
                    <p>measure action your user</p>
                    <small>2 min ago</small>
                </div>
                <span className={Style.notification_box_new}></span>
            </div>
        </div>
    )
}
export default Notification;