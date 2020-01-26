import React from 'react';
import './Footer.scss';

const footer = () => (
  <div>
    <footer className="footer-area section_gap">
      <div className="container">
        <div className="footer-bottom row align-items-center">
          <div className="footer-text m-0 col-lg-8 col-md-12">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>
            2020 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_new">Colorlib</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default footer;