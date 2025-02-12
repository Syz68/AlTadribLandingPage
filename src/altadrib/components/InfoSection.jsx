import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
    return (
        <div className="info-container">
            {/* Welcome Message */}
            <div className="info-box">
                
                <h2 className="info-title">Welcome Message</h2>

                <p className="info-text">
                    Al Tadrib is dedicated to nurturing a culture of continuous learning and professional development. 
                    We serve as a hub of knowledge, innovation, and excellence, where you gain the skills and expertise 
                    needed to excel in your career and personal growth. Al Tadrib can be the catalyst for your professional and personal growth.
                </p>
            </div>

            {/* About Us Section */}
            <div className="info-box mt-14">
                <h2 className="info-title">About Us : Our Journey</h2>
                <p className="info-text">
                    We started our Journey in February 2018 and throughout, our focus on outstanding quality of training and development 
                    has been consistent and unrelenting. <br />
                    In an economy dominated by knowledge and rapid unpredictable change, the ability to learn and to continue learning 
                    is crucial for individuals and organizations. Recognizing this, Our organization has taken a multi-faceted approach 
                    to learning – beyond the traditional classroom courses into a plethora of methods from e-learning, simulation trainings, 
                    feedback culture, action-learning sets, guided learning, and so on.
                </p>

                <p className="info-footer">At Aster Al Tadrib we promise to “Train You Well”</p>
            </div>
        </div>
    );
};

export default InfoSection;
