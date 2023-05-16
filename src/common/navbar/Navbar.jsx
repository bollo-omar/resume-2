import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false)

const handleClick = (evt) => {
  evt.preventDefault();
  setIsToggle(!isToggle);
}
  return (
    <>
      <nav id={"menu"}>
        <div className="mobile-menu">
          <div className={"logo"}>
            <span className="uil uil-desktop-cloud-alt"></span>
            <Link to={"/"}>
              <span className="logo-text">Bollo Aggrey</span>
            </Link>
          </div>
          <i className="uil uil-bars" onClick={handleClick}></i>
        </div>
        <ul id="menu-dropdown" className={isToggle? "menu-dropdown expanded" : "menu-dropdown"}>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/service"}>services</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>contacts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
