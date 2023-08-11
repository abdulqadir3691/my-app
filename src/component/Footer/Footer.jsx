import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className = "footer">
            <div className="footer-left">
                    <h2>&copy; 2023 Footer Section</h2>
                   
            </div>
            <div className="footer-center">
                <ul className='footer-list'>
                    <li>Partnership</li>
                    <li>Social Media</li>
                    <li>Websites</li>
                    <li>Branding</li>
                </ul>
            </div>
            <div className="footer-right">
                <ul className='footer-right'>
                    <li>Company</li>
                    <li>Services</li>
                    <li>Forms</li>
                    <li>Contact Us</li>
                </ul>
            </div>
           
        </div>
    )
}
export default Footer