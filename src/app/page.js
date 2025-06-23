'use client'
import React,{useState,useEffect,useContext,useMemo} from "react";

//internal import
import Image from "next/image";
import Styles from "../../style/page.module.css";
import {HeroSection,Service,BigNFTSlider ,Subscription,Title, Category,Filter,NFTCard,
  Collection,FollowerTab,AudioLive,Slider,Brand,Video,Loader} from "../../components/componentindex.js";

  //import topCreator data
  import {getTopCreators} from '../../topcreator/topcreator';
//importing contract data

import { NFTMarketPlaceContext, NFTMarketPlaceProvider } from "../../context/NFTMarketPlaceContext";

export default function Home() {
  const {fetchNFTs,checkIfWalletIsConnected }=useContext(NFTMarketPlaceContext);
    const[nfts,setNfts]=useState([]);
     const[nftscopy,setNftsCopy]=useState([]); //for filtering

     //creator lict
    const creators = useMemo(() => getTopCreators(nfts), [nfts]);
    console.log(creators)


  useEffect(() => {
      checkIfWalletIsConnected();
    }, []);   
     
     // In Search.js
  useEffect(() => {
    fetchNFTs().then((items) => {
     
      if (items) {
        setNfts(items.reverse());
        setNftsCopy(items);
      }
    });
  }, []);
 

 


  return (
    
    <div className={Styles.homepage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/> 
      <Title 
      heading="Latest Audio Collection"
      paragraph="Discover the meost outstanding Nfts in all topic of life"
      />
      <AudioLive/>
       {creators.length==0 ? (<Loader/>):(<FollowerTab TopCreator={creators}/>)}
      
      <Slider/>
      <Collection/>
      <Title 
      heading="Featured NFTs"
      paragraph="Discover the meost outstanding Nfts in all topic of life"
      />
      <Filter/>
      {nfts.length==0 ?<Loader/>:<NFTCard NFTData={nfts}/>}
      
      <Subscription/>
      <Brand/>
      <Video/>
      <Title 
      heading="Browser by Category"
      paragraph="Explore the NFT in most featured Categories"
      />
      <Category/>



    </div>
    
    
  );
}
