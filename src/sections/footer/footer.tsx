import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
// import AMT_SVG from "../../components/AnimateLogo/AnimateLogo"; // import Animated Logo SVG
import "./style.css";

const Footer = () => {
  let goToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL"
    );
  };
  let goToGithub = () => {
    window.open("https://github.com/AMT-Egypt");
  };
  let handleContact = () => {
    window.open("https://wa.me/+201019472864");
  };
  let goToMail = () => {
    window.open("https://amtteam@gmail.com");
  };

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
              <a onClick={goToFacebook} href="#" className="active">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="active">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="active">
                Behance
              </a>
            </li>
            <li>
              <a onClick={goToGithub} href="#" className="active">
                Github
              </a>
            </li>
            <li>
              <a onClick={handleContact} href="#" className="active">
                What'sapp
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <ul className="site-links">
          <li className="active">
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <hr />
        <div className="info">
          <div className="c-info">
            <p>+20 1121234656</p>
            <p onClick={goToMail}>amtteam@gmail.com</p>
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
