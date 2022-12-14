import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='fixed-bottom'>
            <p className='text-center  mt-2'>CopyrightÂ©{year}</p>
        </footer>
    );
};

export default Footer;