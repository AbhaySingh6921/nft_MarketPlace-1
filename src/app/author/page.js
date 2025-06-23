'use client'
import React,{useState,useEffect,useContext}from 'react'

import Style from '../../../style/author.module.css'
import {Banner,NFTCardTwo} from '../../../collectionpage/collectionindex'
import {Brand,Title} from '../../../components/componentindex'
import images from '../../../img'
import {AuthorProfileCard,AuthorTaps,AuthorNFTCardBox} from '../../../authorpage/authorindex'
 import FollowerTabCard from '../../../components/followertab/followertabcard/followertabcard'

 //smart contract
 import { NFTMarketPlaceContext } from '../../../context/NFTMarketPlaceContext'

const Author = () => {
  //smart cpntract
  const {fetchMyNFTOrListedNFT ,currentAccount}=useContext(NFTMarketPlaceContext);
   
  const followersArray = [ 
          {
          background: images.creatorbackground4,
          user:images.user4,
          seller:"sdfghjkl;"
        },
        {
          background: images.creatorbackground5,
          user:images.user5,
           seller:"sdfghjkl;"
        },        
          {
          background: images.creatorbackground1,
          user:images.user1,
           seller:"sdfghjkl;"
        },
        {
          background: images.creatorbackground2,
          user:images.user2,
           seller:"sdfghjkl;"
        },
        {
          background: images.creatorbackground3,
          user:images.user3,
           seller:"sdfghjkl;"
        },
        
       ] 
   const [collectiable, setCollectiable] =useState(true);
    const [created, setCreated] =useState(false);
    const [like, setLike] =useState(false);
    const[followers, setFollowers] = useState(false);
    const [following, setFollowing] = useState(false);

    const[nfts,setNFTS]=useState([]);
    const[mynfts,setMyNFTS]=useState([]);

    //smart contract
   useEffect(() => {
      fetchMyNFTOrListedNFT("fetchItemsListed").then((items) => {setNFTS(items);
      });
  },[]);

    useEffect(() => {
      fetchMyNFTOrListedNFT("fetchMyNFT").then((items) => {setMyNFTS(items);
      });
  },[]);
  
    return (
    <div>
      <Banner bannerImage={images.creatorbackground10}/>
      <AuthorProfileCard currentAccount={currentAccount}/>
      <AuthorTaps setCollectiable={setCollectiable} setCreated={setCreated} setLike={setLike} setFollowers={setFollowers} setFollowing={setFollowing}  />

     
      <AuthorNFTCardBox 
        collectiable={collectiable} 
        created={created} 
        like={like} 
        followers={followers} 
        following={following} 
        nfts={nfts}
        mynfts={mynfts}
      />

     
      <Title heading="Popular Creators" paragraph="Explore the most popular creators on the platform" />
      <div className={Style.authore_box}>
        {followersArray.map((el,i)=>(
           <FollowerTabCard key={i} i={i+1} el={el}/>
        ))}
      </div>
      

      <Brand/>

      {/* { popularArray.map((el, i) => (
        <FollowerTabCard key={i} el={el} i={i} />
      )) } */}
      

      
    </div>
  )
}

export default Author
