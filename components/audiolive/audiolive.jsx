import React from 'react'
import AudioCard from './audiocard/audiocard'
import AudioCardSmall from './audiocardsmall/audiocardsmall'
import Style from './audiolive.module.css'

const AudioLive = () => {
  const audioCards = [1, 2]; // Or your actual data
  const smallCards = [1, 2, 3]; // Or your actual data

  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          {audioCards.map((item, index) => (
            <AudioCard key={`audio-${index}`} />
          ))}
        </div>
        <div className={Style.audioLive_box_right}>
          {smallCards.map((item, index) => (
            <AudioCardSmall key={`small-${index}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AudioLive
