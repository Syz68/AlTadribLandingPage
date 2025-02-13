import React from "react";
import './LeadershipMessage.css'

const LeadershipMessage = () => {
    return (
        <div className="leadership-container">
            <h2 className="leadership-title">
                Leadership Message <span className="highlight">Note</span>
                <div className="bottomborder"></div>
            </h2>
            <div className="message-card">
                <div className="profile">
                    <img
                        src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/sherbaz-bichu.png"
                        alt="Dr. Sherbaz Bichu"
                    />
                </div>
                <div className="message-content">
                    <h3 className="name">DR. SHERBAZ BICHU</h3>
                    <p className="designation">
                        CEO & Specialist Anesthetist <br />
                        Aster Hospitals & Clinics
                    </p>
                    <p className="quote">
                        "The future of healthcare rests on the strength of training, where every lesson learned translates into lives saved."
                    </p>
                    <p className="message">
                        Our commitment to excellence in patient care hinges on the importance of continuous education and training. The Training Department plays a central role in this mission, ensuring that our staff is equipped with the latest knowledge, skills, and best practices to deliver exceptional care. Our patients entrust us with their health and well-being, and it is our responsibility to honor that trust.
                    </p>
                    <p className="message">
                        From enhancing advanced clinical skills to improving patient communication and care coordination, the department ensures our nurses, doctors and paramedic team are well-prepared to meet the challenges of modern healthcare. Additionally, the department's commitment to fostering a culture of lifelong learning motivates our staff to continuously improve and stay updated with the latest advancements in healthcare. This not only supports individual professional growth but also elevates the overall standard of care provided at our hospital.

                    </p>
                    <p className="message">
                        Looking to the future, the importance of ongoing training will only grow. As the healthcare landscape evolves with new technologies, treatment protocols, and patient care models, our ability to adapt and excel will rely heavily on the strength of our training programs.

                        I strongly encourage all nursing staff to take full advantage of the opportunities offered by the Training Department. Whether you are a seasoned professional or new to the field, there is always something new to learn. Let us continue to strive for excellence in all that we do, ensuring our patients receive the highest quality care.

                        Thank you for your dedication to continuous learning and professional development.
                    </p>
                </div>
            </div>

            {/* second part */}

            <div className="message-card">
                <div className="profile">
                    <img
                        src="https://www.aster.stldigitaltech.com/fileadmin/user_upload/sarah-illyas.png"
                        alt="Ms. Sarah Illyas"
                    />
                </div>
                <div className="message-content">
                    <h3 className="name">Ms. Sarah Illyas</h3>
                    <p className="designation">
                        Vertical Chief Nursing Officer <br />
                        Aster Hospitals and Clinics
                        UAE, Bahrain & Oman.
                    </p>
                    <p className="quote">
                        "Empowering the Future of Healthcare Through Excellence in Education"
                    </p>
                    <p className="message">
                        As the complexity and scope of healthcare continue to grow, the need of the training and education has been created. At the center of this evolution is our Training Department, which serves as a beacon of excellence and innovation in preparing the next generation of healthcare professionals. Doctors, nurses and paramedics are not simply caregivers, but also leaders, educators, and supporters of patient well-being.
                    </p>
                    <p className="message">
                        Our department is dedicated to developing these varied positions through rigorous training programs that emphasise both clinical and soft skills. In our pursuit of greatness, we have implemented cutting-edge teaching approaches, incorporated technology and created a learning atmosphere that promotes critical thinking, empathy, and resilience. We believe in the benefits of ongoing professional development and lifelong learning. By providing our trainees with the tools they need to thrive, we not only address the current demands of the healthcare sector, but also anticipate our communities' future requirements.


                    </p>
                    <p className="message">
                        Our department's accomplishments are a credit to our instructors' devotion and passion, as they work relentlessly to ensure that our graduates are well-prepared to face the difficulties of an ever-changing healthcare environment. Their steadfast dedication has established our department as a leader in Training and Education department. Looking ahead, we remain committed to improving the quality of training, extending our research activities, and developing deeper connections with healthcare organizations. We are optimistic that our efforts will continue to create highly skilled, caring, and inventive nurses, doctors and other healthcare providers who will contribute significantly to societal health and well-being.<br/>

                        To summarize, the Training Department is more than just training nurses, doctors and other healthcare team; we are defining the future of healthcare. We are proud of our history and dedicated to preserving our record of excellence in training.<br/>

                        Thank you to everyone who supports our mission; we look forward to our department's continued success and expansion.
                    </p>
                </div>
            </div>
        {/* Contact us part  */}

        <div className="contact-section">
      <h2 className="contact-title">
        CONTACT <span className="highlights">US</span>
        <div className="bottomborder"></div>
      </h2>
      <div className="contact-container">
        <div className="contact-card">
          <h3>NURSING DEPARTMENT TRAINING</h3>
          <p>altadrib@asterhospital.com</p>
        </div>
        <div className="contact-card">
          <h3>LIFE SUPPORT TRAINING</h3>
          <p>altadrib.lifesupport@asterhospital.com</p>
        </div>
      </div>
    </div>


        </div>
    );
};

export default LeadershipMessage;
