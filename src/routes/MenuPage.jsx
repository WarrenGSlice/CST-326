import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Menu/MenuStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import Menu from '../components/Menu/Menu';

function MenuPage () {
    return (
        <>
            <Navbar />
            <Menu />
            <Footer />
        </>
        
    );
}

export default MenuPage;