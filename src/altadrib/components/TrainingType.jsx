import React from "react";
import { Accordion } from "react-bootstrap";
import "./TrainingType.css";
import "bootstrap/dist/css/bootstrap.min.css";


const TrainingType = () => {
    return (
        <div className="training-containers">
            <h1 className="training-title">OUR TRAINING TYPE</h1>
        <div className="accordian-container">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>The Training</Accordion.Header>
                    <Accordion.Body>
                        <h3>Mandatory Nursing Training</h3>
                        <p>
                            Aster provides a wide selection of training programs that we have
                            made required for certain professions. The majority of this needed
                            training is offered via e-learning or in-person seminars held at
                            regular intervals.
                        </p>

                        <h3>E-learning Platform: Lippincott Solutions</h3>
                        <p>
                            Our e-learning platform offers a variety of training topics,
                            including a suite of management development programs.
                        </p>

                        <h3>Continuous Professional Development</h3>
                        <p>
                            AlTadrib actively encourages CPD in line with an individual’s
                            professional body’s requirements. It’s a structured process that
                            enables healthcare professionals to maintain and enhance their
                            knowledge, skills, and competencies in order to deliver
                            high-quality patient care.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Life Support Training</Accordion.Header>
                    <Accordion.Body>
                        <p>Details about life support training go here...</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            </div>
        </div>
    );
};

export default TrainingType;
