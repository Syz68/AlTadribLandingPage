import React from "react";
import "./TrainingMethodologies.css"; // Import the CSS file

const TrainingMethodologies = () => {
    return (
        <div className="training-container">
            {/* Heading */}
            <h1 className="fw-bold text-center">
                AL Tadrib Training<span style={{ color: "#134DA0" }}> Methodologies</span>
            </h1>
            <div className="underline"></div>

            {/* Tree Structure */}
            <div className="tree">
                {/* Top Vertical Line */}
                <div className="top-line"></div>

                {/* Horizontal Line */}
                <div className="horizontal-line"></div>

                {/* Branches */}
                <div className="branches">
                    {/* First Column */}
                    <div className="branch">
                        <div className="vertical-line"></div>
                        <h3>Simulation-Based Training</h3>
                        <ul>
                            <li>High-Fidelity Simulations</li>
                            <li>Skills Labs</li>
                        </ul>
                    </div>

                    {/* Second Column */}
                    <div className="branch">
                        <div className="vertical-line"></div>
                        <h3>Didactic Learning</h3>
                        <ul>
                            <li>Lectures and Seminars</li>
                            <li>Online Modules</li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="branch">
                        <div className="vertical-line"></div>
                        <h3>Competency-Based Assessments</h3>
                        <ul>
                            <li>OSCEs (Clinical Exams)</li>
                            <li>Checklists and Skills Validation</li>
                        </ul>
                    </div>

                    {/* Fourth Column */}
                    <div className="branch">
                        <div className="vertical-line"></div>
                        <h3>Continuing Education and In-Service Training</h3>
                        <ul>
                            <li>Workshops and Seminars</li>
                            <li>Certifications and Specialized Training</li>
                        </ul>
                    </div>

                    {/* Fifth Column */}
                    <div className="branch">
                        <div className="vertical-line"></div>
                        <h3>Preceptorship Programs</h3>
                        <ul>
                            <li>Preceptorship</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingMethodologies;
