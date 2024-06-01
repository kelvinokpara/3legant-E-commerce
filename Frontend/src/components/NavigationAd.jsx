import couponIco from "../assets/icons/coupon.svg";
import { GoArrowRight } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

const NavigationAd = ({ openHandler }) => {
  return (
    <div className="relative flex items-center justify-center gap-x-3 py-2 bg-neutral2">
      <img src={couponIco} alt="coupon icon" />
      <p className="font-semibold"> 30% off storewide — Limited time! </p>
      <a
        href="#"
        className="inline-flex items-center gap-x-2 font-medium pb-1 border-b-2 border-b-linkHue"
      >
        Shop now <GoArrowRight />
      </a>

      <button onClick={openHandler} className="absolute right-6 text-2xl">
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default NavigationAd;
