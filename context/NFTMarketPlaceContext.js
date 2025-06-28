'use client';
import React, { useState, useEffect, createContext } from 'react';
import Web3Modal from 'web3modal';
// Updated ethers import for v6:
import { BrowserProvider, Contract, utils, parseUnits, formatUnits } from "ethers";
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Internal imports
import { NFTMarketPlaceAddress, NFTMarketPlaceABI } from './Constants';

// Fetching contract
const fetchContract = (signerOrProvider) =>
  new Contract(NFTMarketPlaceAddress, NFTMarketPlaceABI, signerOrProvider);

// CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is not installed!");
      return;
    }

    const web3Modal = new Web3Modal({ cacheProvider: false });
    const connection = await web3Modal.connect();
    const provider = new BrowserProvider(connection);
    const signer = await provider.getSigner();
    return fetchContract(signer);
  } catch (error) {
    console.log("Contract connection error ❌", error);
    return null;
  }
};

export const NFTMarketPlaceContext = createContext();

export const NFTMarketPlaceProvider = ({ children }) => {
  const titledata = "Discover, Buy, and Sell NFTs on Our Marketplace";
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const router = useRouter();

  //----------- Wallet connection check
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) {
        setOpenError(true);
        setError('Install metamarks');
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_accounts" }); // silent
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
        console.log("Wallet connected ✅:", accounts[0]);
      } else {
        setOpenError(true);
        setError('not found any account');
      }
    } catch (err) {
      setOpenError(true);
      setError('error in checking wallet');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  //--------------- FUNCTION TO CONNECT WALLET
  const ConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        setOpenError(true);
        setError('Please install MetaMask');
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" }); // opens popup
      setCurrentAccount(accounts[0]);
      console.log("Wallet connected via button ✅:", accounts[0]);
    } catch (err) {
      if (err.code === 4001) {
        console.log("User rejected connection request");
        return;
      }
      setOpenError(true);
      setError("wallet connection error");
    }
  };

  // --------FUNCTION TO UPLOAD FILES TO IPFS
  const JWT = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYTRmNzM2MC04NDUwLTQ2ODAtYWYzOC05YzBmNDk2NGQyNmMiLCJlbWFpbCI6ImFiaGF5c2luZ2gxNzc3MkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMjg0ZWQxZWJhYzEzZDlkZmE0ODkiLCJzY29wZWRLZXlTZWNyZXQiOiI2NjE5ZjkzZmEzYTdiZmRkNjU0ZDM2ZDBmNmRlMjBiOTNmNWQwNzg0OWVlZWVlNDFiOTlmMGU5NGIyZDExZDBkIiwiZXhwIjoxNzgwOTQ4ODY2fQ.j6sN_4d_M5zNxsAZX5wyET4x25Y7UdNh-0nFEq-8lQE"; // truncated for brevity
  const uploadToIPFS = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: JWT,
          },
        }
      );
      const ipfsHash = res.data.IpfsHash;
      const url = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
      console.log("Uploaded to IPFS ✅", url);
      return url;
    } catch (err) {
      setOpenError(true);
      setError('Pinata upload error ❌');
      return null;
    }
  };

  //----FUNCTION TO CREATE A NFT
  const CreateNFT = async (name, price, image, description) => {
    try {
      if (!name || !description || !price || !image) {
        setOpenError(true);
        setError('Missing data');
        return;
      }

      // 1. Create metadata JSON
      const metadata = JSON.stringify({ name, price, image, description });
      // 2. Convert metadata to file/blob
      const metaFile = new Blob([metadata], { type: "application/json" });
      // 3. Upload metadata JSON file using uploadToIPFS helper
      const metadataUrl = await uploadToIPFS(metaFile);
      if (!metadataUrl) {
        setOpenError(true);
        setError('Failed to Upload metadata');
        return;
      }
      // 4. Call smart contract to create NFT
      const transaction = await CreateSale(metadataUrl, price);
      if (transaction) {
        await transaction.wait();
        console.log("NFT created successfully ✅");
        router.push('/searchpage');
      }
      return metadataUrl;
    } catch (err) {
      setOpenError(true);
      setError('error creating nfts');
      alert("Something went wrong");
      return null;
    }
  };

  // function to create sale -> used in CreateNFT
  const CreateSale = async (Url, formInputPrice, isReselling, id) => {
    try {
      const price = parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      const listingPrice = await contract.getListingPrice();
      return !isReselling
        ? await contract.CreateToken(Url, price, { value: listingPrice })
        : await contract.ReSellToken(id, price, { value: listingPrice });
    } catch (err) {
      setOpenError(true);
      setError('Error creating sale');
    }
  };

  // FETCH ALL THE NFTs
  const fetchNFTs = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const contract = fetchContract(provider);
      const data = await contract.fetchmarketitem();

      const items = await Promise.all(
        data.map(async (item) => {
          const tokenId = item.tokenId ?? item[0];
          const priceRaw = item.price ?? item[3];
          if (
            !tokenId ||
            !priceRaw ||
            tokenId.toString() === "0" ||
            priceRaw.toString() === "0"
          ) {
            return null;
          }
          const tokenURI = await contract.tokenURI(tokenId);
          let meta = {};
          try {
            meta = (await axios.get(tokenURI)).data;
          } catch (err) {
            console.warn("Could not fetch metadata for token:", tokenId, err);
          }
          let price = "0";
          try {
            price = formatUnits(priceRaw.toString(), "ether");
          } catch {
            price = "0";
          }
          return {
            price,
            tokenId: Number(tokenId),
            seller: item.seller ?? item[1],
            owner: item.owner ?? item[2],
            image: meta.image,
            description: meta.description,
            name: meta.name,
            tokenURI,
          };
        })
      );
      return items.filter(Boolean);
    } catch (err) {
      setOpenError(true);
      setError('Error fetching NFTS');
      return [];
    }
  };
  useEffect(() => { fetchNFTs(); }, []);

  //-----------------------------------------
  function safeFormatUnits(value, decimals = "ether") {
    try {
      if (value == null) return "";
      // Changed this line for ethers v6:
      return formatUnits(value.toString(), decimals);
    } catch {
      return "";
    }
  }

  // FETCH MY NFT OR LISTED NFTs
  const fetchMyNFTOrListedNFT = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data = type === "fetchItemsListed"
        ? await contract.fetchItemListed()
        : await contract.fetchMyNFT();

      return Promise.all(
        data.map(async ({ tokenId, seller, owner, price }) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const { image, description, name } = (await axios.get(tokenURI)).data;
          return {
            price: safeFormatUnits(price, "ether"),
            tokenId: Number(tokenId),
            seller,
            owner,
            image,
            description,
            name,
            tokenURI,
          };
        })
      );
    } catch (err) {
      setOpenError(true);
      setError('Error fetching my NFTs');
      return [];
    }
  };

  //---BUY NFTs
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = parseUnits(nft.price.toString(), "ether");
      const transaction = await contract.CreateMarketsale(nft.tokenId, { value: price });
      await transaction.wait();
      router.push("/author");
    } catch (err) {
      setOpenError(true);
      setError('Error for buying nfts');
    }
  };

  return (
    <NFTMarketPlaceContext.Provider
      value={{
        titledata,
        uploadToIPFS,
        checkIfWalletIsConnected,
        ConnectWallet,
        CreateNFT,
        fetchMyNFTOrListedNFT,
        fetchNFTs,
        buyNFT,
        connectingWithSmartContract,
        currentAccount,
        CreateSale,
        openError,
        error,
        setOpenError,
      }}
    >
      {children}
    </NFTMarketPlaceContext.Provider>
  );
};
