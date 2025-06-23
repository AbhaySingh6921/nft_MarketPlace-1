'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Style from '../../../style/account.module.css';
import { useDropzone } from 'react-dropzone';
import images from '../../../img';
import Form from '../../../accountpage/form/form';

const Page = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFileUrl(previewUrl);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 500000,
  });

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile Setting</h1>
        <p>You can set preferred display name, and create your profile URL along with other personal settings</p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={fileUrl || images.user1}
            alt="account upload"
            width={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>

        <div className={Style.account_box_form}>
          <Form profileImage={fileUrl} />
        </div>
      </div>
    </div>
  );
};

export default Page;
