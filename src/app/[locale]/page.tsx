import HeroSection from "@/components/Sections/Hero";
import AboutUs from "@/components/Sections/AboutUs";
import Whyus from "@/components/Sections/Whyus";
import OurServices from "@/components/Sections/OurServices";
import Faq from "@/components/Sections/Faq";
import ContactUs from "@/components/Sections/ContactUs";

export default function HomePage() {

  return (
    <>
      <HeroSection />
      <AboutUs />
      <Whyus />
      <OurServices />
      <Faq />
      <ContactUs />
    </>
  );
}
