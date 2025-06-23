import React,{useState} from 'react'
import Style from './authornftcardbox.module.css'
import Image from 'next/image'
import images from '../../img'
import { NFTCardTwo} from '../../collectionpage/collectionindex'
import FollowerTabCard from '../../components/followertab/followertabcard/followertabcard'

const AuthorNFTCardBox = ({collectiable,created,like,followers,following,nfts,mynfts}) => {
    const collectiablesArray=[
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        
    ]
    const createdArray=[
       
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_1,
    ]
    const likeArray=[
       
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]
     const followersArray = [ 
        {
        background: images.creatorbackground4,
        user:images.user4,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground5,
        user:images.user5,
        seller:"dfghjkl"
      },        
        {
        background: images.creatorbackground1,
        user:images.user1,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground2,
        user:images.user2,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground3,
        user:images.user3,
        seller:"dfghjkl"
      },
      
     ] 

    const followingArray=[
      {
        background: images.creatorbackground1,
        user:images.user1,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground2,
        user:images.user2,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground3,
        user:images.user3,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground4,
        user:images.user4,
        seller:"dfghjkl"
      },
      {
        background: images.creatorbackground5,
        user:images.user5,
        seller:"dfghjkl"
      },

    ] 
    
  return (
    <div className={Style.AuthorNFTCardBox}>
         {collectiable && <NFTCardTwo NFTData={mynfts||[]}/>}
         {created && <NFTCardTwo NFTData={nfts|| []}/>}
         {like && <NFTCardTwo NFTData={likeArray}/>}
         {followers &&(
            <div>
                {followersArray.map((el, i) => (
                    <FollowerTabCard key={`follower-${i}`} el={el} i={i+1} />
                ))}
            </div>
         )}
         {following && (
            <div>
                {followingArray.map((el, i) => (
                    <FollowerTabCard key={`following-${i}`} el={el} i={i+1} />
                ))}
            </div>
         )}
        
    </div>
  )
}

export default AuthorNFTCardBox
