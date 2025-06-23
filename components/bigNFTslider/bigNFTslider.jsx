
'use client';
import {React,useState,useEffect,useCallback} from "react";
import Image from 'next/image';
import{AiFillFire,AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import{MdVerified,MdTimer}  from "react-icons/md";
import{TbArrowBigLeftLine,TbArrowBigRightLine} from "react-icons/tb";
//ineternal import
import Style from './bigNFTslider.module.css';
import images from '../../img';
import Button from '../button/button.jsx'


const BigNFTSlider=()=>{

 const [idNumber ,setIdNumber]=useState(0);
 const SliderData=[
    {
        title:"hello NFT",
        id:1,
        name:"abhay singh",
        collections:"gym",
        price:"0000000078 eth",
        like:265,
        image:images.user1,
        nftImage:images.nft_image_1,
        time:{
            day:26,
            hour:10,
            min:11,
            sec:10,
        }

    },
     {
        title:"by NFT",
        id:2,
        name:"arjun",
        collections:"gym",
        price:"0000000078 eth",
        like:265,
        image:images.user2,
        nftImage:images.nft_image_2,
        time:{
            day:26,
            hour:10,
            min:11,
            sec:10,
        },
        
    }, {
        title:"hello hiiii NFT",
        id:3,
        name:"aryan",
        collections:"gym",
        price:"0000000078 eth",
        like:265,
        image:images.user3,
        nftImage:images.nft_image_3,
        time:{
            day:26,
            hour:10,
            min:11,
            sec:10,
        },
        
    },
     {
        title:"hello [][[[[[NFT",
        id:4,
        name:"karan",
        collections:"gym",
        price:"0000000078 eth",
        like:265,
        image:images.user4,
        nftImage:images.nft_image_1,
        time:{
            day:26,
            hour:10,
            min:11,
            sec:10,
        },
        
    }
 ]
 //function for inc()
 const inc=useCallback(()=>{
    if(idNumber+1<SliderData.length){
        setIdNumber(idNumber+1);
    }
 },[idNumber,SliderData.length]);

 //dec.......
 const dec=useCallback(()=>{
    if(idNumber>0){
        setIdNumber(idNumber-1);
    }
 },[idNumber]);

//  useEffect(()=>{
//     inc();
//  },[]);


    return (
        <div className={Style.bigNFTslider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{SliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile} >
                            <Image 
                            className={Style.bigNFTSlider_box_left_creator_profile_image}
                            src={SliderData[idNumber].image}
                             alt="profile image"
                             width={50}
                             height={50}
                             />
                             <div className={Style.bigNFTSlider_box_left_creator_profile_image}>
                                <p>Creator</p>
                                <h>{SliderData[idNumber].name}<span><MdVerified></MdVerified></span></h>
                             </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire 
                            className={Style.bigNFTSlider_box_left_creator_collection_icon}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{SliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding}>
                            <div className={Style.bigNFTSlider_box_left_bidding_box}>
                                <small>Current Bid</small>
                                <p>{SliderData[idNumber].price}<span>$,221,21</span></p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                                < MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}
                                />
                                <span>Auction ending in</span>
                               
                                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                            <p>{SliderData[idNumber].time.day}</p>
                                            <span>Days</span>
                                        </div>
                                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                            <p>{SliderData[idNumber].time.hour}</p>
                                            <span>hours</span>
                                        </div>
                                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                            <p>{SliderData[idNumber].time.min}</p>
                                            <span>min</span>
                                        </div>
                                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                            <p>{SliderData[idNumber].time.sec}</p>
                                            <span>sec</span>
                                        </div>

                                    </div>
                                
                                <div className={Style.bigNFTSlider_box_left_button}>
                                    <Button btnName="Place" handleClick={()=>{}}/>
                                    <Button btnName="View" handleClick={()=>{}}/>

                                </div>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_slideBtn}>
                                <TbArrowBigLeftLine className={Style.bigNFTSlider_box_left_slideBtn_icon}
                                onClick={()=>dec()}
                                />
                                 <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_slideBtn_icon}
                                onClick={()=>inc()}
                                />
                            </div>
                        </div>
                        
                    </div>

                </div>
                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image 
                        src={SliderData[idNumber].nftImage}
                        alt="nft image"
                        />
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart/>
                            <span>{SliderData[idNumber].like}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )


}
export default BigNFTSlider ;