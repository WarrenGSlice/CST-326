import React from 'react';
import {Link} from 'react-router-dom';
import '../components/History/HistoryStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import History from '../components/History/History';

function HistoryPage () {
    return (
        <>
            <Navbar />
            <History />
            <Footer />
        </>
        
    );
}

export default HistoryPage;