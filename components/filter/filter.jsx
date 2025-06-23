
'use client'
import React ,{useState}from 'react'
import {FaFilter,FaAngleDown,FaAngleUp,FaWallet,FaMusic,FaImage,FaVideo,FaUserAlt} from "react-icons/fa";
import{AiFillCloseCircle} from "react-icons/ai";
import{MdVerified} from "react-icons/md";
import{TiTick} from "react-icons/ti";

//internal import
import Style from "./filter.module.css";

const Filter = () => {
    const[filter,setFilter]=useState(false);
    const[image,setImage]=useState(true);
    const[video,setVideo]=useState(true);
    const[music,setMusic]=useState(true);

    //function
    const openFilter=()=>{
        if(!filter){
            setFilter(true)
        }else{
            setFilter(false);
        }
    }
    const openImage=()=>{
        if(!image){
            setImage(true)
        }else{
            setImage(false);
        }
    }
    const openVideo=()=>{
        if(!video){
            setVideo(true);
        }else{
            setVideo(false);
        }
    }
    const openMusic=()=>{
        if(!music){
            setMusic(true)
        }else{
            setMusic(false);
        }
    }
   

  return (
    <div className={Style.filter}>
        <div className={Style.filter_box}>
            <div className={Style.filter_box_left}>
                <button onClick={()=>{}}>NFTs</button> 
                <button onClick={()=>{}}>Arts</button>  
                <button onClick={()=>{}}>Music</button>  
                <button onClick={()=>{}}>Sports</button>  
                <button onClick={()=>{}}>photo</button>        {/*it give all the nfts*/}
            </div>
            <div className={Style.filter_box_right}>
                <div className={Style.filter_box_right_box} onClick={()=>openFilter()}>
                    <FaFilter/>
                    <span>Filter</span> {filter ? <FaAngleDown/>:<FaAngleUp/>}
                </div>
            </div>
        </div>
        {/**here we have a menu of filter  */}
        {
            filter && (
                <div className={Style.filter_box_items}>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item}>
                            <FaWallet/> <span>0.01 eth</span>
                            <AiFillCloseCircle/>
                         </div>   

                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={()=>openImage()}> 
                            <FaImage/> <small>Images</small>
                            {image ? <AiFillCloseCircle/>:<TiTick/>}
                            
                        </div>   

                    </div>

                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={()=>openVideo()}> 
                            <FaVideo/> <small>Videos</small>
                            {video ? <AiFillCloseCircle/>:<TiTick/>}
                            
                        </div>   

                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item_trans} onClick={()=>openMusic()}> 
                            <FaMusic/> <small>Music</small>
                            {music ? <AiFillCloseCircle/>:<TiTick/>}
                            
                        </div>   

                    </div>
                    <div className={Style.filter_box_items_box}>
                        <div className={Style.filter_box_items_box_item} > 
                            <FaUserAlt/> <span>Verified</span>
                           <MdVerified/>
                            
                        </div>   

                    </div>
                </div>
            )
        }

      
    </div>
  )
}

export default Filter;
