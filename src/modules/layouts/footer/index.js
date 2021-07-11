import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FaPhoneVolume,
  FaStore,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="site-footer">
      <div className="component-container">
        <div className="site-footer__top">
          <div className="footer-top-wrapper row">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <Link to="/">
                    <h1 className="site-logo">NOW DELI</h1>
                    {/* <img src="/beef/images/logo.png" alt="Footer Logo"></img> */}
                  </Link>
                </figure>
                <div className="text">
                  <p>
                    We provide well shaped fresh, safe and organic meat from our
                    farm in a very hygienic way for your pleasure. And our
                    motivation is if our customers are happy then we are happy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <ul className="info">
                  <li>
                    <IconContext.Provider value={{ className: "contact-icon" }}>
                      <FaPhoneVolume></FaPhoneVolume>
                    </IconContext.Provider>
                    <p>Call Us</p>
                    <h5>123-456-789</h5>
                  </li>
                  <li>
                    <IconContext.Provider value={{ className: "contact-icon" }}>
                      <FaStore></FaStore>
                    </IconContext.Provider>
                    <p>Address</p>
                    <h5>1234 Hart Street, US</h5>
                  </li>
                </ul>
                <ul className="social-links">
                  <div className="title">
                    <span>Social Media</span>
                  </div>
                  <li>
                    <Link className="social-fb" to="#">
                      <FaFacebookF></FaFacebookF>
                    </Link>
                  </li>
                  <li>
                    <Link className="social-google" to="#">
                      <FaGooglePlusG></FaGooglePlusG>
                    </Link>
                  </li>
                  <li>
                    <Link className="social-instagram" to="#">
                      <FaInstagram></FaInstagram>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget subscribe__content">
                <h4>
                  Subscribe to our newsletter and receive exclusive offers every
                  week
                </h4>
                <form className="subscribe__form">
                  <input type="email" placeholder="Email" />
                  <button type="submit" className="btn btn--rounded">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="component-container">
          <p>NOW DELI - Copyright © {new Date().getFullYear()}.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterComponent);
