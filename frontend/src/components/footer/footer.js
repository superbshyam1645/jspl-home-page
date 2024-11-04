import React from "react";
import "./footer.css";
import fb from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import LinkedIn from "../../images/linkedin.png";
import inst from "../../images/instagram.png";

function Footer() {
  return (
    <div className="footer">
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="/employer">
              <p>Resources Center</p>
            </a>
            <a href="/healthplan">
              <p>Testimonials</p>
            </a>
            <a href="/individual">
              <p>STV</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>JSPL Group Of Companies </p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={LinkedIn} alt="" />
              </p>
              <p>
                <img src={inst} alt="" />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>
              @{new Date().getFullYear()} JSPL Group of Companies All right
              reserved
            </p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/term">
              <div>
                <p>Term & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
