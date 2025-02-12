import React from 'react';
import tadribHero from '../../assets/tadribHero.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src={tadribHero} alt="Background Image" className="hero-image" />

            <div className="hero-overlay">
                <div className="hero-text">
                    <h1>We'll train you well.</h1>
                    <p>
                        Welcome to our Nursing <br className="mobile-break" /> Training Program
                    </p>
                </div>
            </div>

            <button className="fixed-appointment-btn">
                Register Now
            </button>
        </div>
    );
};

export default HeroSection;
