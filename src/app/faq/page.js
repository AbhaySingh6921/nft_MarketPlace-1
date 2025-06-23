'use client'
import React from 'react';
import { useState } from 'react';
import styles from '../../../style/faq.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is an NFT?",
      answer: "NFT stands for Non-Fungible Token. It's a unique digital asset stored on a blockchain that represents ownership of a specific item or piece of content, such as artwork, music, videos, or collectibles."
    },
    {
      question: "How do I purchase an NFT?",
      answer: "To purchase an NFT, you'll need a cryptocurrency wallet with funds (usually ETH for Ethereum-based NFTs). Connect your wallet to our marketplace, browse the available NFTs, and place your bid or purchase at the listed price."
    },
    {
      question: "What blockchain does your marketplace use?",
      answer: "Our marketplace currently operates on the Ethereum blockchain, but we plan to support additional blockchains like Polygon and Solana in the near future."
    },
    {
      question: "How do gas fees work?",
      answer: "Gas fees are transaction fees paid to miners on the Ethereum network to process your transactions. These fees fluctuate based on network congestion. You'll need ETH in your wallet to cover these fees when minting, buying, or transferring NFTs."
    },
    {
      question: "Can I resell NFTs I purchase?",
      answer: "Yes! After purchasing an NFT, you can list it for sale on our marketplace. You set your own price and earn royalties on secondary sales if the creator has enabled them."
    },
    {
      question: "How do I ensure I'm buying authentic NFTs?",
      answer: "Always verify the creator's identity through their verified social media accounts. Check the NFT's contract address and look for blue checkmarks or verification badges on our platform. Beware of unauthorized copies."
    }
  ];

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div 
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>
              <span className={styles.faqToggle}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;