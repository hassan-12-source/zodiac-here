import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useState } from 'react';
import './Hero.css'

function Hero() {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const name = e.target.name.value;
        const address = e.target.address.value;
        const message = e.target.message.value;

        console.log("Form Data:", { name, address, message });
        alert("Form submitted!");
        setShowPopup(false);
    };
    return (
        <div className='hero-section' id='hero'>
            <div className='hero-conatainer'>
                <img src="./images/all04.jpg" alt="hero-image" />
                <div className='hero-text'>
                    <h1>Your destiny is written in the stars</h1>
                    <p>Get some expert advice on your love life, career, or faith and discover what your horoscope says with Lintense fortune teller readings.</p>
                    <div className='book-btn'>
                        <button onClick={togglePopup}>Book a reading</button>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button className="popup-close" onClick={togglePopup}>
                            &times;
                        </button>
                        <span>CONTACT US</span>
                        <h2>Get in touch with us</h2>
                        <p>If you have a question or a testimonial for us, feel free to contact us using the form below.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>
                                        Name:
                                        <input type="text" name="name" required />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        Address:
                                        <input type="text" name="address" required />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>
                                    Message:
                                    <textarea name="message" required />
                                </label>
                            </div>
                            <div className="submit-btn-container">
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hero