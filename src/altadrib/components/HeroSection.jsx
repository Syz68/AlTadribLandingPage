import React, { useState } from 'react';
import Modal from 'react-modal';
import FormSection from './FormSection';
import tadribHero from '../../assets/tadribHero.jpg';
import './HeroSection.css';

// Set the root element for accessibility
Modal.setAppElement('#root');

const HeroSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="hero-section">
            <img src={tadribHero} alt="Background" className="hero-image" />

            <div className="hero-overlay">
                <div className="hero-text">
                    <h1>We'll train you well.</h1>
                    <p>Welcome to our Nursing <br className="mobile-break" /> Training Program</p>
                </div>
            </div>

            <button className="fixed-appointment-btn" onClick={() => setModalIsOpen(true)}>
                Enroll Now
            </button>

            {/* React Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Enrollment Form"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <button className="close-button" onClick={() => setModalIsOpen(false)}>×</button>
                <FormSection />
            </Modal>
        </div>
    );
};

export default HeroSection;
