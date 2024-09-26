import heroimage from "../assets/images/heroimage.png";
import brandLogos from "../assets/images/Brands-logos.png";

const Homepage = () => {
  return (
    <div>
      <section className="h-dvh w-full object-contain">
        <div>
          <img src={heroimage} alt="hero image" />
        </div>
        <img src={brandLogos} alt="brand logos" />
      </section>
    </div>
  );
};

export default Homepage;
