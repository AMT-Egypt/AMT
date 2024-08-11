import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { CloseIcon, ContactUsIcon, TwoLinesIcon } from "../../icons/icons";
import "../../style/Navbar.css";

// Define the type for social media links
interface SocialLink {
  name: string;
  url: string;
}

// Define the type for NavItem props
interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

// Define the type for SocialMediaMenu props
interface SocialMediaMenuProps {
  links: SocialLink[];
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61559455807819&mibextid=ZbWKwL",
  },
  { name: "WhatsApp", url: "https://wa.me/+201019472864" },
  { name: "Github", url: "https://github.com/AMT-Egypt" },
];

const NavBar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => setMenuVisible((prev) => !prev);
  const handleCloseMenu = () => setMenuVisible(false);
  const reloadWindow = () => window.location.reload();

  return (
    <header className="Navbar" id="navbar">
      <img onClick={reloadWindow} className="logo" src={logo} alt="logo" />
      <div className="menuIcon" onClick={handleMenuToggle}>
        {menuVisible ? "" : <TwoLinesIcon />}
      </div>
      <ul className={menuVisible ? "show-menu" : ""}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        ></div>
        <button className="close-menu-button" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <div className="navTextParent">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#work">Work</NavItem>
          <NavItem href="#service">Services</NavItem>

          <div className="bg_nav_menu"></div>
        </div>
        <hr
          id="Line"
          style={{
            width: "100%",
            marginTop: "-2.2rem",
            marginBottom: "-0.9rem",
          }}
        />
        <div className="shareIcon">
          <NavItem href="#contact">Contact us</NavItem>
          <ContactUsIcon />
        </div>

        <li>
          <SocialMediaMenu links={socialLinks} />
        </li>
      </ul>
    </header>
  );
};

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li>
    <a href={href}>{children}</a>
  </li>
);

const SocialMediaMenu: React.FC<SocialMediaMenuProps> = ({ links }) => (
  <div className="socialMediaMenu">
    {links.map(({ name, url }) => (
      <div key={name} onClick={() => window.open(url)}>
        {name}
      </div>
    ))}
  </div>
);

export default NavBar;
