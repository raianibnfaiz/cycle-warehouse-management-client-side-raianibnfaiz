import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='fixed-bottom '>
            <p className='text-center text-success mt-2'>Copyright©{year}</p>
        </footer>
    );
};

export default Footer;