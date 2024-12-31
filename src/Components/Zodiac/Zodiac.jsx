import React from 'react'
import './Zodiac.css'

function Zodiac({ data }) {
  return (
    <div className='zodiac-container' id='zodiac'>
      <div className='zodiac-header'>
        <h1>Daily horoscope for your Zodiac sign</h1>
        <p>We publish daily horoscopes including astrological analysis for all Zodiac signs. It is available to all visitors of Lintense fortune teller website.</p>
      </div>
      <div className='zodiac-cards'>
        {data.map((item) => (
          <div className='card-content' key={item.id}>
            <img className='zodiac-image' src={item.image} alt="" />
            <h1 className='zodiac-title'>{item.title}</h1>
            <span className='zodiac-description'>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Zodiac