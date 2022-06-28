import React, { useState } from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import pick12 from '../../../images/pick12.jpg';
import pick3 from '../../../images/pick3.jpg';
import pick4 from '../../../images/pick4.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>

            <div className="mb-2">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pick4}
                            alt="First slide"
                        />
                        <Carousel.Caption style={{ fontFamily: 'Concert One' }}>
                            <h3>Exciting <span style={{ color: "rgb(255, 94, 0)", }}> Bicycle</span> Collection</h3>
                            <p> Supreme Black Lightweight Bicycle</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pick12}
                            alt="Second slide"
                        />

                        <Carousel.Caption style={{ fontFamily: 'Concert One' }}>
                            <h3> <span style={{ color: "rgb(255, 94, 0)", }}>Grab</span> Your Favorite Bicycle</h3>
                            <p>Go For It!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pick3}
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{ fontFamily: 'Concert One' }}>
                            <h3>Explore The World With Your Bicycle</h3>
                            <p>
                                Adventure Is Yet To Come!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="bg mt-2 mb-4">
                <div className="title-section p-4">
                    <h1 className="title"> <span style={{ color: "white" }}>Bicycle Warehouse</span><br /><span style={{ color: "rgb(255, 94, 0)" }}>ManageMent</span></h1>

                </div>
            </div>
        </div>

        // <div className="container">
        //     <img src="https://i.ibb.co/t8RGPVY/robert-shunev-m-S1nl-Ybq1k-A-unsplash.jpg" width="1349px" alt="" />
        //     <h3 className='text-center text-purple-400'> Photography</h3>
        // </div>
    );
};

export default Banner;