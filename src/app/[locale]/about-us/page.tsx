import SectionHero from '@/components/layout/SectionHero'
import AboutUs from '@/components/Sections/AboutUs'
import OurGoals from '@/components/Sections/OurGoals'
import ValuseVision from '@/components/Sections/ValuseVision'
import Whyus from '@/components/Sections/Whyus'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function AboutPage() {
    const t = useTranslations("About-section")
    return (
        <>
            <SectionHero title={t("title")} description={t("description2")} image={t("image")} />
            <AboutUs />
            <OurGoals />
            {/* <Whyus /> */}
            {/* <ValuseVision /> */}
        </>
    )
}

