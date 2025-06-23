import React from 'react'

import Image from 'next/image'
import Style from '../../../style/aboutus.module.css'
import images from '../../../img';
import { Brand } from '../../../components/componentindex';
const Page = () => {

    const founderArray=[
        {
            name: "John Doe",
            position: "Founder & CEO",
            image: images.user1,
            info: "John is a tech enthusiast with over 10 years of experience in the industry. He founded this platform to connect people and create a community."
        },
        {
            name: "Jane Smith",
            position: "Co-Founder & CTO",
            image: images.user2,
            info: "Jane is a software engineer with a passion for innovation. She leads the technical team to ensure the platform runs smoothly."
        }

    ]
    const factArray = [
        {
            title: "Our Mission",
            info: "To connect people and foster community through innovative technology."
        },
        {
            title: "Our Vision",
            info: "To be the leading platform for community engagement and connection."
        },
        {
            title: "Our Values",
            info: "Integrity, Innovation, Community, and Excellence."
        }
    ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
           <div className={Style.aboutus_box_hero_left}>
            <h1>About Us</h1>
            <p>We are a team of passionate individuals dedicated to providing the best service possible. Our mission is to create a platform that connects people and fosters community.</p>
            <p>With years of experience in the industry, we strive to innovate and improve continuously. Our goal is to make a positive impact on the lives of our users.</p>
            </div>
            <div className={Style.aboutus_box_hero_right}>
                <Image src={images.hero} alt="About Us" width={500} height={500} className={Style.aboutus_box_hero_right_image} />
            </div>
        </div>
        <div className={Style.aboutus_box_title}>
            <h2>Founder</h2>
            <p>Meet our founder, a visionary leader with a passion for technology and community building. With a background in software development and entrepreneurship, they have dedicated their career to creating platforms that empower users and foster connections.</p>
        </div>
        <div className={Style.aboutus_box_founder}>
            <div className={Style.aboutus_box_founder_box}>
              {founderArray.map((el, i) => (
                <div key={i} className={Style.aboutus_box_founder_box_img}>
                  <Image src={el.image} alt={el.name} width={100} height={100} className={Style.aboutus_box_founder_box_item_img_img} />
                  <h3>{el.name}</h3>
                  <p>{el.position}</p>
                  <p>{el.info}</p>
                </div>
              ))}
             </div>
        </div>
        <div className={Style.aboutus_box_fact}>
            <div className={Style.aboutus_box_fact_box}>
             { factArray.map((el,i) =>(
                <div  className={Style.aboutus_box_fact_box_info}>
                  <h3>{el.title}</h3>
                  <p>{el.info}</p>
                </div>
             ))}
            </div>
        </div>
      </div>
      <Brand/>
    </div>
  )
}

export default Page
