import React from 'react'
import './Pricing.css'

function Pricing({ data }) {
    return (
        <div className='pricing-container' id='prices'>
            <div className='pricing-header'>
                <h1>Get personalized horoscope</h1>
                <p>Discover your Horoscope for today and tomorrow. Our Daily Personalized Horoscope includes all the parameters of your natal chart, and not only of your Sun sign.</p>
            </div>

            <div className='pricing-card'>
                {data.map((item) => (
                    <div className='pricing-content' key={item.id}>
                        <h1 className='pricing-title'>{item.title}</h1>
                        <p className='pricing-description'>{item.description}</p>
                        <span>{item.price}</span>
                        <button className='pricing-button'>Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing