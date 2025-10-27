import ContactUsHero from "../components/contact-us/ContactUsHero";
import ContactUsInfo from "../components/contact-us/ContactUsInfo";
// import ContactUsForms from "../components/contact-us/ContactUsForms";
import { useEffect } from "react";

function ContactUs() {

  useEffect(() => {
    document.title = "BinByte Technologies | Contact Us";
  }, []);

  return (
    <div data-aos="fade-up">
      <ContactUsHero />
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ContactUsInfo />
            {/* <ContactUsForms /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;