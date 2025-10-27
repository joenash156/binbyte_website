import HomepageHeroSection from "../components/homepage/HomepageHeroSection";
import WhyUs from "../components/homepage/WhyUs";
import Testimonials from "../components/homepage/Testimonials";
import { useEffect } from "react";

function Homepage() {

  useEffect(() => {
    document.title = "BinByte Technologies | Homepage";
  }, []);

  return (
    <div data-aos="fade-up">
      <HomepageHeroSection />

      <div className="" data-aos="fade-up">
        <WhyUs />
      </div>

      <div className="" data-aos="fade-up">
        <Testimonials />
      </div>

    </div>
  );
}

export default Homepage;