'use client';
import React,{useContext,useState}from "react";
import Image from "next/image";
//internal import

import Style from './herosection.module.css'
import {Button} from '../componentindex.js';
import images from "../../img";

//smart contract
import {NFTMarketPlaceContext} from '../../context/NFTMarketPlaceContext.js';



const HeroSection=()=>{
    const {titledata}=useContext(NFTMarketPlaceContext);
    return(
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>{titledata}</h1>
                    <p>
                        Discover the most outstanding NFts in all topic
                        of your NTFs and sell them 
                    </p>
                    <Button btnName='start your search'/>
                </div>
                <div className={Style.heroSection_box_right}>
                    <Image src={images.hero} 
                    alt="Hero section" 
                    width={600}
                    height={600}
                    />
                </div>
            </div>
        </div>
    )
};
export default HeroSection;
