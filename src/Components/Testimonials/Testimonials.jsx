import React from 'react'
import './Testimonials.css'

function Testimonials({ data }) {
    return (
        <div className='testimonials-container' id='testimonials'>
            <div className='testimonials-header'>
                <h1>What clients say about us</h1>
                <p>Take a second to read the latest testimonials submitted by our clients to find out more about the quality of our readings and horoscopes we provide to our clients.</p>
            </div>

            <div className='testimonial-card'>
                {data.map((item) => (
                    <div className='testimonial-content'>
                        <img src={item.image} alt="" />
                        <div className='testimonial-text'>
                            <p>{item.description}</p>
                            <h1>{item.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials