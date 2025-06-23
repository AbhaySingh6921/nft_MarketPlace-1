import React from 'react';

//internal import
import Style from "./discover.module.css";
import Link from 'next/link';

const Discover=() => {
    //discover navigation menu
    const discover=[
        {name:"Collections",
         link:"collections"
        },
        {name:"Search",
         link:"searchpage"
        },
        {name:"author profile",
           link:"author" 
        },
        {name:"NFT Details",
           link:"nftdetail" 
        },
        {name:"Account Setting",
           link:"Account" 
        },
        {name:"upload NFT",
           link:"uploadnft"
           
        },
        {name:"Connect Wallet",
           link:"Connect-Wallet" 
        },
        {name:"blog",
           link:"blog" 
        },
    ]
    return(
        <div>
            {discover.map((el,i)=>(
                <div key={i+1} className={Style.discover}>
                    <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
                </div>
            ))}
        </div>
    )
}
export default Discover;