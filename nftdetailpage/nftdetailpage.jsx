import React from 'react'
import Style from './nftdetailpage.module.css'
import { NFTDescription,NFTDeatilImg,NFTTabs } from './nftdetailpageindex'

const NFTDetailPage = ({nft}) => {
  return (
    <div className={Style.NFTDetailPage}>
        <div className={Style.NFTDetailPage_box}>
          <NFTDeatilImg nft={nft}/>
            <NFTDescription nft={nft}/>
            
            
        </div>
      
    </div>
  )
}

export default NFTDetailPage
