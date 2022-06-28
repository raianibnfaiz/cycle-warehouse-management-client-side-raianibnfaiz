import React from 'react';
import './ExtraSections.css';
const ExtraSections = () => {
    return (<div className="m-4">


        <div className="container mx-auto mb-1">
            <div className="row  pb-3">
                <div className="col-md-8 p-6 ">
                    <h1  >Welcome To <br /> <span className="text-amber-900 ml-5 title">Our Bicycle Warehouse</span></h1>
                    <p style={{
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }} className='text-justify p-1'>We are one of the only places you will find that still measures your feet to help ensure you get that bicycle.  We will help you find  the best bicycle.  This bicycle warehouse is a full service bicycle store with a large collection.</p>
                </div>
                <div className=" col-md-4 p-3 ">
                    <div className=" mx-auto p-4 mb-5">
                        <img className='ml-1' src="https://i.pinimg.com/originals/05/e1/1e/05e11eea61ec15432546b192834fbd7d.jpg" style={{ width: "90%" }} alt="img" />
                    </div>

                </div>
            </div>
        </div>
        <div container w-50 mx-auto m-5 mb-5 >
            <h4 className="text-center mb-5">We do not compromise with <span className='title'>quality</span> </h4>
            <div className='description mb-5 '>

            </div>
            <br />
        </div>
    </div>
    );
};

export default ExtraSections;