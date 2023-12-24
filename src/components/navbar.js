import React, {useState, useEffect, useRef} from "react";

import { NavLink } from 'react-router-dom';

import "./navbar_styles.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMenuClick = () => { 
        setMenuOpen(!menuOpen);
    };

    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    const handleCloseMenuOnResize = () => {
        if (!menuOpen) {
          setMenuOpen(false); // Close the menu on window resize
        }
      };

    useEffect (() => {
        document.addEventListener('click', handleOutsideClick);
        window.addEventListener('resize', handleCloseMenuOnResize); 
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('resize', handleCloseMenuOnResize); 
        }
    }, [])


    return (
        <nav>
            <h3 className="home"> 
                <NavLink to="" style={{color: '#F93943'}}> Vanshika Sriram </NavLink>
            </h3>
            <div className = {menuOpen ? "rightsideOpen" : "rightside"}>
                {/* <h3 className = "pages"> 
                    <NavLink to="/about" style={{ color: 'black' }}> About </NavLink>
                </h3> */}
                <h3 className = "pages"> 
                    <NavLink to="/projects" style={{ color: 'black' }}> Projects </NavLink>
                </h3>
                <h3 className = "pages">
                    <a href="https://www.linkedin.com/in/vanshika-sriram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'black' }}> LinkedIn </a>
                </h3>
            </div>

            <div ref = {menuRef} className = "menu" 
                onClick = {handleMenuClick}>
                <span> </span>
                <span> </span>
                <span> </span>
            </div>

        </nav>
    )
}
