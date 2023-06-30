import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Register from './routes/RegisterPage';
import Login from './routes/LoginPage';
import Menu from './routes/MenuPage';
import About from './routes/AboutPage';
import Contact from './routes/ContactPage';
import History from './routes/HistoryPage';
import Booking from './routes/BookingPage';
import Admin from './routes/AdminDashboard';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/History" element={<History />} />
            <Route path="/Booking" element={<Booking />} />

        </Routes>
    </BrowserRouter>, 
    document.getElementById('root')
);

