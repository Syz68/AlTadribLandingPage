import React from 'react';

const KeyFeatureSection = () => {
    return (
        <div className="container text-center py-5 px-lg-5">
            {/* Section Title */}
            <h1 className="fw-bold">
                Key <span style={{ color: "#134DA0" }}>Features</span>
            </h1>
            <div
                className="mx-auto mb-3"
                style={{ width: "80px", borderBottom: "3px solid #134DA0" }}
            ></div>

            {/* Section Description */}
            <p className="px-md-5">
                In Al Tadrib, we pride ourselves on offering a unique and enriching learning experience. Here are some of the standout features that set us apart:
            </p>

            {/* Features Grid */}
            <div className="row g-4 mt-4">
                {/* Card 1 */}
                <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/teacher.png" alt="Expert Instructors" width="80" className="me-3" />
                        <div className="text-start">
                            <h5 className="fw-semibold">Expert Instructors</h5>
                            <ul className="ps-3">
                                <li>Learn from highly qualified professionals who bring real-world experience and a passion for teaching.</li>
                                <li>Benefit from personalized guidance and mentorship from industry leaders.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/online-learning.png" alt="Comprehensive Courses" width="80" className="me-3" />
                        <div className="text-start">
                            <h5 className="fw-semibold">Comprehensive Course Offerings</h5>
                            <ul className="ps-3">
                                <li>Choose from a diverse range of courses and workshops tailored to various skill levels.</li>
                                <li>Programs designed to meet industry demands and future career trends.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/online-learning-ins.png" alt="Flexible Learning" width="80" className="me-3" />
                        <div className="text-start">
                            <h5 className="fw-semibold">Flexible Learning Options</h5>
                            <ul className="ps-3">
                                <li>Benefit from a variety of learning formats, including in-person, online, and hybrid courses.</li>
                                <li>Flexible scheduling to accommodate working professionals and busy lifestyles.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/learning-bulb.png" alt="Hands-On Learning" width="80" className="me-3" />
                        <div className="text-start">
                            <h5 className="fw-semibold">Hands-On Learning</h5>
                            <ul className="ps-3">
                                <li>Engage in practical, hands-on training that applies theoretical knowledge to real-world scenarios.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-light rounded shadow-sm">
                        <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/classroom.png" alt="Innovative Teaching" width="80" className="me-3" />
                        <div className="text-start">
                            <h5 className="fw-semibold">Innovative Teaching Methods</h5>
                            <ul className="ps-3">
                                <li>Benefit from a dynamic curriculum that incorporates the latest training methodologies and technologies.</li>
                                <li>Interactive and engaging teaching techniques that enhance retention and application of knowledge.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatureSection;
