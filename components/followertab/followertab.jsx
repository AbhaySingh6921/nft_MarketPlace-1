'use client'
import React, { useState } from 'react'
import { RiUserFollowFill, RiAwardLine } from 'react-icons/ri'
import FollowerTabCard from './followertabcard/followertabcard'
import Style from './followertab.module.css' 
import images from '../../img';

const FollowerTab = ({TopCreator}) => {
  const [popular, setPopular] = useState(true)
  const [following, setFollowing] = useState(false)
  const [news, setNews] = useState(false)

  // const popularArray = [
  //   {
  //     background :images.creatorbackground1,
  //     user:images.user1,
  //   },
  //    {
  //     background :images.creatorbackground2,
  //     user:images.user2,
  //   },
  //    {
  //     background :images.creatorbackground3,
  //     user:images.user3,
  //   },
  //    {
  //     background :images.creatorbackground4,
  //     user:images.user4,
  //   },
  //    {
  //     background :images.creatorbackground10,
  //     user:images.user6,
  //   },
  // ]
  const followingArray = [
  {
    background: images.creatorbackground10,
    user: images.user9,
    seller: "sdfghjkl"
  },
  {
    background: images.creatorbackground9,
    user: images.user8,
    seller: "sdfghjkl"
  },
  {
    background: images.creatorbackground8,
    user: images.user3,
    seller: "sdfghjkl"
  },
  {
    background: images.creatorbackground7,
    user: images.user4,
    seller: "sdfghjkl"
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
    seller: "sdfghjkl"
  }
];

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

  const openPopular = () => {
    if (!popular) {
      setPopular(true)
      setFollowing(false)
      setNews(false)
    }
  }

  const openFollowing = () => {
    if (!following) {
      setPopular(false)
      setFollowing(true)
      setNews(false)
    }
  }

  const openNews = () => {
    if (!news) {
      setPopular(false)
      setFollowing(false)
      setNews(true)
    }
  }

  

  return (
    <div className={Style.followerTab}>
      <h2>Top Creator List....</h2>
      <div className={Style.followerTab_tabs}>
        <div className={Style.followerTab_tabs_btn}>
          <button onClick={openPopular}>
            <RiUserFollowFill /> Popular
          </button>
          <button onClick={openFollowing}>
            <RiUserFollowFill /> Following
          </button>
          <button onClick={openNews}>
            <RiAwardLine /> News
          </button>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {TopCreator.map((el, i) => (
            <FollowerTabCard key={`popular-${i}`} i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.followerTab_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard key={`following-${i}`} i={i} el={el} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.followerTab_box}>
          {newsArray.map((el, i) => (
            <FollowerTabCard key={`news-${i}`} i={i} el={el} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become Author</a>
        </div>
      </div>
    </div>
  )
}

export default FollowerTab
