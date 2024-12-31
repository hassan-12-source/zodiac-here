import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='contact-info'>
                <div className='logo-footer'>
                    <img src="./images/all01.svg" alt="" />
                </div>
                <div className='info'>
                    <h4>Have questions?</h4>
                    <span>123-456-7890</span>
                </div>
                <div className='info'>
                    <h4>670 Lafayette Ave, Brooklyn, NY 11216</h4>
                    <span>Mon – Fri: 10am – 6pm</span>
                </div>
                <div className='info'>
                    <h4>E-mail:</h4>
                    <span>mail@demolink.org</span>
                </div>
            </div>

            <div className='footer-links'>
                <li><a href="">Services</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Contacts</a></li>
            </div>

            <div className='social-media'>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Twiitter</a></li>
            </div>
        </div>
    )
}

export default Footer