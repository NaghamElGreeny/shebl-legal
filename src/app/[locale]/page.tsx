import HeroSection from "@/src/components/Sections/Hero";
import { getServices, getFaq,getSocial, getWhyUsData, getSections } from "../../../services/ApiHandler";
import { FaqResponse, ServicesResponse, Social, Section, mainData, whyusdata } from "../../../types";
import AboutUs from "@/src/components/Sections/AboutUs";
import Whyus from "@/src/components/Sections/Whyus";
import OurServices from "@/src/components/Sections/OurServices";
import Faq from "@/src/components/Sections/Faq";
import ContactUs from "@/src/components/Sections/ContactUs";


export default async function HomePage() {
  const social: Social[] = await getSocial();
  const MainData: mainData = await getSections();
  const faqData: FaqResponse = await getFaq();
  const WhyUsData:whyusdata[] = await getWhyUsData();
  const servicesData: ServicesResponse = await getServices();


  const services = servicesData?.our_services;
  const banner = MainData.sections.find((section: Section) => section.type === "main_banner");
  const aboutSection = MainData.sections?.find((section: Section) => section.type === "about");
  const faqClass = "w-[95%] gap-16 rounded-[40px] bg-[url('/assets/images/faq.png')] bg-cover p-5";
  const btnClass = "block";
  const bgClass = "bg-[#001c34e6]";
  const roundClass = "rounded-[40px]";
  // const titleClass = '!block'
  return (
    <div className=" space-y-12">
      {banner && <HeroSection maindata={banner} />}
      {aboutSection && <AboutUs about={aboutSection} />}
      {WhyUsData && <Whyus data={WhyUsData} />}
      {services && <OurServices servicesArray={services} />}
      {faqData ? <Faq faqClass={faqClass} btnClass={btnClass} roundClass={roundClass} bgClass={bgClass} /> : ''}
      {social ? <ContactUs social={social} /> : ''}
    </div>
  );
}
