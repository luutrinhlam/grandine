import React from 'react';
import GrandineLogo from '../../assets/Grandine.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={GrandineLogo} alt="gpt3_logo" />
        <p>268 Ly Thuong Kiet str.<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms  Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>268 Ly Thuong Kiet str.</p>
        <p>Team7</p>
        <p>grandine@fairytail.group</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 GRANDINE. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;