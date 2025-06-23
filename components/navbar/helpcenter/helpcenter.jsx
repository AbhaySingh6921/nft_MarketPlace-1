import React from 'react';

// Internal Imports
import Style from "./helpcenter.module.css";
import Link from 'next/link';

const HelpCenter=() => {

    const helpCenter=[
        {name:"FAQ",
         link:"faq"
        },
        {name:"About Us",
         link:"aboutus"
        },
        {name:"Contact Us",
           link:"contactus" 
        },
        {name:"Login",
           link:"login" 
        },
        {name:"sign-up",
           link:"signup" 
        },
        {name:"subscription",
           link:"subscription" 
        },
    ]
    return(
        <div className={Style.box}>
            {helpCenter.map((el,i)=>(
                <div key={i+1} className={Style.helpCenter}>
                    <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
                </div>
            ))}
        </div>
    )
}
export default HelpCenter;