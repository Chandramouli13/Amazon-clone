import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <span className='foot'>ChandraMouli Developer &hearts;</span>
        <span className='foot'>Connect With Me :</span>
        <Link to="https://www.linkedin.com/in/chandra-mouli-082a82178/"target="_blank" style={{ textDecoration: "none", color: "white" }}>
          <i className="bi bi-linkedin foot"></i>
        </Link>
        <Link to="https://github.com/Chandramouli13" target="_blank" style={{ textDecoration: "none", color: "white" }}>
          <i className="bi bi-github foot"></i>
        </Link>
      </div>
      <img className='footer' src="https://i.ibb.co/71kX1qh/amazon-footer-img.png" alt="amazon-footer"/>
    </div>
  )
}

export default Footer
