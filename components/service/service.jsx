import React from 'react';

//internal import
import Style from"./service.module.css";
import Image from 'next/image';
import images from "../../img";

const Service=()=>{
    return(
        <div className={Style.service}>
            <div className={Style.service_box}>
                {/*service box 1*/}
                <div className={Style.service_box_item}>
                    <Image src={images.service1}
                    alt="filter & Discover"
                    width={100}
                    height={100}
                    />
                    <p className={Style.service_box_item_item}></p>
                    <span>Step1</span>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your Nfts for money</p>
                </div>
                 {/*service box 2*/}
                <div className={Style.service_box_item}>
                    <Image src={images.service2}
                    alt="filter & Discover"
                    width={100}
                    height={100}
                    />
                    <p className={Style.service_box_item_item}></p>
                    <span>Step1</span>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your Nfts for money</p>
                </div>
                 {/*service box 3*/}
                <div className={Style.service_box_item}>
                    <Image src={images.service3}
                    alt="Connect wallet "
                    width={100}
                    height={100}
                    />
                    <p className={Style.service_box_item_item}></p>
                    <span>Step1</span>
                    <h3>Connect wallet</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your Nfts for money</p>
                </div>
                 {/*service box 4*/}
                <div className={Style.service_box_item}>
                    <Image src={images.service1}
                    alt="filter & Discover"
                    width={100}
                    height={100}
                    />
                    <p className={Style.service_box_item_item}></p>
                    <span>Step1</span>
                    <h3>Start Trading</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your Nfts for money</p>
                </div>
                  
                    
            </div>
        </div>
    )
}
export default Service;  //exporting the component