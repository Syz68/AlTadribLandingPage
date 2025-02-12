import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
    return (
        <div className="feature-container">
            {/* Section Title */}
            <div className="feature-title">
                <h1>Why Choose <span className="highlight-text">Us?</span></h1>
                <div className="underline"></div>
            </div>

            {/* Section Description */}
            <div className="feature-description">
                <p>Our aim is to broaden the knowledge, our training programs are designed with the tools and confidence to achieve your goals.</p>
                <p>Explore our website to learn more about our courses, instructors, and how we can help you reach your full potential.</p>
                <p>Thank you for choosing AlTadrib as your partner in learning and development. We look forward to being a part of your journey toward success.</p>
            </div>

            {/* Features Grid */}
            <div className="feature-grid">
                {/* Card 1 */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/exp-ins.png" alt="Experienced Instructors" />
                    </div>
                    <h3>Experienced Instructors</h3>
                    <p>Learn from top professionals who are experts in their fields and passionate about teaching.</p>
                </div>

                {/* Card 2 */}
                <div className="feature-card">
                    <div className="feature-icon red-bg">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/scissors.png" alt="Cutting-Edge Facilities" />
                    </div>
                    <h3>Cutting-Edge Facilities</h3>
                    <p>Our state-of-the-art training rooms and technology ensure a seamless and effective learning experience.</p>
                </div>

                {/* Card 3 */}
                <div className="feature-card">
                    <div className="feature-icon green-bg">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/comprehensive-programs.png" alt="Comprehensive Programs" />
                    </div>
                    <h3>Comprehensive Programs</h3>
                    <p>We offer a wide range of courses and workshops tailored to meet the needs of various skill levels.</p>
                </div>

                {/* Card 4 */}
                <div className="feature-card">
                    <div className="feature-icon green-bg">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/community-support.png" alt="Community and Support" />
                    </div>
                    <h3>Community and Support</h3>
                    <p>Join a vibrant community of learners and benefit from our supportive staff and resources dedicated to your success.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
