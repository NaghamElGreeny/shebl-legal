import SectionHero from '@/components/layout/SectionHero'
import OurServices from '@/components/Sections/OurServices'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function ServicesPage() {
    const t = useTranslations("Our-Services");
    return (
        <>
            <SectionHero title={t("title")} description={t("description")} image={t("image")} />
            <OurServices />

        </>
    )
}

