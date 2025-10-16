import HomepageHeroSection from "../components/homepage/HomepageHeroSection";
import WhyUs from "../components/homepage/WhyUs";

function Homepage() {

  return (
    <div data-aos="fade-up">
      <HomepageHeroSection />

      <div className="" data-aos="fade-up">
        <WhyUs />
      </div>

    </div>
  );
}

export default Homepage;