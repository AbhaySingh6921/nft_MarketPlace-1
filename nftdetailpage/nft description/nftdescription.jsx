'use client'
import React ,{useState,useEffect,useContext}from 'react'
import Image from "next/image";
import { MdVerified,MdCloud,MdTimer,MdReportProblem,MdOutlineDeleteSweep, MdCloudUpload   } from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs'
import {FaPercentage, FaWallet} from 'react-icons/fa'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialTumbler,
  TiSocialTwitter,
  
} from 'react-icons/ti';
import {BiTransferAlt,BiDollar} from 'react-icons/bi';
import Link from "next/link"
import { useRouter } from 'next/navigation';

//internal import
import Style from './nftdescription.module.css'
import images from '../../img'
import {Button} from '../../components/componentindex'
import { NFTTabs } from '../nftdetailpageindex';

//contract
import { NFTMarketPlaceContext } from '../../context/NFTMarketPlaceContext';


const NFTDescription = ({nft}) => {
  const[social,setSocial]=useState(false);
  const[NFTMenu,setNFTMenu]=useState(false);
  const[history,setHistory]=useState(false);
  const[Provanance,setprovanance]=useState(false);
  const[owner,setOwner]=useState(false);
  const router=useRouter();

  const historyArray=[
    images.user1,
    images.user2,
    images.user4,
    images.user3,
    
  ]
   const provannaceArray=[
    images.user6,
    images.user7,
    images.user4,
    images.user1,
    
  ]
  const ownerArray=[
    images.user1,
    images.user2,
    images.user3,
    images.user8,
    
  ]
   const opensocial=()=>{
    if(!social){
      setSocial(true);
      setNFTMenu(false);
    }else{
      setSocial(false);
    }
   }
   const openNFTMenu=()=>{
    if(!NFTMenu){
      setNFTMenu(true);
      setSocial(false);
    }
    else{
      setNFTMenu(false);
    }
   }
   const openTabs=(e)=>{
    const btntext= e.target.innerText;
    if(btntext == 'Bid History'){
      setHistory(true);
      setprovanance(false);
      setOwner(false);
   }
    else if(btntext == 'Provanance'){
      setHistory(false);
      setprovanance(true);
      setOwner(false);
   }
    

    }
    const openOwner=()=>{
      if(!owner){
        setOwner(true);
        setHistory(false);
        setprovanance(false);
      }
      else{
        setOwner(false);
      }
    }
    //smart contract
    const {buyNFT,currentAccount}=useContext(NFTMarketPlaceContext)

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
         <div className={Style.NFTDescription_box_share}>
         <p>Virtual Worlds</p>
            <div className={Style.NFTDescription_box_share_box}>
             <MdCloudUpload className={Style.NFTDescription_box_share_box_icon} onClick={()=>opensocial()}/>
            {
              social && (
                <div className={Style.NFTDescription_box_share_box_social}>
                  <a href="#">
                    <TiSocialFacebook/> facebook
                  </a>
                  <a href="#">
                    <TiSocialInstagram/> Instagram
                  </a>
                  <a href="#">
                    <TiSocialTwitter/>Twitter
                  </a>
                  <a href="#">
                    <TiSocialGithub/>GitHub
                  </a>
                </div>
              )
            }
            <BsThreeDots className={Style.NFTDescription_box_share_box_icon} onClick={()=>openNFTMenu()}/>
              {
                NFTMenu &&(
                  <div className={Style.NFTDescription_box_share_box_social}>
                    <a href="#">
                      <BiDollar/> change price
                    </a>
                    <a href="#">
                      <BiTransferAlt/> Transfer
                    </a>
                    <a href="#">
                      <MdReportProblem/> report abouse
                    </a>
                    <a href="#">
                      <MdOutlineDeleteSweep/> delete Item
                    </a>
                  </div>

                )
              }
              </div>

        </div>
        <div className={Style.NFTDescription_box_profile}>
          <h1>{nft.name} #{nft.tokenId}</h1>
            <div className={Style. NFTDescription_box_profile_box}>
              <div className={Style. NFTDescription_box_profile_box_left}>
                 <Image src={images.creatorbackground1}
                  alt="profile"
                  width={40}
                  height={40}
                  className={Style.NFTDescription_box_profile_box_left_img}
                 />
                  <div className={Style.NFTDescription_box_profile_box_left_info}>
                    <small>Collection </small><br/>
                    <span>Monkey App <MdVerified/></span>
                   </div>
              </div>
              <div className={Style. NFTDescription_box_profile_box_right}>
                <Image src={images.user10}
                  alt="profile"
                  width={40}
                  height={40}
                  className={Style.NFTDescription_box_profile_box_left_img}
                 />
                 <div className={Style.NFTDescription_box_profile_box_right_info}>
                    <small>Creator</small><br/>
                    <Link href={{pathname:"./author",query:`${nft.seller}`}}>
                    <span>karli costa vada <MdVerified/></span>
                    </Link>
                  </div>
              

              </div>
              
            </div>
        
        <div className={Style.NFTDescription_box_profile_biding}>
          <p>
            <MdVerified/> <span>Auction ending in:</span>
          </p>
           <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                  <p>2</p>
                  <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                  <p>20</p>
                  <span>hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                  <p>10</p>
                  <span>min</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                  <p>40</p>
                  <span>sec</span>
              </div>
           </div>
           <div className={Style.NFTDescription_box_profile_biding_box_price}>
            <div className={Style.NFTDescription_box_profile_biding_box_price_bet}>
              <small>Current Bid</small>
              <p>{nft.price}<span></span></p>
            </div>
            <span>[96 in stock]</span>
           </div>
           <div className={Style.NFTDescription_box_profile_biding_box_button}>
            {currentAccount==nft.seller.toLowerCase()?(
             <p>
              you can 't buy on your own nft
             </p>
            ):currentAccount==nft.owner.toLowerCase()?(
                <Button 
                icon=<FaWallet/> 
                btnName="List on MarketPlace"
                handleClick={() =>
                   router.push(`/reselltoken?id=${nft.tokenId}&tokenURI=${encodeURIComponent(nft.tokenURI)}`)
                }

                />
            ):(
                <Button icon=<FaWallet/> 
                btnName="buy nft"
                handleClick={()=> buyNFT(nft)} 
                classStyle={Style.button} 
                 />
            )}
          
             <Button icon=<FaPercentage/>
             btnName="make offer"
             handleClick={()=>{}}
             classStyle={Style.button}
             />
           </div>
           <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
            <button onClick={(e)=>openTabs(e)}> Bid History</button>
            <button onClick={(e)=>openTabs(e)}> Provanance</button>
            <button onClick={(e)=>openOwner()}> owner</button>

           </div>
           {history && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={historyArray}/>
            </div>
           )}
           {Provanance&& (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={provannaceArray}/>
            </div>
           )}
           {owner && (
            <div className={Style.NFTDescription_box_profile_biding_box_card}>
              <NFTTabs dataTab={ownerArray} icon=<MdVerified/>/>
            </div>
           )}
        </div>

      </div>
    </div>
    </div>
  )
}

export default NFTDescription
