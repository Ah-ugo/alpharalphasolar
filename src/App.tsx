// import { useState } from "react";
import HeroSection4 from "./components/HeroSection4";
// import HeroSection3 from "./components/HeroSection3";
// import { Header2 } from "./components/HeroSection";
import { Header } from "./components/HeroSection2";
import FeatureSection from "./components/FeatureSection";
// import { FeaturesSection } from "./components/FeatureSection";
import FeaturedItems from "./components/FeaturedItems";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
// import OurTeam from "./components/OurTeam";
import NavComponents2 from "./components/NavComponents2";
// import Navbar from "./components/NavComponents";
import PortfolioComponent from "./components/PortfolioComponent";
import "animate.css";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { FaWhatsapp } from "react-icons/fa6";
// import { Header, Header2 } from "./components/HeroSection";

function App() {
  // const [count, setCount] = useState(0);

  const openWhatsApp = () => {
    const phoneNumber = "+2347038122409"; // Replace with the phone number you want to message
    const message = "Hello, I'm interested in your service."; // Optional: A default message

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank"); // Open in a new tab
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <NavComponents2 />
        <HeroSection4 />
        <CTASection />
        <FeaturedItems />
        <Header />
        {/* <OurTeam /> */}
        <PortfolioComponent />
        <FeatureSection />
        <FooterSection />
        <Fab
          mainButtonStyles={{ backgroundColor: "#25D366" }}
          // actionButtonStyles={actionButtonStyles}
          style={{ bottom: 0, right: 0 }}
          icon={<FaWhatsapp />}
          // event={event}
          // alwaysShowTitle={true}
          onClick={openWhatsApp}
        />
      </div>
    </>
  );
}

export default App;
