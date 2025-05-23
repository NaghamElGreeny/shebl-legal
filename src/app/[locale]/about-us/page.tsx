import axios from "axios";
import SectionHero from '@/components/layout/SectionHero'
import AboutUs from '@/components/Sections/AboutUs'
import OurGoals from '@/components/Sections/OurGoals'
import ValuseVision from '@/components/Sections/ValuseVision'
import Whyus from '@/components/Sections/Whyus'
import { getSections, getWhyUsData } from "../../../../services/ApiHandler";
import { mainPageResponse, Section, WhyUsResponse } from "../../../../types";
export default async function AboutPage() {
    const WhyUsData = await getWhyUsData();
    const data: any = await getSections();
    const banner = data.sections?.find((section: Section) => section.type === "about_banner");
    // const WhyUsSection = data.sections?.find((section: any) => section.type === "why_us");
    const aboutSection = data.sections?.find((section: any) => section.type === "about");
    const goalsSection = data.sections?.find((section: any) => section.type === "goals");
    const valuesSection = data.sections?.find((section: any) => section.type === "core_values");
    const visionsSection = data.sections?.find((section: any) => section.type === "our_vision");
    console.log(data.sections);
    console.log(aboutSection)
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

