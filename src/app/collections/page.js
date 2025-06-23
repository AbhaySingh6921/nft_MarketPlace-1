import React from 'react'
//internal import
import Style from '../../../style/collection.module.css';
import images from '../../../img';
import { Banner,CollectionProfile,NFTCardTwo } from '../../../collectionpage/collectionindex';
import {Slider,Brand} from '../../../components/componentindex'
import Filter from '../../../components/filter/filter';

const Collection = () => {

  const collectionArray=[
    images.nft_image_1,images.nft_image_2,
  ];
  return (
    <div className={Style.collection}>
       <Banner bannerImage={images.creatorbackground1}/>
       <CollectionProfile />
       <Filter/>
       <NFTCardTwo NFTData={collectionArray}/>
       
       <Slider/>
       <Brand/>
       
       
    </div>
  )
}

export default Collection
