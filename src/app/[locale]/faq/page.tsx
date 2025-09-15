import SectionHero from '@/src/components/layout/SectionHero'
import Faq from '@/src/components/Sections/Faq'
import { getFaq } from '@/services/ApiHandler';
import '@/src/styles/Faq-page.scss'

export default async function FaqPage() {
    const faqData = await getFaq();
    const faqClass = "w-full !h-fit";
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

