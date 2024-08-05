import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../assets/logo.png";
import AnimateLogo from "../animate_Logo/AnimateLogo"
export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const handleCloseMenu = () => {
        setMenuVisible(false);
    };

    return (
        <header className="Navbar">
            <img className="logo" src={logo} alt="logo" />
            <div className='menuIcon' onClick={handleMenuToggle}>
                {menuVisible ? '' : <i className="fa-solid fa-bars"></i>}
            </div>
            <ul className={menuVisible ? 'show-menu' : ''}>
                <button className="close-menu-button" onClick={handleCloseMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li>
                    <a className='contactUS' href="#">
                        <div>Contact us</div>
                        <div className='shareIcon'><i className="fa-solid fa-share"></i></div>
                    </a>
                    <div className='socialMediaMenu'>
                        <div>facebook</div>
                        <div>What's App</div>
                        <div>Github</div>
                        <div>Behince</div>
                        <div>Behince</div>

                    </div>
                </li>
            </ul>
        </header>
    );
}
