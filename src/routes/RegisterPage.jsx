import React from 'react';
import '../components/Register/RegisterStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import Register from '../components/Register/Register';

function RegisterPage () {
    return (
        <>
            <Navbar />
            <Register />
            <Footer />
        </>
        
    );
}

export default RegisterPage;