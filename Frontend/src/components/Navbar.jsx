import { useState } from "react";
import NavigationAd from "./NavigationAd";
import logoIco from "../assets/icons/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navAd, setNavAd] = useState(true);

  const navAdHandler = () => {
    setNavAd((prev) => !prev);
  };
  return (
    <div>
      {navAd && <NavigationAd openHandler={navAdHandler} />}

      <div>
        <div className="flex gap-x-3 items-start">
          <RxHamburgerMenu />
          <img src={logoIco} alt="Logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
