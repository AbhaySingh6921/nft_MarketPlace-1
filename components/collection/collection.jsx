'use client'
import React ,{useState,useEffect} from 'react'
import Style from './collection.module.css';
import { BsFillAlarmFill,BsFillCalendarDateFill,BsCalendar3} from 'react-icons/bs';

import DayComponents  from './daycomponents/daycomponents.jsx';
import images from '../../img';

const Collection = () => {
    const[popular,setPopular]=useState(true);
    const[following,setFollowing]=useState(false);
    const[news,setNews]=useState(false);

    const popularArray = [
        {
          background :images.creatorbackground1,
          user:images.user1,
        },
         {
          background :images.creatorbackground2,
          user:images.user2,
        },
         {
          background :images.creatorbackground3,
          user:images.user3,
        },
         {
          background :images.creatorbackground4,
          user:images.user4,
        },
         {
          background :images.creatorbackground10,
          user:images.user6,
        },
      ]
      const followingArray = [
        {
          background :images.creatorbackground10,
          user:images.user9,
        },
         {
          background :images.creatorbackground9,
          user:images.user8,
        },
         {
          background :images.creatorbackground8,
          user:images.user3,
        },
         {
          background :images.creatorbackground7,
          user:images.user4,
        },
         {
          background :images.creatorbackground6,
          user:images.user6,
        },
      ]
      const newsArray = [{
          background :images.creatorbackground6,
          user:images.user1,
        },
         {
          background :images.creatorbackground2,
          user:images.user2,
        },
         {
          background :images.creatorbackground1,
          user:images.user3,
        },
         {
          background :images.creatorbackground8,
          user:images.user4,
        },
         {
          background :images.creatorbackground10,
          user:images.user6,
        },]
     
    const openPopular=()=>{
        if(!popular){
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    }
     const openFollowing=()=>{
        if(!following){
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    }
     const openNews=()=>{
        if(!news){
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    }

  return (
    <div className={Style.collection}>
        <div className={Style.collection_title}>
            <h2>Top List creator</h2>
            <div className={Style.collection_collections}>
                <div className={Style.collection_collections_btn}>
                    <button onClick={()=>openPopular()}>
                        <BsFillAlarmFill/> Last 24 hour
                    </button>
                    <button onClick={()=>openFollowing()}>
                        <BsCalendar3/> Last 7 day
                    </button>
                    <button onClick={()=>openNews()}>
                        <BsFillCalendarDateFill/> Last 30 day
                    </button>
                </div>
            </div>
        </div>
        {
            popular && (
                <div className={Style.collection_box}>
                    {popularArray.map((el,i)=>(
                       <DayComponents key={`${i}-${el.background}-${el.user}`} i={i} el={el} />



                    ))}
                </div>
            ) 
        }
         {
            following && (
                <div className={Style.collection_box}>
                    {followingArray.map((el,i)=>(
                       <DayComponents key={`${i}-${el.background}-${el.user}`} i={i} el={el} />



                    ))}
                </div>
            ) 
        }
         {
            news && (
                <div className={Style.collection_box}>
                    {newsArray.map((el,i)=>(
                       <DayComponents key={`${i}-${el.background}-${el.user}`} i={i} el={el} />



                    ))}
                </div>
            ) 
        }
    </div>
  )
}

export default Collection
