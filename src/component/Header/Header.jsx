import React from 'react';
import './Header.css';
function Header() {
    return(
        <div className = "header">
            <div className="header-left">
                    <h2>React Assignment</h2>
                   
            </div>
            <div className="header-center">
                <ul className='header-list'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>About Me</li>
                </ul>
            </div>
            <div className="header-right">
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header;