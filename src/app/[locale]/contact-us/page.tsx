import { getSections, getSocial } from "@/services/ApiHandler";
import SectionHero from "@/src/components/layout/SectionHero";
import ContactUs from "@/src/components/Sections/ContactUs";
import { mainData, Section, Social } from "@/types";

export default async function ContactPage() {
  const social: Social[] = await getSocial();
  const data: mainData = await getSections();
  const banner = data.sections?.find(
    (section: Section) => section.type === "contact_banner"
  );

  return (
    <div className="space-y-6">
      {banner && (
        <SectionHero
          title={banner.title}
          description={banner.description}
          image={banner.image}
        />
      )}
      <ContactUs social={social} />
    </div>
  );
}
