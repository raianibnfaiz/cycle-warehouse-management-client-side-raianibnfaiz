import React from 'react';
import ExtraSections from '../ExtraSections/ExtraSections';
import Banner from './Banner/Banner';

import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ExtraSections></ExtraSections>

        </div>
    );
};

export default Home;