'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Style from './form.module.css';
import { useDropzone } from 'react-dropzone';
import { HiOutlineMail } from 'react-icons/hi';
import {
  MdOutlineHttp,
  MdOutlineContentCopy,
} from 'react-icons/md';
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialTwitterCircular,
} from 'react-icons/ti';
import { Button } from '../../components/componentindex';
import images from '../../img';

const Form = () => {
  const [preview, setPreview] = useState(images.user1);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 500000,
  });

  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="abhay"
              className={Style.Form_box_input_userName}
            />
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="email" />
            </div>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea
              cols="30"
              rows="6"
              placeholder="something about your self"
            ></textarea>
          </div>

          <div className={Style.Form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>

          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://abhay" />
              </div>
            </div>

            <div className={Style.Form_box_input}>
              <label htmlFor="github">GitHub</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialGithub />
                </div>
                <input type="text" placeholder="http://abhay" />
              </div>
            </div>

            <div className={Style.Form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitterCircular />
                </div>
                <input type="text" placeholder="http://abhay" />
              </div>
            </div>

            <div className={Style.Form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://abhay" />
              </div>
            </div>

            <div className={Style.Form_box_input}>
              <label htmlFor="wallet">Wallet Address</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_icon}>
                  <MdOutlineContentCopy />
                </div>
                <input
                  type="text"
                  placeholder="0xt317356153713781371378y3217827"
                />
               
              </div>
            </div>

            

            <div className={Style.Form_box__btn}>
              <Button
                btnName="Upload Profile"
                handleClick={() => {}}
                className={Style.button}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
