'use client'
import HeroSection from "@/components/Sections/Hero";
import AboutUs from "@/components/Sections/AboutUs";
import Whyus from "@/components/Sections/Whyus";
import OurServices from "@/components/Sections/OurServices";
import Faq from "@/components/Sections/Faq";
import ContactUs from "@/components/Sections/ContactUs";
import { useEffect, useState } from "react";
import { getAllServices, getFaq, getMainPage, getSocial, getWhyUsData } from "../../../services/ClientApiHandler";
import { FaqResponse, mainPageResponse, ServicesResponse, Social, WhyUsResponse } from "../../../types";

export default function HomePage() {
  const [social, setSocial] = useState<Social[] | null>(null);
  const [faqData, setFaqData] = useState<FaqResponse | null>(null);
  const [services, setServices] = useState<ServicesResponse | null>(null);
  const [WhyUsData, setWhyUsData] = useState<WhyUsResponse | null>(null);
  const [MainData, setMainData] = useState<mainPageResponse | null>(null);
  useEffect(() => {
    getSocial().then((social: Social[]) => {
      setSocial(social);
    });
    getFaq().then((faqData: FaqResponse) => {
      setFaqData(faqData);
    });
    getAllServices().then((services: ServicesResponse) => {
      setServices(services);
    });
    getWhyUsData().then((data: WhyUsResponse) => {
      setWhyUsData(data);
    });
    getMainPage().then((maindata: mainPageResponse) => {
      setMainData(maindata);
    });
  }, []);
  if (!social || !faqData || !services || !WhyUsData || !MainData) return <div>Loading...</div>;
  // console.log(MainData.data[0].banner);
  const banner = MainData?.data?.banner;
  const aboutSection = MainData.data.sections.find(section => section.type === "about");

  if (!aboutSection) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" space-y-12">
      <HeroSection maindata={banner} />
      <AboutUs about={aboutSection} />
      <Whyus data={WhyUsData.data} />
      <OurServices servicesArray={services.our_services} />
      <Faq faq={faqData.faq} />
      <ContactUs social={social} />
    </div>
  );
}
