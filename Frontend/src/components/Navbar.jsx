import { useState } from "react";
import NavigationAd from "./NavigationAd";
// icons
import logoIco from "../assets/icons/logo.svg";
import searchIco from "../assets/icons/search.svg";
import shoppingBagIco from "../assets/icons/shopping-bag.svg";
import userIco from "../assets/icons/user-circle.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navAd, setNavAd] = useState(true);

  const navAdHandler = () => {
    setNavAd((prev) => !prev);
  };
  return (
    <div>
      {navAd && <NavigationAd openHandler={navAdHandler} />}

      <div className="flex justify-between py-5 pad-lay ">
        <div className="flex gap-x-3 items-center">
          <RxHamburgerMenu />
          <img src={logoIco} alt="Logo" />
        </div>
        {/* links */}
        <ul className="flex gap-x-8 font-spaceGro font-medium text-neutral4 navlinks transition-all duration-300">
          <li>Home</li>
          <li>Shop</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        {/* icons */}
        <div className="flex items-center gap-x-4 ico">
          <img src={searchIco} alt="search" />
          <img src={userIco} alt="search" />

          <div className="flex gap-x-2 items-center">
            <img src={shoppingBagIco} alt="" />
            <span className="px-2 bg-neutral7 text-white rounded-full">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
