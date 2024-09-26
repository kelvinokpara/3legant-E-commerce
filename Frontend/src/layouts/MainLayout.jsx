import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// react hook
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <div className="w-full">
        <Navbar mobileNav={setSidebar} />
      </div>
      {/* sidebar */}
      <div className="lg:hidden">
        {sidebar && <Sidebar compHandler={setSidebar} />}
      </div>
      <div>{children}</div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
