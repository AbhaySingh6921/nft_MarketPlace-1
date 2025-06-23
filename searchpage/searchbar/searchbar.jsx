'use client'
import React, { useEffect,useState } from 'react'
//internal import
import Style from './searchbar.module.css';
import { BsSearch, BsArrowRight } from 'react-icons/bs';
const SearchBar = ({onClearSearch,onHandleSearch}) => {
    const [search,setSearch]=useState("");
    const [searchItem,setsearchItem]=useState(search);
    
    useEffect(()=>{
      const timer=setTimeout(()=>setSearch(searchItem),1000);
      return()=>clearTimeout(timer);
    },[searchItem]);

    useEffect(()=>{
      if(search){
        onHandleSearch(search);
      }
      else{
        onClearSearch();
      }
    },[search]);//only run when search change




  return (



    <div className={Style.SearchBar}>
        <div className={Style.SearchBar_box}>
           <BsSearch className={Style.SearchBar_icon}/>
              <input type="text" placeholder='Type your keyword.....'
               onChange={(e)=>setsearchItem(e.target.value)}
               value={searchItem}
              />
              <BsArrowRight className={Style.SearchBar_icon}/> 
         </div>
      
    </div>
  )
}

export default SearchBar
