import SectionHero from '@/components/layout/SectionHero'
import Faq from '@/components/Sections/Faq'
import '@/styles/Faq-page.scss'
import PrimaryBtn from '@/components/ui/PrimaryBtn'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FaqResponse } from '../../../../types'
import { getFaq } from '../../../../services/ApiHandler'
import { getTranslations } from 'next-intl/server'

export default async function FaqPage(props: { params: any }) {
    const { locale } = await props.params;
    const t = await getTranslations('Faq');

    const faqData = await getFaq();
    // if (!faqData) return <div>Loading...</div>;
    const faqClass = "w-full";
    const btnClass = "hidden";
    const roundClass = "";
    const bgClass = '';
    const txtClass = "!text-primaryFont dark:!text-sharedFont";
    const banner = faqData?.banner;

    return (
        <>
            {banner ? (
                <SectionHero
                    title={banner.title}
                    description={banner.description}
                    image={banner.image} />

            ) : ''}
            {faqData ? <Faq faqClass={faqClass} btnClass={btnClass} roundClass={roundClass} txtClass={txtClass} bgClass={bgClass} /> : ''}
        </>
    )
}

