import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import VisionSection from './components/VisionSection';
import FeatureSection from './components/FeatureSection';
import KeyFeatureSection from './components/KeyFeatureSection';
import TrainingMethodologies from './components/TrainingMethodologies';
import AffiliationPart from './components/AffiliationPart';
import LeadershipMessage from './components/LeadershipMessage';
import TrainingType from './components/TrainingType';

const Altadrib = () => {

    return (
        <div>
            <HeroSection/>
            <InfoSection />
            <VisionSection />
            <FeatureSection />
            <KeyFeatureSection />
            <TrainingMethodologies />
            <AffiliationPart/>
            <TrainingType/>
            <LeadershipMessage/>
        </div>
    );
};

export default Altadrib;