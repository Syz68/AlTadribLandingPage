import React, { useState } from "react";
import "./TrainingMethodologies.css"; // Import the CSS file

const TrainingMethodologies = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the visibility
        }));
    };

    const methodologies = [
        {
            title: "Simulation-Based Training",
            items: ["High-Fidelity Simulations", "Skills Labs"],
        },
        {
            title: "Didactic Learning",
            items: ["Lectures and Seminars", "Online Modules"],
        },
        {
            title: "Competency-Based Assessments",
            items: ["OSCEs (Clinical Exams)", "Checklists and Skills Validation"],
        },
        {
            title: "Continuing Education and In-Service Training",
            items: ["Workshops and Seminars", "Certifications and Specialized Training"],
        },
        {
            title: "Preceptorship Programs",
            items: ["Preceptorship"],
        },
    ];

    return (
        <div className="training-container">
            {/* Heading */}
            <h1 className="fw-bold text-center">
                AL Tadrib Training <span style={{ color: "#134DA0" }}>Methodologies</span>
            </h1>
            <div className="underline"></div>

            {/* Tree Structure */}
            <div className="tree">
                <div className="top-line"></div>
                <div className="horizontal-line"></div>

                {/* Branches */}
                <div className="branches">
                    {methodologies.map((method, index) => (
                        <div key={index} className="branch">
                            <div className="vertical-line"></div>
                            {/* Heading as a Button */}
                            <button
                                className="branch-heading"
                                onClick={() => toggleSection(index)}
                            >
                                {method.title}
                            </button>

                            {/* List (conditionally rendered) */}
                            {openSections[index] && (
                                <ul className={openSections[index] ? "active" : ""}>
                                {method.items.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainingMethodologies;
