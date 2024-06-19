import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><AiOutlineMail /> Email: rainforestwg@forest.com</p>
          <p><AiOutlinePhone /> Phone: +123456789</p>
        </div>
        <div className="footer-section">
          <h3>Copyright</h3>
          <p>&copy; 2024 Western Ghats Explorer</p>
        </div>
        <div className="footer-section">
          <h3>Subscription</h3>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
