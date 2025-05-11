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

    function answer(id: number) {
        setOpenId(prevId => (prevId === id ? null : id));
    }
    return (
        <>
            <SectionHero title={faqData.banner.title} description={faqData.banner.description} image={faqData.banner.image} />
            {/* <SectionHero title={t("title")} description={t("description")} image={t("image")} /> */}
            {/* <Faq /> */}
            <div className="wrapper w-full flex justify-center items-center">
                <div className="faq relative flex justify-center items-center w-full ">
                    <div className="container flex flex-col justify-between w-full ">
                        {
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
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

