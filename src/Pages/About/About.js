import React from 'react';

import './About.css';
const About = () => {
    return (
        <div className="about w-75 mx-auto p-4 mt-4 mb-4">
            <div className=" d-flex flex-column p-4">
                <h4 className="text-center">We are glad that you want to know more about us. <br /> Here is some details about us..</h4>
                <div className='description m-6 pt-5'>
                    <p className=' text-justify'>When you come to us for purchasing bicycle you will experience great customer service. We will take the time to give you the absolute best quality services. We are one of the top rated Bicycle Warehouse in Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default About;