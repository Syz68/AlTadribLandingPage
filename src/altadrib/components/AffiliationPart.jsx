import React from "react";
import "./AffiliationPart.css";
import firstImage from "../../assets/authorized_training_center.png"
import secondImage from "../../assets/dubai_corporation_for_ambulance.png"
import thirdImage from "../../assets/dubai_health_authority.png"

const affiliations = [
  {
    imgSrc: firstImage,
    name: "American Heart Association",
  },
  {
    imgSrc: secondImage,
    name: "Dubai Corporation For Ambulance Services (DCAS)",
  },
  {
    imgSrc: thirdImage,
    name: "Dubai Health Authority",
  },
];

const AffiliationPart = () => {
  return (
    <div className="affiliationpart">
      <h2 className="title">Affiliation Bodies</h2>
      <div className="affiliation-container">
        {affiliations.map((affiliation, index) => (
          <div key={index} className="affiliation-card">
            <img src={affiliation.imgSrc} alt={affiliation.name} />
            <p>{affiliation.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliationPart;
