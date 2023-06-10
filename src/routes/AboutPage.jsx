import React from 'react';
import {Link} from 'react-router-dom';
import '../components/About/AboutStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import About from '../components/About/About';

function AboutPage () {
    return (
        <>
            <Navbar />
            <About />
            <Footer />
        </>
        
    );
}

export default AboutPage;