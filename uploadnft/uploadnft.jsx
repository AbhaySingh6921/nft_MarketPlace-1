'use client'
import React, { useState } from 'react'
import formStyle from './uploadnft.module.css'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md'
import { FaPercent } from 'react-icons/fa'
import { AiTwotonePropertySafety } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import Image from 'next/image'
import images from '../img'
import { Button } from '../components/componentindex'
import { DropZone } from './uploadnftindex'
import {useRouter} from 'next/router'

const UpLoadNFT = ({ uploadToIPFS,CreateNFT}) => {
  const[price,setPrice]=useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [catergory, setCategory] = useState("");
  const [properties, setProperties] = useState("");
  const [image, setImage] = useState(null);
  

  const categoryArray = [
    { name: "Art", category: images.nft_image_1 },
    { name: "Digital", category: images.nft_image_2 },
    { name: "Sports", category: images.nft_image_3 },
    { name: "Music", category: images.nft_image_1 },
    { name: "Photography", category: images.nft_image_2 },
  ]
  const router=useRouter;

  return (
    <div className={formStyle.upload}>
      <DropZone
        title="JPG,PNG,WEBM,MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media on your device"
        name={name}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={catergory}
        setImage={setImage}
        properties={properties}
         uploadToIPFS={ uploadToIPFS}
      />

      <div className={formStyle.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="abhay"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>

        <p className={formStyle.upload_box_input_para}>
          Ciscrpyt will include the link to this website on the item's detail page, so make sure it is an active URL.
        </p>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="6"
            placeholder="something about yourself"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>The description will be included on the item's detail pages underneath its image. Markdown syntax is supported.</p>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>
          <p className={formStyle.upload_box_input_para}>
            Choose an existing collection or create a new one
          </p>

          <div className={formStyle.upload_box_slider_div}>
            {categoryArray.map((el, i) => (
              <div
                className={`${formStyle.upload_box_slider} ${active === i + 1 ? formStyle.active : ""}`}
                key={i}
                onClick={() => {
                  setActive(i + 1);
                  setCategory(el.name);
                }}
              >
                <div className={formStyle.upload_box_slider_box}>
                  <Image
                    src={el.category.src}
                    alt="background image"
                    width={70}
                    height={70}
                    className={formStyle.upload_box_slider_box_img_img}
                  />
                  <div className={formStyle.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">Size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.Form_box_input}>
            <label htmlFor="properties">Properties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="properties"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="price">price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className={formStyle.upload_box_btn}>
            <Button btnName="Upload" handleClick={async()=>CreateNFT(name,
              price,
              image,
              description, 
              // website,
              // royalties,
              // fileSize,
              // catergory
              ) }/>
              <Button  
              btnName="preview"
              handleClick={()=>{}}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpLoadNFT
