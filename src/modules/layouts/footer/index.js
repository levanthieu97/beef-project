import React from 'react';
import Logo from '../../../assets/icons/logo';
import {Link} from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__top">
                <div className="site-footer__description">
                    <h1 className="site-logo">NOW DELI</h1>
                    {/* <p>House My Brand designs clothing for the young, the old & everyone in between – but most 
                    importantly, for the fashionable</p> */}
                    <div className="site-footer__follow">Follow us on</div>
                    <ul className="site-footer__social-networks">
                        <li>
                            <Link to="#"><i className="icon-facebook"></i><span>acebook</span></Link>
                        </li>
                        <li><Link to="#"><i className="icon-instagram"></i><span>Instagram</span></Link></li>
                    </ul>
                </div>
        
                <div className="site-footer__links">
                    {/* <ul>
                        <li>Shopping online</li>
                        <li><Link to="#">Order Status</Link></li>
                        <li><Link to="#">Shipping and Delivery</Link></li>
                        <li><Link to="#">Returns</Link></li>
                        <li><Link to="#">Payment options</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                    </ul> */}
                    <ul>
                        <li>Information</li>
                        <li><Link to="#">Gift Cards</Link></li>
                        <li><Link to="#">Find a store</Link></li>
                        <li><Link to="#">Newsletter</Link></li>
                        <li><Link to="#">Bacome a member</Link></li>
                        <li><Link to="#">Site feedback</Link></li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li><Link to="#">store@uikit.com</Link></li>
                        <li><Link to="#">Hotline: +1 131 138 138</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            
            <div className="site-footer__bottom">
                <div className="container">
                <p>NOW DELI - Copyright © {new Date().getFullYear()}.</p>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(FooterComponent);