import React, { forwardRef } from 'react';
import './FormSection.css';

const FormSection = forwardRef((props, ref) => {
    return (
        <div className='formcontainer' ref={ref}>
            <h1>Registration Form</h1>
            <iframe
                src="https://asterclinicmern.stldigitaltech.com/form/677ce536a9c75b6eb5bd5175?redirect_to=https://asterclinicmern.stldigitaltech.com/"
                frameBorder="0"
                className='iframecontainer'
            ></iframe>
        </div>
    );
});

export default FormSection;