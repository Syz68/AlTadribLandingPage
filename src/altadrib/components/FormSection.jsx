import React, { useState } from 'react';
import './FormSection.css';

const FormSection = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className='formcontainer'>
            <h1>Registration Form</h1>
            {isLoading && <div className="spinner">Loading...</div>}
            <iframe
                src="https://asterclinicmern.stldigitaltech.com/form/677ce536a9c75b6eb5bd5175?redirect_to=https://asterclinicmern.stldigitaltech.com/"
                frameBorder="0"
                className='iframecontainer'
                scrolling='no'
                onLoad={handleIframeLoad}
            ></iframe>
        </div>
    );
};

export default FormSection;