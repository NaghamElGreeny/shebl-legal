import SectionHero from '@/components/layout/SectionHero'
import Faq from '@/components/Sections/Faq'
import '@/styles/Faq-page.scss'
import { getFaq } from '../../../../services/ApiHandler'

export default async function FaqPage() {
    const faqData = await getFaq();
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

