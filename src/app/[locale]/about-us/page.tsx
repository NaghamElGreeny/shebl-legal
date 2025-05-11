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
import { getAllServices, getWhyUsData } from "../../../../services/ClientApiHandler";
import { WhyUsResponse } from "../../../../types";
export default function AboutPage() {
    const t = useTranslations("About-section");
    const [WhyUsData, setWhyUsData] = useState<WhyUsResponse | null>(null);

    useEffect(() => {
        getWhyUsData().then((data: WhyUsResponse) => {
            setWhyUsData(data);
        });
    }, []);

    if (!WhyUsData) return <div>Loading...</div>;
    // console.log(WhyUsData.data);
    return (
        <>
            <SectionHero title={t("title")} description={t("description2")} image={t("image")} />
            <AboutUs />
            <OurGoals />
            <Whyus data={WhyUsData.data} />
            <ValuseVision />
        </>
    )
}

