import React from 'react';
import Image from 'next/image';
import {FaUserAlt,FaRegImage,FaUserEdit} from 'react-icons/fa';
import{MdHelpCenter} from 'react-icons/md';
import{TbDownloadOff,TbDownload} from 'react-icons/tb';
import Link from 'next/link';
//internal import
import image from '../../../img/index.js';
import Style from "./profile.module.css";


const Profile=({currentAccount}) => {
    return(
        <div className={Style.profile}>
           <div className={Style.profile_Account}>
                <Image src={image.user1}
                    alt="profile image"
                    width={50}
                    height={50}
                    className={Style.profile_Account_img}
                />
                <div className={Style.profile_Account_info}>
                    <h4>Abhay Singh</h4>
                    <p>measure action your user</p> 
                    <small>{currentAccount.slice(0,24)}...</small>
                </div> 
                 <div className={Style.profile_menu}>
                    <div className ={Style.profile_menu_one}>
                       <div className={Style.profile_menu_one_item}>
                        <FaUserAlt/>
                        <p>
                            <Link href={{pathname:"/author"}}> My Profile</Link>
                        </p>
                       </div>
                    </div>
                    <div className={Style.profile_menu_one_item}>
                        <FaRegImage/>
                        <p>
                            <Link href={{pathname:"/author"}}> My item</Link>
                        </p>
                       </div>
                     </div> 
                     <div className={Style.profile_menu_one_item}>
                        <FaUserEdit/>
                        <p>
                            <Link href={{pathname:"/Account"}}> Edit Profile</Link>
                        </p>
                    </div>
                    <div className={Style.profile_menu_two}>
                        <div className={Style.profile_menu_one_item}>
                            <MdHelpCenter/>
                            <p>
                                <Link href={{pathname:"/contactus"}}> Help</Link>
                            </p>
                        </div>
                        <div className={Style.profile_menu_one_item}>
                            <TbDownload/>
                            <p>
                                <Link href={{pathname:"/aboutus"}}>About Us</Link>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Profile;