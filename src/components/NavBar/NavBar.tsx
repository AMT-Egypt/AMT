import { useState } from "react";
import logo from "../../assets/Logo.svg";
import { CloseIcon, ContactUsIcon, TwoLinesIcon } from "../../icons/icons";
import "../../style/Navbar.css";
export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  let handleContact = () => {
    window.open("https://wa.me/+201019472864");
  };
  let goToGithub = () => {
    window.open("https://github.com/AMT-Egypt");
  };
  let goToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL"
    );
  };
  let goToBehince = () => {
    window.open("#");
  }; // AMT Desginer Portfolio Link
  let reloadWindow = () => {
    window.location.reload();
  };
  return (
    <header className="Navbar" id="navbar">
      <img onClick={reloadWindow} className="logo" src={logo} alt="logo" />
      <div className="menuIcon" onClick={handleMenuToggle}>
        {menuVisible ? "" : <TwoLinesIcon />}
      </div>
      <ul className={menuVisible ? "show-menu" : ""}>
        <button className="close-menu-button" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#/">Blog</a>
        </li>
        <div style={{ fontWeight: "400" }} className="bg_nav_menu"></div>
        <div className="hrTag"></div>
        <li>
          <a className="contactUS" href="#contact">
            <div>Contact us</div>
            <div className="shareIcon">
              {" "}
              <ContactUsIcon />
            </div>
          </a>
          <div className="socialMediaMenu">
            <div onClick={goToFacebook}>facebook</div>
            <div onClick={handleContact}>What's App</div>
            <div onClick={goToGithub}>Github</div>
            <div onClick={goToBehince}>Behince</div>
          </div>
        </li>
      </ul>
    </header>
  );
}
