import HomepageHeroSection from "../components/homepage/HomepageHeroSection";
import WhyUs from "../components/homepage/WhyUs";
import Testimonials from "../components/homepage/Testimonials";

function Homepage() {

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