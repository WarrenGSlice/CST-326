import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Login/LoginStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import Login from '../components/Login/Login';

function LoginPage () {
    return (
        <>
            <Navbar />
            <Login />
            <Footer />
        </>
        
    );
}

export default LoginPage;