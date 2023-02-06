import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
// import Logo from '../assets/images/BarbershopLogo.jpg'

export default function NavBar() {
return (
    <div className="navbar">
        <ul className="navbarlist">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Book Appointment</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/contactpage">ContactUs</NavLink>
        </ul>
    </div>
);
}