
import React from 'react';
import '../components/Menu/MenuStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import SpecialMenu from '../container/Menu/SpecialMenu.jsx';

function MenuPage () {
    return (
        <>
            <Navbar />
            <SpecialMenu />
            <Footer />
        </>
        
    );
}

export default MenuPage;