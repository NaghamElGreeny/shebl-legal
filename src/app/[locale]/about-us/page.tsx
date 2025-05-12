'use client'
import axios from "axios";
import SectionHero from '@/components/layout/SectionHero'
import AboutUs from '@/components/Sections/AboutUs'
import OurGoals from '@/components/Sections/OurGoals'
import ValuseVision from '@/components/Sections/ValuseVision'
import Whyus from '@/components/Sections/Whyus'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { getAboutData } from '../../../../services/ApiHandler'
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
    const visionSection = MainData.data.sections.find(section => section.type === "our_vision");
    if (!aboutSection || !goalsSection || !valuesSection || !visionSection) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SectionHero title={t("title")} description={t("description2")} image={t("image")} />
            <AboutUs about={aboutSection} />
            <OurGoals goals={goalsSection} />
            <Whyus data={WhyUsData.data} />
            <ValuseVision values={valuesSection} vision={visionSection} />
        </>
    )
}

