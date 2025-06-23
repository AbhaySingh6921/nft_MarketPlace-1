'use client'
import React, { useState, useContext, useEffect } from 'react'
import Style from '../../../style/nftdetailpage.module.css'
import { useRouter } from 'next/navigation' // Note: Changed from 'next/router' to 'next/navigation'

import { Button, Category, Brand } from '../../../components/componentindex'
import NFTDetailPage from '../../../nftdetailpage/nftdetailpage'

//smart contract section
import { NFTMarketPlaceContext } from '../../../context/NFTMarketPlaceContext'

const NFTDetails = () => {
  const { currentaccount } = useContext(NFTMarketPlaceContext);
  const [nft, setNFT] = useState({
    image: "",
    tokenId: "",
    seller: "",
    owner: "",
    price: "",
    name: "",
    description: "",
     tokenURI: "",
  });
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.location.search) {
      const queryParams = new URLSearchParams(window.location.search);
      const nftData = {
        image: queryParams.get('image') || "",
        tokenId: queryParams.get('tokenId') || "",
        seller: queryParams.get('seller') || "",
        owner: queryParams.get('owner') || "",
        price: queryParams.get('price') || "",
        name: queryParams.get('name') || "",
        description: queryParams.get('description') || "",
        tokenURI: queryParams.get('tokenURI') || "",
      };
      setNFT(nftData);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or your custom loading component
  }

  return (
    <div>
      <NFTDetailPage nft={nft} />
      <Category />
      <Brand />
    </div>
  )
}

export default NFTDetails