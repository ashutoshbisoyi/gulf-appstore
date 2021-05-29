import React from 'react';
import { Col, Row } from 'react-bootstrap';
import qrcode from '../../assets/others/qrcode.jpg';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='border'></div>
      <div className='content'>
        <Row>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h4>About Us</h4>
            <ul>
              <li>Top Apps</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Features</li>
              <li>Blogs</li>
              <li>Developers</li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h4>Local Appstore</h4>
            <ul>
              <li>Google Play</li>
              <li>Apple Store</li>
            </ul>
            <h4>Help</h4>
            <ul>
              <li>Help Center</li>
              <li>Feedback</li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h4>Countries</h4>
            <ul>
              <li>India</li>
              <li>UAE</li>
              <li>Quatar</li>
              <li>Iraq</li>
              <li>Iran</li>
              <li>Oman</li>
            </ul>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12}>
            <h4>Scan to downlaod App</h4>
            <img src={qrcode} alt='QR Code' />
            <h4>Connect with us</h4>
            <ul className='social-media'>
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <AiOutlineFacebook />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiOutlineWhatsApp />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
