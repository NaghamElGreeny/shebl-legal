'use client'
import HeroSection from "@/components/Sections/Hero";
import AboutUs from "@/components/Sections/AboutUs";
import Whyus from "@/components/Sections/Whyus";
import OurServices from "@/components/Sections/OurServices";
import Faq from "@/components/Sections/Faq";
import ContactUs from "@/components/Sections/ContactUs";
import { useEffect, useState } from "react";
import { getAllServices, getFaq, getSocial } from "../../../services/ClientApiHandler";
import { FaqResponse, ServicesResponse, Social } from "../../../types";

export default function HomePage() {
  const [social, setSocial] = useState<Social[] | null>(null);
  const [faqData, setFaqData] = useState<FaqResponse | null>(null);
  const [services, setServices] = useState<ServicesResponse | null>(null);
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
  }, []);
  if (!social || !faqData || !services) return <div>Loading...</div>;
  return (
    <div className=" space-y-12">
      <HeroSection />
      <AboutUs />
      <Whyus />
      <OurServices servicesArray={services.our_services} />
      <Faq faq={faqData.faq} />
      <ContactUs social={social} />
    </div>
  );
}
