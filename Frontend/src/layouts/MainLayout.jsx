import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      {children}
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
