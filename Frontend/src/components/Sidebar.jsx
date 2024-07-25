import logoIco from "../assets/icons/logo.svg";
import searchIco from "../assets/icons/search.svg";
import shoppingBagIco from "../assets/icons/shopping-bag.svg";
import userIco from "../assets/icons/user-circle.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
// button
import Button from "./Button";
// social media
import { facebookIco, instagramIco, youtubeIco } from "../assets/icons";

const Sidebar = ({ compHandler }) => {
  return (
    <section className="w-screen h-screen bg-neutral7/80 ">
      <div className="absolute z-20 top-0 h-full min-h-screen w-[90vw] flex flex-col justify-between gap-y-20 items-center p-6 bg-neutral1 overflow-y-scroll">
        <div className="w-full flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <img src={logoIco} alt="logo" />
            <button onClick={() => compHandler(false)} className=" text-xl">
              <IoCloseOutline />
            </button>
          </div>
          {/*  */}
          <div className="flex items-center justify-between border border-neutral4 rounded-md p-2 w-full">
            <img src={searchIco} alt="search icon" className="text-neutral7" />
            <input
              type="search"
              name=""
              id=""
              placeholder="search"
              className="border-none outline-none placeholder:font-Inter placeholder:text-neutral4"
            />
          </div>
          <ul className="flex flex-col gap-y-4">
            <li className="border-b pb-2 border-b-neutral3 font-medium font-Inter">
              Home
            </li>
            <li className="border-b pb-2 border-b-neutral3 font-medium font-Inter">
              Shop
            </li>
            <li className="border-b pb-2 border-b-neutral3 font-medium font-Inter">
              Product
            </li>
            <li className="border-b pb-2 border-b-neutral3 font-medium font-Inter">
              Contact Us
            </li>
          </ul>
        </div>
        {/* bottom sidebar */}
        <div className="w-full flex flex-col gap-y-4">
          <ul className="flex flex-col gap-y-4">
            <li className="border-b pb-2 border-b-neutral3 font-medium font-Inter">
              Cart
            </li>
            <li className="border-b pb-2 border-b-neutral3 font-medium font-Inter">
              Wishlist
            </li>
            {/*  */}
          </ul>
          <Button>Sign In</Button>
          <div className="flex items-center gap-x-6 ">
            <img width={20} src={instagramIco} alt="instagram" />
            <img width={20} src={facebookIco} alt="facebook" />
            <img width={20} src={youtubeIco} alt="youtube" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
