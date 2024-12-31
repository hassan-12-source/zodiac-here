import React, { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen);
    }

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
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src="./images/all01.svg" alt="" />
                </div>
                <div className='nav-links'>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#zodiac">Zodiac sign</a></li>
                    <li><a href="#prices">Prices </a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <div className='booking-btn'>
                        <button onClick={togglePopup}>Book a Readding</button>
                    </div>
                </div>
                <div className="menu-icon" onClick={toggleAside}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            <aside className={`aside-navbar ${isAsideOpen ? 'open' : ''}`}>
                <div className='logo'>
                    <img src="./images/all01.svg" alt="" />
                </div>
                <div className='close-icon' onClick={toggleAside}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>

                <ul>
                    <li><a href="">Services</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className='booking-btn-mobile'>
                    <button>Book a Readding</button>
                </div>
            </aside>

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

        </>
    )
}

export default Navbar