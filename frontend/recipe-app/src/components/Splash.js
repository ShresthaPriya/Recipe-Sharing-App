import React from 'react';
import splash from '../images/splash.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Splash = () => {
  return (
    <>
      <section className='Home'>
      <div className='left'>
  <h1>Let's enjoy the foodventure!!!</h1>
  <h3>Explore the healthy, easy recipes from Bon Appetit.</h3>
  <button>
    Start Cooking <i className="fas fa-arrow-right"></i>
  </button>
</div>

        <div className='right'>
          <img src={splash} width="320px" height="300px" alt="Delicious Food" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
       
          <div className="footer-left">
          <h1>Bon Appetit</h1>
            <p>Your go-to source for healthy and easy recipes. Follow us for more delicious content!</p>
          </div>
          <div className="footer-right">
          <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
            
        </div>
       
        <div className="footer-bottom">
          <p>&copy; 2024 Bon Appetit. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Splash;
