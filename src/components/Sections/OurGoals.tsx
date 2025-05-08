import React from 'react'
import { useTranslations } from 'next-intl'
import '../../styles/OurGoals.scss';
export default function OurGoals() {
    const t = useTranslations("Our-goals");
    return (
        <>
            <div className="our-goals">
                <div className="container grid grid-cols-4 gap-6">
                    <div className="group1 rounded-3xl h-[439px] w-[381px] overflow-hidden">
                        <h3>العدل</h3>
                        <img src="/assets/images/goals.png" alt="goals" className='z-10' />
                    </div>
                    <div className="group2 ltr:ml-8 rtl:mr-8 col-span-3">
                        <div className="icon rounded-full p-3 gap-2 w-14 h-14 bg-white"><img src="/assets/icons/hero-3.png" /></div>
                        <div className="goals flex flex-col gap-10">
                            <div className="title gap-5 flex flex-col">
                                <h3 className='font-bold text-[40px]' style={{ color: 'var(--main-color)' }}>{t("title")}</h3>
                                <p style={{ color: 'var(--font-sub1)' }}>{t("description")}</p>
                            </div>
                            <div className="goals-sec flex flex-row ">
                                <ul>
                                    <li>{t("goal1")}</li>
                                    <li>{t("goal2")}</li>
                                    <li>{t("goal3")}</li>

                                </ul>
                                <ul>
                                    <li>{t("goal4")}</li>
                                    <li>{t("goal5")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

