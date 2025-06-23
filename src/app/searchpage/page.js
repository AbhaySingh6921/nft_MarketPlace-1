'use client'
import React,{useEffect,useState,useContext} from 'react'
import Style from '../../../style/searchpage.module.css';
import {Slider,Brand} from '../../../components/componentindex'
import { SearchBar } from '../../../searchpage/searchbarindex';
import {Filter,Loader} from '../../../components/componentindex'
import { NFTCardTwo ,Banner} from '../../../collectionpage/collectionindex';
import images from '../../../img'
import router from 'next/navigation'

//smart contract
import { NFTMarketPlaceContext } from '../../../context/NFTMarketPlaceContext';

const Search = () => {
   
  const {fetchNFTs}=useContext(NFTMarketPlaceContext);
  const[nfts,setNfts]=useState([]);
   const[nftscopy,setNftsCopy]=useState([]); //for filtering
   
   // In Search.js
useEffect(() => {
  fetchNFTs().then((items) => {
   
    if (items) {
      setNfts(items.reverse());
      setNftsCopy(items);
    }
  });
}, []);

///for filter 
const onHandleSearch=(value)=>{ //here value is user input
  const filteredNFTs=nfts.filter(({name})=>
    value.toLowerCase().includes(name.toLowerCase()));//filter on the basic of name

  if(filteredNFTs.length===0){
    setNfts(nftscopy);
  }else{
    setNfts(filteredNFTs)

  }
};

//when we clear  in search then we display the data not filtered data all nfts
const onClearSearch=()=>{
  if(nfts.length && nftscopy.length){
    setNfts(nftscopy);
  }
}

const collectionArray=[
  images.nft_image_1,
  images.nft_image_2,
  images.nft_image_3,
  images.nft_image_2,
  images.nft_image_3,
  images.nft_image_1,

]

  return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground8}/>
        <SearchBar onHandleSearch={onHandleSearch} 
          onClearSearch={onClearSearch}/>

        <Filter/>
        {nfts.length==0 ? <Loader/> :<NFTCardTwo NFTData={nfts}/>}
        <Slider/>
        <Brand/>
      
    </div>
  )
}

export default Search
