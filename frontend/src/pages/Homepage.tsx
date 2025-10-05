import HomepageHeroSection from "../components/homepage/HomepageHeroSection";
import WhyUs from "../components/homepage/WhyUs";

function Homepage() {

  return (
    <div>
      <HomepageHeroSection />

      <div className="">
        <WhyUs />
      </div>

    </div>
  );
}

export default Homepage;