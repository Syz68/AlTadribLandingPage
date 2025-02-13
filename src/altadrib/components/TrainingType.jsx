import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "./TrainingType.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from 'react-modal';
import FormSection from './FormSection';


Modal.setAppElement('#root');



const TrainingType = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);


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
                            <h3>Life Support Training</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/authorized_training_center.png" alt="" />
                                <p>
                                    Aster Hospital's Life Support Training Center in Al Qusais offers a variety of courses under American Heart Association (AHA) certified instructors in liaison with the Dubai Health Authority (DHA) and Dubai Corporation Ambulance Services (DCAS). These courses are conducted within the center, providing healthcare professionals and non medicals with hands-on training using advanced mannequins. The training is designed to enhance existing knowledge and skills in resuscitation and emergency cardiovascular care, both basic and advanced. All courses are regularly updated to align with the latest AHA guidelines.<br /><br />
                                    For more information, please contact altadrib.lifesupport@asterhospital.com
                                </p>
                            </div>
                        </Accordion.Body>

                        <Accordion.Body>
                            <h3>BLS - Basic Life Support Course</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Picture1.png" alt="" />
                                <p>
                                    The AHA's BLS Course offers essential training for saving lives following cardiac arrest. It has been updated to incorporate the latest scientific advancements from the newest American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. The BLS curriculum covers key concepts such as high-quality CPR, enhancing chest compression fraction, and effective team dynamics for high performance.
                                </p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Basic_Life_Support_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course -Provider <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    BLS Heartcode session <br /><span className="buttontextpart">Enroll Now</span>
                                </button>
                            </div>
                        </Accordion.Body>

                        {/* i will Fill the rest data here */}

                        <Accordion.Body>
                            <h3>ACLS - Advanced Cardiac Life Support Course</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/ALCS.png" alt="" />
                                <p>
                                    The AHA’s ACLS Course has been revised to incorporate the latest scientific updates from the newest American Heart Association Guidelines for CPR and Emergency Cardiovascular Care. Building on the foundational lifesaving skills taught in BLS, this advanced course emphasizes the critical role of continuous, high-quality CPR.<br />

                                    It also focuses on the significance of effective team dynamics and communication, systems of care, and the recognition and management of cardiopulmonary arrest, immediate post-cardiac arrest care, acute dysrhythmias, stroke, and acute coronary syndromes (ACS).
                                </p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Advance_Cardiac_Life_Support-app.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course -Provider <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    ACLS Heartcode session <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>

                        <Accordion.Body>
                            <h3>PALS - Pediatric Advanced Life Support Course</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/PALS.png" alt="" />
                                <p>
                                    The AHA's PALS Course has been updated to reflect new science in the latest AHA Guidelines for CPR & ECC.<br />
                                    In the AHA’s advanced paediatric course, students learn how to use a systematic approach to quickly assess, identify the underlying cause, and treat paediatric patients in emergency situations. Students interact with real paediatric patient cases,realistic simulations, and animations to assess and treat these paediatric patients. This includes applying basic life support, following PALS treatment algorithms, and practicing effective resuscitation skills and team dynamics.
                                </p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Pediatric_Advance_Life_Support_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course -Provider <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    PALS Heartcode session <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>

                        <Accordion.Body>
                            <h3>PEARS- Pediatric Emergency Assessment, Recognition and Stabilization Course</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/PEARS.png" alt="" />
                                <p>
                                    The AHA’s ACLS Course has been revised to incorporate the latest scientific updates from the newest American Heart Association Guidelines for CPR and Emergency Cardiovascular Care. Building on the foundational lifesaving skills taught in BLS, this advanced course emphasizes the critical role of continuous, high-quality CPR.<br />

                                    It also focuses on the significance of effective team dynamics and communication, systems of care, and the recognition and management of cardiopulmonary arrest, immediate post-cardiac arrest care, acute dysrhythmias, stroke, and acute coronary syndromes (ACS).
                                </p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Pediatric_Advanced_Emergency_Assessment_Recignition_and_stabalization_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course -Provider <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    ACLS Heartcode session <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>

                        <Accordion.Body>
                            <h3>NRP-Neonatal Resuscitation Program</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/neonatal.png" alt="" />
                                <p>
                                    The NRP course is designed to give the healthcare professionals the basic knowledge to care for the neonatal patient in cardiac arrest and to manage resuscitation efforts in conditions that may lead to arrest. This course will provide the skills necessary to resuscitate a newborn and to work smoothly as a team with other healthcare professionals.
                                </p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/ECG-and-Pharmacology-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course -Provider <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>


                        <Accordion.Body>
                            <h3>ECG & Pharmacology</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/ecg_pharmacology.png" alt="" />
                                <p>The American Heart Association’s ECG & Pharmacology Course is a classroom-based, Instructor-led course designed to improve electrocardiogram (ECG) recognition skills and pharmacology knowledge for treating cardiovascular emergencies.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/ECG-and-Pharmacology-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>

                        {/* here */}
                        <Accordion.Body>
                            <h3>Airway Management</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/airway_management.png" alt="" />
                                <p>The American Heart Association Airway Management Course is a new and unique program specifically designed to give students the opportunity to learn, practice and demonstrate many airway skills used in resuscitation. The learning model for this course includes video-guided instruction, skills practice, and testing. This course does not provide certification, but instead, is designed solely to enhance students’ airway management skills.Healthcare providers whose occupation or volunteer activities require airway management skills, in addition to professionals in the field of resuscitation and airway management, such as scientists, educators, researchers, and manufacturers of medical devices may find the course beneficial.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Airway_Management_Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course -Provider <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>

                        <Accordion.Body>
                            <h3>Heartsaver First Aid CPR AED</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/heartsaver_first_aid_cpr_aed.png" alt="" />
                                <p>Heartsaver First Aid CPR AED has been updated to reflect new science in the latest American Heart Association Guidelines Update for CPR and Emergency Cardiovascular Care.

                                    AHA’s Heartsaver courses are designed to prepare students to provide first aid, CPR, and use an AED in a safe, timely, and effective manner.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Heartsaver_First_Aid_CPR_AED_Brochure.pdf">
                                    <button>
                                        Full 1 Day Course <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>
                        <Accordion.Body>
                            <h3>Heartsaver First Aid</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/heartsaver-first-aid-kit.png" alt="" />
                                <p>The latest Guidelines Update for First Aid reaffirms the goals of first aid: to reduce morbidity and mortality by alleviating suffering, preventing further illness or injury, and promoting recovery. The scope of first aid has been expanded, particularly for control of severe bleeding. First aid can be initiated by anyone, in any situation, and includes self-care.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Heartsaver-First-Aid-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>
                        <Accordion.Body>
                            <h3>Heartsaver CPR AED</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/heartsaver.png" alt="" />
                                <p>AHA’s Heartsaver CPR AED course provides the knowledge and skills that may help save a life. The skills learned in this course will help you recognise cardiac arrest, get emergency care on the way quickly, and help the person until more advanced care arrives to take over.<br />

                                    Heartsaver courses from AHA offer: a cohesive, consistent experience for the learner, best practices to give students the best possible learning experience and help them better retain information, enhanced and realistic scenarios, while providing course and content flexibility.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Heartsaver-CPR-AED-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>
                        <Accordion.Body>
                            <h3>Heartsaver Paediatric First Aid CPR AED</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/paediatric-first-aid-cpr-aed.png" alt="" />
                                <p>The Heartsaver Paediatric First Aid CPR AED course is designed to meet the training needs of childcare providers, while also being a comprehensive resource for parents, grandparents, teachers, babysitters or anyone responsible for the safety of children. Combining online and hands-on skill components, this one-stop-shop course teaches childcare providers and parents critical first aid, CPR and AED skills.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Heartsaver-paediatric-first-aid-cpr-aed-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>
                        <Accordion.Body>
                            <h2>remove after compiltion</h2>
                            <h3>Family & Friends CPR</h3>
                            <div className="accordiondiv">
                                <img src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/family-friends.png" alt="" />
                                <p>The Family & Friends CPR Course teaches the lifesaving skills of adult Hands-Only CPR, adult CPR with breaths, child CPR with breaths, adult and child AED use, infant CPR, and mild and severe airway block for adults, children, and infants. Skills are taught in a dynamic group environment using the AHA’s research-proven practice-while-watching technique, which provides students with the most hands-on CPR practice time possible.<br />

                                    Family & Friends CPR is for people who want to learn CPR but do not need a CPR course completion card to meet a job requirement. This course is ideal for community groups, new parents, grandparents, babysitters, and others interested in learning how to save a life.</p>
                            </div>

                            <div className="accordionbutton">

                                <a href="https://www.aster.stldigitaltech.com/fileadmin/user_upload/Family.pdf" target="_blank" rel="noopener noreferrer">
                                    <button>
                                        Full 1 Day Course <br /><span className="buttontextpart">Download Brochure</span>
                                    </button>
                                </a>

                                <button onClick={() => setModalIsOpen(true)}>
                                    <br /><span className="buttontextpart">Enroll Now</span>
                                </button>

                            </div>
                            <div className="discalimerpart">
                                <h6>DISCLAIMER: Please note that confirmation is based on course availability.</h6>
                                <p>
                                    "The American Heart Association strongly promotes knowledge and proficiency in all its courses and has developed instructional materials for this purpose. Use of these materials in an educational course does not represent course sponsorship by the AHA. Any fees charged for such a course, except for a portion of fees needed for AHA course materials, do not represent income to the AHA."</p>
                            </div>

                        </Accordion.Body>









                    </Accordion.Item>

                    {/* here it modal code */}
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

                </Accordion>

            </div>
        </div>
    );
};

export default TrainingType;
