'use client';
import React, { useState ,useEffect,useContext} from 'react';
import Image from 'next/image';
import images from '../../../img';

import Style from '../../../style/connectwallet.module.css';
//smart contract
import { NFTMarketPlaceContext } from '../../../context/NFTMarketPlaceContext';
const Page = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const{ currentAccount, ConnectWallet}=useContext(NFTMarketPlaceContext)

  const providerArray = [
    {
      provider: images.provider1,
      name: 'MetaMask',
    },
    {
      provider: images.provider2,
      name: 'Coinbase Wallet',
    },
    {
      provider: images.provider3,
      name: 'WalletConnect',
    },
    {
      provider: images.provider4,
      name: 'Rainbow',
    },
  ];

  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p>
          Connect with one of our available wallet providers or create a new
          one.
        </p>
      </div>

      <div className={Style.connectWallet_box_provider}>
        {providerArray.map((el, i) => (
          <div
            key={i}
            className={`${Style.connectWallet_box_provider_item} ${
              activeBtn === i + 1 ? Style.active : ''
            }`}
            onClick={() => (setActiveBtn(i + 1),ConnectWallet())}
          >
            <Image
              src={el.provider}
              alt={el.name}
              width={50}
              height={50}
              className={Style.connectWallet_box_provider_item_img}
            />
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
