'use client';
import  { React,useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//icons
import { GrClose } from 'react-icons/gr';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialGithub,
  TiArrowSortedDown,
} from 'react-icons/ti';

//internal import
import Style from "./sidebar.module.css";
import image from '../../../img/index.js';
import { Button } from '../../componentindex.js';

//component start
const SideBar = ({ setOpenSideMenu }) => {
  //usestste for sidebar
  const [opendiscover, setOpenDiscover] = useState(false);
  const [openhelp, setOpenHelp] = useState(false);

  //discover navigation menu
  const discover = [
    { name: "Collections", link: "collections" },
    { name: "Search", link: "search" },
    { name: "author profile", link: "author-profile" },
    { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account-setting" },
    { name: "Connect Wallet", link: "connect-wallet" },
    { name: "blog", link: "blog" },
  ];

  //help center navigation menu
  const helpCenter = [
    { name: "FAQ", link: "faq" },
    { name: "About Us", link: "about-us" },
    { name: "Contact Us", link: "contact-us" },
    { name: "sign-up", link: "sign-up" },
    { name: "sign-in", link: "sign-in" },
    { name: "subscription", link: "subscription" },
  ];

  const openDiscoverMenu = () => {
    if (!opendiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openhelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  //return part
  return (
    <div className={Style.sidebar}>
      <GrClose className={Style.sideBar_closBtn} onClick={closeSideBar} />

      <div className={Style.sideBar_box}>
        <Image src={image.logo} alt="logo" width={150} height={150} />
        <p>Discover the most outstanding nft article on all the topic</p>
      </div>

      <div className={Style.sideBar_social}>
        <a href="#"><TiSocialFacebook /></a>
        <a href="#"><TiSocialLinkedin /></a>
        <a href="#"><TiSocialYoutube /></a>
        <a href="#"><TiSocialGithub /></a>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={openDiscoverMenu}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {opendiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div className={Style.sideBar_menu_box} onClick={openHelpMenu}>
          <p>Help Center</p>
          <TiArrowSortedDown />
        </div>
        {openhelp && (
          <div className={Style.sideBar_discover}>
            {helpCenter.map((el, i) => (
              <p key={i + 1}>
                <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
              </p>
            ))}
          </div>
        )}
      </div>

      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={()=>{}} />
        <Button btnName="Connect Wallet" handleClick={()=>{}} />
      </div>
    </div>
  );
};

export default SideBar;
