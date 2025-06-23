'use client';
import React, { useState, useContext, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';

import Style from '../../../style/reselltoken.module.css';
import { Button } from '../../../components/componentindex';
import { NFTMarketPlaceContext } from '../../../context/NFTMarketPlaceContext';

const Page = () => {
  const { CreateSale } = useContext(NFTMarketPlaceContext);
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const rawTokenURI = searchParams.get('tokenURI');
  const tokenURI = rawTokenURI ? decodeURIComponent(rawTokenURI) : '';

  const fetchNFT = async () => {
    if (!tokenURI) {
      console.warn('Token URI is not ready yet.');
      return;
    }

    try {
      const { data } = await axios.get(tokenURI);
      setPrice(data.price || '');
      setImage(data.image || '');
    } catch (err) {
      console.error('Failed to fetch tokenURI:', tokenURI, err);
    }
  };

  useEffect(() => {
    fetchNFT();
  }, [tokenURI]);

  const resell = async () => {
    await CreateSale(tokenURI, price, true, id);
    console.log("your nft place on market");
    router.push('/author');
  };

  return (
    <div className={Style.resellContainer}>
      <div className={Style.resellForm}>
        <h2 className={Style.formTitle}>Resell Your NFT</h2>

        <div className={Style.formGroup}>
          <label htmlFor="price">Price (ETH)</label>
          <input
            type="number"
            id="price"
            name="price"
            min="1"
            placeholder="Enter resale price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className={Style.resellToken_box_image}>
          {image && (
            <Image src={image} alt="resell nft" width={200} height={200} />
          )}
        </div>

        <div className={Style.resellToken_box_btn}>
          <Button btnName="Resell NFT" handleClick={resell} />
        </div>
      </div>
    </div>
  );
};

export default Page;
