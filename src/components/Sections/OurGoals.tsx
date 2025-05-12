import React from 'react'
import { useTranslations } from 'next-intl'
import '../../styles/OurGoals.scss';
import { FeatureItem, whyusdata } from '../../../types';
export default function OurGoals({ goals }: {
    goals: whyusdata;
}) {
    const t = useTranslations("Our-goals");
    const features = goals.features;
    return (
        <>
            <div className="our-goals flex justify-center items-center content-center">
                <div className="container grid lg:grid-cols-4 grid-cols-1 gap-6 content-center justify-center">
                    <div className="group1 rounded-3xl h-[439px] w-[381px] relative overflow-hidden">
                        <h3>العدل</h3>
                        <div className="img">  <img src="/assets/images/goals.png" alt="goals" className='z-10' />
                        </div>
                    </div>
                    <div className="group2 lg:ltr:ml-8 lg:rtl:mr-8 lg:col-span-3 ">
                        <div className="icon rounded-full p-3 gap-2 w-14 h-14 bg-white"><img src="/assets/icons/hero-3.png" /></div>
                        <div className="goals flex flex-col gap-10">
                            <div className="title gap-5 flex flex-col">
                                <h3 className='font-bold text-[40px] text-primaryFont dark:text-darkFont' >{goals.title}</h3>
                                <p className='text-SharedFontSub
                                '>{goals.description}</p>
                            </div>
                            <div className="goals-sec flex lg:flex-row flex-col">
                                <ul className='grid grid-cols-2 '>
                                    {features.map((goal: FeatureItem) => (
                                        <li key={goal.id}>{goal.value}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 