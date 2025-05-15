'use client'
import axios from "axios";
import SectionHero from '@/components/layout/SectionHero'
import AboutUs from '@/components/Sections/AboutUs'
import OurGoals from '@/components/Sections/OurGoals'
import ValuseVision from '@/components/Sections/ValuseVision'
import Whyus from '@/components/Sections/Whyus'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
// import { getAboutData } from '../../../../services/ApiHandler'
import { getAllServices, getMainPage, getWhyUsData } from "../../../../services/ClientApiHandler";
import { mainPageResponse, WhyUsResponse } from "../../../../types";
export default function AboutPage() {
    const t = useTranslations("About-section");
    const [WhyUsData, setWhyUsData] = useState<WhyUsResponse | null>(null);
    const [MainData, setMainData] = useState<mainPageResponse | null>(null);

    useEffect(() => {
        getWhyUsData().then((data: WhyUsResponse) => {
            setWhyUsData(data);
        });
        getMainPage().then((maindata: mainPageResponse) => {
            setMainData(maindata);
        });
    }, []);

    if (!WhyUsData || !MainData) return <div>Loading...</div>;
    const aboutus = MainData.data.sections?.find(
        (section) => section.type === "about"
    );
    // const aboutus = MainData?.data?.sections?.find(
    //     (section) => section.type === "about"
    // );
    const aboutSection = MainData.data.sections.find(section => section.type === "about");
    const goalsSection = MainData.data.sections.find(section => section.type === "goals");
    const valuesSection = MainData.data.sections.find(section => section.type === "core_values");
    const visionsSection = MainData.data.sections.find(section => section.type === "our_vision");
    if (!aboutSection && !goalsSection && !valuesSection && !visionsSection) {
        return (<div className='!h-96 w-full bg-zinc-700 text-center top-[100px] flex items-center justify-center'>
            <h2 className='text-red-500'>No About to display</h2></div>)
    }

    return (
        <>
            <SectionHero title={t("title")} description={t("description2")} image={t("image")} />
            {aboutSection ? <AboutUs about={aboutSection} /> : <div className='!h-96 w-full bg-zinc-700 text-center flex items-center justify-center'>
                <h2 className='text-red-500'>No About Section </h2></div>}

            {goalsSection ? <OurGoals goals={goalsSection} /> : <div className='!h-96 w-full bg-zinc-700 text-center flex items-center justify-center'>
                <h2 className='text-red-500'>No goals Section</h2></div>}

            <Whyus data={WhyUsData.data} />
            {valuesSection && visionsSection ? <ValuseVision values={valuesSection} vision={visionsSection} /> : <div className='!h-96 w-full bg-zinc-700 text-center flex items-center justify-center'>
                <h2 className='text-red-500'>No ValuseVision</h2></div>}

        </>
    )
}

