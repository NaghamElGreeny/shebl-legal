import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroSection from "@/components/Sections/Hero";
import AboutUs from "@/components/Sections/AboutUs";

export default function HomePage() {

  return (
    <>
      <HeroSection />
      <AboutUs />
    </>
  );
}
