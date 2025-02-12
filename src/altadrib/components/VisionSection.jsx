import React from 'react';
import './VisionSection.css';
import bgImage from '../../assets/bgImage.jpg';

const VisionSection = () => {
    return (
        <div className="vision-container" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* Overlay */}
            <div className="vision-overlay"></div>

            {/* Content */}
            <div className="vision-content">
                <h1 className="vision-title">Vision and Mission</h1>

                {/* Grid Layout */}
                <div className="vision-grid">
                    <div className="vision-box">
                        <h2 className="vision-subtitle">VISION</h2>
                        <p className="vision-text">
                            An internationally recognized center of innovation and excellence for training and skill development of healthcare professionals.
                        </p>
                    </div>

                    <div className="vision-box">
                        <h2 className="vision-subtitle">MISSION</h2>
                        <p className="vision-text">
                            To pursue excellence through integration of quality education & innovation ultimately impacting every life.
                        </p>
                    </div>

                    <div className="vision-box vision-box-full">
                        <h2 className="vision-subtitle">VALUES</h2>
                        <p className="vision-text">
                            We believe in - Respect, Integrity, Compassion, Excellence, Unity, and Passion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionSection;
