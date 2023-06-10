import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Booking/BookingStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import Booking from '../components/Booking/Booking';

function BookingPage () {
    return (
        <>
            <Navbar />
            <Booking />
            <Footer />
        </>
        
    );
}

export default BookingPage;