'use client'
import '../../styles/WhyUs.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';
import { FeatureItem, whyusdata, WhyUsResponse } from '../../../types';
export default function Whyus({ data }: {
    data: whyusdata[];
}) {
    const t = useTranslations("Why-us-section");
    if (!data[0]) return <div className='!h-96 w-full bg-zinc-700 text-center top-[100px] flex items-center justify-center'>
        <h2 className='text-red-500'>No DATA </h2></div>
    const features = data[0].features;
    console.log(data)
    return (
        <>
            <div className="wrapper w-full flex justify-center items-center" data-aos="zoom-in-up">
                <div className="why-us relative flex justify-center items-center w-[95%] h-[90%] rounded-[40px] bg-[url('/assets/images/image.png')] bg-cover ">
                    <div className="overlay absolute inset-0 rounded-[40px]"> </div>
                    <div className="container relative flex flex-col justify-center items-center rounded-[40px] w-full">
                        <div className="arrow absolute lg:visible top-0 right-0"><img src={'/assets/icons/arrow.png'} alt="arrow" /></div>
                        <div className="group1 flex flex-col items-center justify-center gap-[16px]">
                            <h2 className='font-bold text-[40px] text-sharedFont'>
                                {data[0].title}
                            </h2>
                            <p className='text-base font-medium text-center text-[16px] text-SharedFontSub'>
                                {data[0].description}
                            </p>
                        </div>
                        <div className="group2 grid lg:grid-cols-4 lg:gap-0 gap-3 gap-x-5 grid-cols-2 w-full place-items-center relative ">
                            {
                                Array.isArray(features) && features.length > 0 ?
                                    features.map((feature: FeatureItem) => (
                                        <div className="card place-items-center" key={feature.id}>
                                            <div className="icon" dir='ltr'>
                                                <h2>{feature.value}</h2>
                                                <div className="plus relative">+
                                                    <img src={feature.icon} className='left-5' />
                                                </div>
                                            </div>
                                            <p>{feature.key}</p>
                                        </div>
                                    )) : <div className='!h-96 w-full bg-zinc-700 text-center absolute top-[100px] flex items-center justify-center'>
                                        <h2 className='text-red-500'>No features to display</h2></div>
                            }
                        </div>
                        <div className="group3">
                            <Link href={''}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} width='255px' /></Link>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

