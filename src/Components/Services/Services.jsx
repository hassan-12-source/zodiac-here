import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';
import './Services.css';

function Services({ data }) {
    const { scrollYProgress } = useScroll();

    
    const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const headerTranslateY = useTransform(scrollYProgress, [0, 0.15], [50, 0]);

    const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
    const cardsTranslateY = useTransform(scrollYProgress, [0.05, 0.3], [100, 0]);

    const consultationOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
    const consultationTranslateY = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);

    return (
        <div className="services-section" id="services">
            <motion.div
                className="header-services"
                style={{
                    opacity: headerOpacity,
                    translateY: headerTranslateY,
                }}
            >
                <h1>Our Services</h1>
                <p>
                    At Lintense, we provide consultations and various services by experienced
                    fortune tellers, psychics, and astrologers. Read on to find out more.
                </p>
            </motion.div>

            {/* Services Cards */}
            <motion.div
                className="services-card"
                style={{
                    opacity: cardsOpacity,
                    translateY: cardsTranslateY,
                }}
            >
                {data.map((item) => (
                    <div className="cards" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h1 className="card-title">{item.title}</h1>
                        <p className="card-description">{item.description}</p>
                    </div>
                ))}
            </motion.div>

            {/* Consultation Section */}
            <motion.div
                className="consultation-container"
                style={{
                    opacity: consultationOpacity,
                    translateY: consultationTranslateY,
                }}
            >
                <div className="consulation-content">
                    <h1>Astrological Consultation</h1>
                    <p>
                        Our certified professional astrologer with over 15 years of consulting
                        experience is ready to help you comprehend the secrets of your fate encoded
                        in position of celestial bodies at the time of your birth. Find out about
                        major challenges and triumphs you are likely to have in future. Absolute
                        confidentiality is guaranteed.
                    </p>
                    <div className="consulation-btn">
                        <button>Schedule your session</button>
                    </div>
                </div>
                <div className="consultation-image">
                    <img src="./images/all11.jpg" alt="consultation image" />
                </div>
            </motion.div>
        </div>
    );
}

export default Services;
