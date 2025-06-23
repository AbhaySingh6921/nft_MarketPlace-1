'use client';
import { React, useState ,useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Icons
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';

// Internal Imports
import Style from "./navbar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index.js';
import { Button ,Error} from '../componentindex.js';

import image from "../../img";
//import the smart contract
import { NFTMarketPlaceContext } from '../../context/NFTMarketPlaceContext.js';

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [helpCenter, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const router = useRouter();

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Notification") {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else if (btnText === "Profile") {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    }
  };

  const opennotification = () => {
    setNotification(!notification);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
  };

  const openProfile = () => {
    setProfile(!profile);
    setHelp(false);
    setDiscover(false);
    setNotification(false);
  };
  

  const openSideBar = () => {
    if(!openSideMenu) {
      setOpenSideMenu(true);
    }
    else {
      setOpenSideMenu(false);
    }
  };
  //CONTRACT SECTION
  const{currentAccount,ConnectWallet,openError}=useContext(NFTMarketPlaceContext);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>

        {/* LEFT SECTION */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={image.logo} alt="NFT MARKETPLACE" width={100} height={100} onClick={()=>router.push("/")} />
          </div>
        </div>

        {/* SEARCH BOX */}
        <div className={Style.navbar_container_left_box_input}>
          <input type="text" placeholder="Search NFT" className={Style.navbar_container_left_box_input_box} />
          <BsSearch onClick={() => {}} className={Style.search_icon} />
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.navbar_container_right}>

          {/* Discover Menu */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help Center Menu */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {helpCenter && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification Menu */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={opennotification} />
            {notification && (
              <div className={Style.navbar_container_right_notify_box}>
                <Notification />
              </div>
            )}
          </div>

          {/* Create Button */}
          <div className={Style.navbar_container_right_button}>
          {currentAccount=="" ?( 
            <Button 
              btnName="Connect Wallet" 
              handleClick={() => {
                ConnectWallet()
              }}
           />
          ):(
            
            <Button btnName="Create"  handleClick={()=> router.push("/uploadnft")}/> 
          
          )}
            
          </div>

          {/* Profile Menu */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={image.user1}
                alt="profile"
                width={49}
                height={49}
                onClick={openProfile}
                className={Style.navbar_container_right_profile}
              />
              {profile && (
                <div className={Style.navbar_container_right_profile_box_card}>
                  <Profile currentAccount={currentAccount} />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className={Style.navbar_container_right_menubtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSideBar} />
          </div>
        </div>
      </div>

      {/* Sidebar Component (Mobile Only) */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
      {/* for the error */ }
      {openError && <Error/>}
    </div>
  );
};

export default NavBar;
