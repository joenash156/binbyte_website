import AboutUsHeroSection from "../components/about-us/AboutUsHeroSection";
import Mission from "../components/about-us/Mission";
import Vision from "../components/about-us/Vision";
import OurTeam from "../components/about-us/OurTeam";
import { useEffect } from "react";

function AboutUs() {

  useEffect(() => {
    document.title = "BinByte Technologies | About Us";
  }, []);

  return (
    <div data-aos="fade-up">
      <AboutUsHeroSection />
      <Mission />
      <Vision />
      <OurTeam />
    </div>
  );
}
export default AboutUs