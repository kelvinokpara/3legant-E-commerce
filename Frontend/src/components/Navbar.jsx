import { useState } from "react";
import NavigationAd from "./NavigationAd";
// icons
import logoIco from "../assets/icons/logo.svg";
import searchIco from "../assets/icons/search.svg";
import shoppingBagIco from "../assets/icons/shopping-bag.svg";
import userIco from "../assets/icons/user-circle.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ mobileNav }) => {
  const [navAd, setNavAd] = useState(true);
  // const [desktopNav, setDesktopNav] = useState(true);

  const navAdHandler = () => {
    setNavAd((prev) => !prev);
  };
  return (
    <div>
      {navAd && <NavigationAd compHandler={navAdHandler} />}

      <div className="flex justify-between py-5 pad-lay ">
        <div className="flex gap-x-2 items-center">
          <button onClick={() => mobileNav(true)} className="md:hidden">
            <RxHamburgerMenu />
          </button>
          <img src={logoIco} alt="Logo" className="max-md:w-16 pt-1" />
        </div>
        {/* links */}
        <ul
          className={`flex gap-x-8 font-spaceGro font-medium text-neutral4 navlinks transition-all duration-300 max-md:hidden`}
        >
          <li>Home</li>
          <li>Shop</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        {/* icons */}
        <div className="flex items-center gap-x-4 ico">
          <div className="flex items-center gap-x-4 ico max-md:hidden">
            <img src={searchIco} alt="search" />
            <img src={userIco} alt="search" />
          </div>

          <div className="flex gap-x-1 items-center max-md:text-sm">
            <img src={shoppingBagIco} alt="" />
            <span className="px-2 max-sm:px-1 bg-neutral7 text-white rounded-full max-md:text-xs">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
