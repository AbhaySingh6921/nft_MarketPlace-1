'use client'
import React, { useState, useCallback } from 'react';
import Style from './dropzone.module.css';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import images from '../../img';
import { UpLoadNFT } from '../uploadnftindex';

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToIPFS,
  setImage
}) => {
  const [fileUrl, setFileUrl] = useState(null);

 const onDrop = useCallback(async (acceptedFiles) => {
  const file = acceptedFiles[0];

  // Preview locally before uploading to IPFS
  const previewUrl = URL.createObjectURL(file);
  setFileUrl(previewUrl); // 👈 For local preview

  // Upload to IPFS and get final URL
  const ipfsUrl = await uploadToIPFS(file);

  if (ipfsUrl) {
    setImage(ipfsUrl); // 👈 Store the IPFS URL, not the File
  }
}, [uploadToIPFS, setImage]);


  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webm'],
      'video/webm': ['.webm']
    },
    maxSize: 100 * 1024 * 1024 // 100MB
  });

  const defaultImage = Image?.src || '/default.png';

  return (
    <div className={Style.DropZone}>
      <div className={Style.DropZone} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.DropZone_box_input}>
          <p>{title}</p>
          <div className={Style.DropZone_box_input_img}>
            {fileUrl && (
               <Image
                 src={fileUrl}
                 alt="Uploaded NFT"
                 width={100}
                 height={100}
               />
             )}
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>

      {fileUrl && (
        <aside className={Style.DropZone_box_aside}>
          <div className={Style.DropZone_box_aside_box}>
           <Image
            src={fileUrl || '/default.png'}
            alt="nft image"
            width={100}
            height={100}
          />

            <div className={Style.DropZone_box_aside_box_preview}>
              <div className={Style.DropZone_box_aside_box_preview_one}>
                <p><span>NFT NAME:</span> {name || " "}</p>
                <p><span>Website:</span> {website || " "}</p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_two}>
                <p><span>Description:</span> {description || " "}</p>
              </div>
              <div className={Style.DropZone_box_aside_box_preview_three}>
                <p><span>Royalties:</span> {royalties || "  "}</p>
                <p><span>File Size:</span> {fileSize || " "}</p>
                <p><span>Category:</span> {category || " "}</p>
                <p><span>Properties:</span> {properties || " "}</p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
