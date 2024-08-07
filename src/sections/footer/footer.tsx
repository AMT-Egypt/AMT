import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
// import AMT_SVG from "../../components/AnimateLogo/AnimateLogo"; // import Animated Logo SVG
import "./style.css";

const Footer = () => {
  let [Year, setYear] = useState(0);
  useEffect(() => {
    let d = new Date();
    let year = d.getFullYear();
    setYear(year);
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="social">
          <div className="brand">
            <img src={logo} alt="AMT EGY LOGO" />
            {/* <AMT_SVG/>  */} {/*Animated Logo SVG*/}
            <h5>Let’s talk</h5>
          </div>
          <ul className="links">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL"
                className="active"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL"
                className="active"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://github.com/AMT-Egypt" className="active">
                Github
              </a>
            </li>
            <li>
              <a href="https://wa.me/+201019472864" className="active">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <ul className="site-links">
          <li className="active">
            <a href="#navbar" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <hr />
        <div className="info">
          <div className="c-info">
            <a href="https://wa.me/+201019472864">+201019472864</a>
            <a href="mailto:amt.egypt1@gmail.com">amt.egypt1@gmail.com</a>
          </div>
          <div className="privacy">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>Copyright © {Year} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
