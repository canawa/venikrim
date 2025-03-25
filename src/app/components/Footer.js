'use client'
import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="company-name">ВЕНИКРЫМ.РФ</h3>
          <p className="company-slogan">Лучшие веники в Крыму!</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Контакты</h4>
          <p className="footer-text">+7 (978) 838-68-36</p>
          <p className="footer-text">soriny@mail.ru</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Адрес</h4>
          <p className="footer-text">Республика Крым</p>
          <p className="footer-text">г. Симферополь</p>
          <p className="footer-text">ул. Василевского, д. 68</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© ВЕНИКРЫМ.РФ</p>
      </div>
    </footer>
  );
}

export default Footer;