import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Contact/ContactStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import Contact from '../components/Contact/Contact';

function ContactPage () {
    return (
        <>
            <Navbar />
            <Contact />
            <Footer />
        </>
        
    );
}

export default ContactPage;