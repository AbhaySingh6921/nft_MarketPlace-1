'use client'
import React,{useState}from 'react'
import Style from './authortaps.module.css'
import Image from 'next/image'
import { TiArrowSortedDown,TiArrowSortedUp,TiTick } from 'react-icons/ti'





const AuthorTaps = ({ setCollectiable, setCreated, setLike, setFollowers, setFollowing }) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created Bt Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const opendropDrownList = ()=> {
    setOpenList(!openList);
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Listed NFTs") {
      setActiveBtn(1);
      setCollectiable(true);
      setCreated(false);
      setLike(false);
      setFollowers(false);
      setFollowing(false);
    } else if (btnText == "Own NFTs") {
      setActiveBtn(2);
      setCollectiable(false);
      setCreated(true);
      setLike(false);
      setFollowers(false);
      setFollowing(false);
    } else if (btnText == "Like") {
      setActiveBtn(3);
      setCollectiable(false);
      setCreated(false);
      setLike(true);
      setFollowers(false);
      setFollowing(false);
    } else if (btnText == "Follower") {
      setActiveBtn(4);
      setCollectiable(false);
      setCreated(false);
      setLike(false);
      setFollowers(true);
      setFollowing(false);
    } else if (btnText == "Following") {
      setActiveBtn(5);
      setCollectiable(false);
      setCreated(false);
      setLike(false);
      setFollowers(false);
      setFollowing(true);
    }
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button className={`${activeBtn == 1 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Listed NFTs{" "}</button>
            <button className={`${activeBtn == 2 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Own NFTs{" "}</button>
            <button className={`${activeBtn == 3 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Like{" "}</button>
            <button className={`${activeBtn == 4 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Follower{" "}</button>
            <button className={`${activeBtn == 5 ? Style.active : ""}`} onClick={(e) => openTab(e)}>Following{" "}</button>
          </div>
        </div>

        <div className={Style.AuthorTaps_box_right}>
          <div className={Style.AuthorTaps_box_right_para} onClick={() => opendropDrownList()}>
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>

          {openList && (
            <div className={Style.AuthorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  key={el}
                  className={Style.AuthorTaps_box_right_list_item}
                  onClick={() => setSelectedMenu(el)}
                >
                  <p>{el}</p>
                  <span>{selectedMenu === el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
