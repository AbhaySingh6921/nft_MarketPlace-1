'use client'
import React,{useState}from 'react'
import Image from 'next/image'
import { MdVerified,MdCloudUpload,MdOutlineReportProblem } from 'react-icons/md'
import {FiCopy} from 'react-icons/fi'
import {TiSocialFacebook,TiSocialInstagram,TiSocialTwitter, TiSocialGithubCircular} from 'react-icons/ti'
import{BsThreeDots} from "react-icons/bs"
import images from '../../img'
import { Button } from '../../components/componentindex'
import Style from './authorprofilecard.module.css'

const AuthorProfileCard = ({currentAccount}) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);
  const openShare = () => {
    if(!share){
      setShare(true);
      setReport(false);
    }else{
      setShare(false);
      
    }
  };
  const copyAddress=()=>{
    const copyText=document.getElementById("myinput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
   const openReport = () => {
    if(!report){
      setShare(false);
      setReport(true);
    }else{
      setReport(false);
      
    }
  };
  
  


  return (
    <div className={Style.authorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
          src={images.nft_image_1}
          className={Style.AuthorProfileCard_box_img_img}
          alt="NFT image"
          width={220}
          height={220}
          />
        </div>
        <div className={Style.AuthorProfileCard_box_info}>
          <h2>DONY Herrera{""} <span><MdVerified/></span></h2>
          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value={currentAccount} id="myinput"  readOnly />
            <FiCopy onClick={()=>copyAddress() }className={Style.AuthorProfileCard_box_info_address_icon}/>

              
          </div>
          <p> Punk #256/An OG Cryptopunk Collector,hoarder of NFTs,Contributing to @ether_card,and 
            NFT Montization pLatform
          </p>
          <div className={Style.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook/>
            </a>
             <a href="#">
              <TiSocialTwitter/>
            </a>
             <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialGithubCircular/>
            </a>
          </div>
           
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName="follow" handleClick={()=>{}}/>
            <MdCloudUpload onClick={()=>openShare()} 
            className={Style.AuthorProfileCard_box_share_icon}/>
            {share && (
              <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook/>
                </span>{" "}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialTwitter/>
                </span>{" "}
                {""}
                Twiter
              </p>
              <p>
                <span>
                  <TiSocialGithubCircular/>
                </span>{" "}
                {""}
               GitHub
              </p>
              <p>
                <span>
                  <TiSocialInstagram/>
                </span>{" "}
                {""}
               Instagram
              </p>
              </div>
            )}
            <BsThreeDots onClick={()=>openReport()}
              className={Style.AuthorProfileCard_box_share_icon}/>
             {report && (
              <p className={Style.AuthorProfileCard_box_share_report}>
                <span>
                  <MdOutlineReportProblem/>
                </span>{""}
                {""}
                Report abouse
              </p>
             )}
        </div>
      </div>

      
    </div>
  )
}

export default AuthorProfileCard
