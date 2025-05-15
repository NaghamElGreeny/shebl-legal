'use client'
import SectionHero from '@/components/layout/SectionHero'
import Faq from '@/components/Sections/Faq'
import '@/styles/Faq-page.scss'
import PrimaryBtn from '@/components/ui/PrimaryBtn'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaqResponse } from '../../../../types'
import { getFaq } from '../../../../services/ClientApiHandler'

export default function FaqPage() {
    const t = useTranslations("Faq");
    const [openId, setOpenId] = useState<number | null>(null);
    const [faqData, setFaqData] = useState<FaqResponse | null>(null);
    useEffect(() => {
        getFaq().then((faqData: FaqResponse) => {
            setFaqData(faqData);
        });
    }, []);

    if (!faqData) return <div>Loading...</div>;
    const faq = faqData.faq;
    const banner = faqData.banner;
    function answer(id: number) {
        setOpenId(prevId => (prevId === id ? null : id));
    }
    return (
        <>
            {banner && banner.title && banner.description && banner.image ? (
                <SectionHero
                    title={banner.title}
                    description={banner.description}
                    image={banner.image}
                // title={banner.title ? banner.title : 'no title'}
                // description={banner.description ? banner.description : 'no description'}
                // image={banner.image ? banner.image : ''}
                />
            ) : (
                <SectionHero
                    title='No title provided'
                    description='No desc provide'
                    image='No image provided'
                />
            )}
            {/* <SectionHero title={faqData.banner.title} description={faqData.banner.description} image={faqData.banner.image} /> */}
            <div className="wrapper w-full flex justify-center items-center">
                <div className="faq relative flex justify-center items-center w-full ">
                    <div className="container flex flex-col justify-between w-full ">
                        {faq ?
                            faq.map((q) => (
                                <div key={q.id} className="question">
                                    <div className="q-ans gap-4 flex flex-col justify-between">
                                        <h4>
                                            1.
                                            {q.question}
                                        </h4>
                                        <p id={`${q.id}`} className={`${openId === q.id ? 'block' : 'hidden'}`}>{q.answer}</p>
                                    </div>
                                    <button type='button' className='showAns' onClick={() => answer(q.id)}>
                                        <img src={`/assets/icons/${openId === q.id ? 'hide' : 'show'}.svg`} alt='toggleicon' className='text-MainColor' />
                                    </button>
                                </div>
                            )) : <div className='!h-96 w-full bg-zinc-700 text-center absolute top-[100px] flex items-center justify-center'>
                                <h2 className='text-red-500'>No Faq to display</h2></div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

