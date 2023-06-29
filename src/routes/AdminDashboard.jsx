import React from 'react';
import '../components/Admin/AdminStyles.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../container/Footer/Footer';
import Admin from '../components/Admin/Admin';

function AdminDashboard () {
    return (
        <>
            <Navbar />
            <Admin />
            <Footer />
        </>
        
    );
}

export default AdminDashboard;