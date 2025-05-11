'use client'
import SectionHero from '@/components/layout/SectionHero'
import Faq from '@/components/Sections/Faq'
import '@/styles/Faq-page.scss'
import PrimaryBtn from '@/components/ui/PrimaryBtn'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function FaqPage() {
    const t = useTranslations("Faq");

    return (
        <>
            <SectionHero title={t("title")} description={t("description")} image={t("image")} />
            {/* <Faq /> */}
            <div className="wrapper h-screen w-full flex justify-center items-center">
                <div className="faq relative flex justify-center items-center size-full ">

                    <div className="container relative flex flex-col justify-center items-center  w-full h-full">
                        <div className="group1 flex justify-between w-full">
                            <h3 className='font-bold lg:text-[40px] text-2xl text-primaryFont dark:text-darkFont' >{t("title")}</h3>
                        </div>
                        <div className="group2 flex flex-col justify-between w-full ">
                            <div className="question">
                                <div className="q-ans gap-4 flex flex-col justify-between">
                                    <h4>
                                        1.
                                        {t("q1")}
                                    </h4>
                                    <p>{t("ans1")}</p>
                                </div>
                                <h4>-</h4>

                            </div>
                            <div className="question">
                                <h4>
                                    2.
                                    {t("q1")}
                                </h4>
                                <h4>+</h4>

                            </div>
                            <div className="question">
                                <h4>
                                    3.
                                    {t("q1")}
                                </h4>
                                <h4>+</h4>
                            </div>
                            <div className="question">
                                <h4>
                                    4.
                                    {t("q1")}
                                </h4>
                                <h4>+</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

