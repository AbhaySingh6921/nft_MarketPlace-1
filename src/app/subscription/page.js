import React from 'react'
import Style from '../../../style/subscription.module.css'
import Subscription from '../../../Subscription/subscription'
const Page = () => {

   const subscriptionArray=[
    {
      id: 1,
      plan: 'Basic Plan',
      price: '$10/month',
      service: ['Feature 1', 'Feature 2', 'Feature 3'],
      info:"This is the basic plan that includes essential service for individuals or small teams.",
      popular:""
    },
    {
      id: 2,
      plan: 'Standard Plan',
      price: '$20/month',
      service: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      info:"This plan is designed for growing teams that need more features and support.",
      popular:""
    },
    {
      id: 3,
      plan: 'Premium Plan',
      price: '$30/month',
      service: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        info:"The premium plan offers advanced features and priority support for larger organizations.",
        popular:"Popular"
    }  
   ]

  return (
    <div className={Style.subscription}>
       <div className={Style.subscription_box}>
          <div className={Style.subscription_box_info}>
            <h1>Subscription</h1>
            <p>Pricing to fit the need of any companie size</p>
              <div className={Style.subscription_box_box}>
                {subscriptionArray.map((el,i) => (
                  <Subscription key={i+1} i={1} el={el}/>
                ))}
               </div>
           </div>
        </div>
    </div>
  ) 
}

export default Page
