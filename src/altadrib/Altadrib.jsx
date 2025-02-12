import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import VisionSection from './components/VisionSection';
import FeatureSection from './components/FeatureSection';
import KeyFeatureSection from './components/KeyFeatureSection';
import TrainingMethodologies from './components/TrainingMethodologies';
import FormSection from './components/FormSection';
import AffiliationPart from './components/AffiliationPart';
import LeadershipMessage from './components/LeadershipMessage';

const Altadrib = () => {
    const formRef = useRef(null);

    return (
        <div>
            <HeroSection formRef={formRef} />
            <FormSection ref={formRef} />
            <InfoSection />
            <VisionSection />
            <FeatureSection />
            <KeyFeatureSection />
            <TrainingMethodologies />
            <AffiliationPart/>
            {/* here one more section need to add the acordian part */}
            <LeadershipMessage/>
        </div>
    );
};

export default Altadrib;