import SectionHero from '@/src/components/layout/SectionHero'
import AboutUs from '@/src/components/Sections/AboutUs'
import OurGoals from '@/src/components/Sections/OurGoals'
import ValuseVision from '@/src/components/Sections/ValuseVision'
import Whyus from '@/src/components/Sections/Whyus'
import { getSections, getWhyUsData } from "@/services/ApiHandler";
import { mainData, Section } from "@/types";
export default async function AboutPage() {
    const WhyUsData = await getWhyUsData();
    const data: mainData = await getSections();
    const banner = data.sections?.find((section: Section) => section.type === "about_banner");
    // const WhyUsSection = data.sections?.find((section: Section) => section.type === "why_us");
    const aboutSection = data.sections?.find((section: Section) => section.type === "about");
    const goalsSection = data.sections?.find((section: Section) => section.type === "goals");
    const valuesSection = data.sections?.find((section: Section) => section.type === "core_values");
    const visionsSection = data.sections?.find((section: Section) => section.type === "our_vision");
    return (
        <>
            {banner && (
                <SectionHero
                    title={banner.title}
                    description={banner.description}
                    image={banner.image}
                />
            )}
            {aboutSection ? <AboutUs about={aboutSection} /> : ''}
            {goalsSection ? <OurGoals goals={goalsSection} /> : ''}
            {WhyUsData && <Whyus data={WhyUsData} />}
            {valuesSection && visionsSection ? <ValuseVision values={valuesSection} vision={visionsSection} /> : ''}

        </>
    )
}

