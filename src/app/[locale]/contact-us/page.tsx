import SectionHero from '@/components/layout/SectionHero'
import ContactUs from '@/components/Sections/ContactUs'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function ContactPage() {
    const t = useTranslations("Contact-us");
    return (
        <>
            <SectionHero title={t("title")} description={t("description")} image={t("image")} />
            <ContactUs />
        </>
    )
}

