'use client'
import '../../styles/Hero.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';

import ContactBtn from '../ui/ContactBtn';
import { FeatureItem, whyusdata } from '../../../types';

export default function HeroSection({ maindata }: {
    maindata: whyusdata;
}) {
    const t = useTranslations("Hero");
    if (!maindata) return
    const features = maindata.features;
    return (
        <div className="hero-section relative flex flex-col  min-h-[1000px] w-full">
            <div className="hero-container relative lg:ps-12 md:ps-12 sm:ps-3 xs:ps-3 lg:p-48 pt-[150px] ">
                <div className="title flex wrap ">
                    <img src={'/assets/icons/hero-title-icon.png'} />
                    <p>{t("title")}</p>
                </div>
                <div className="description">
                    <h1 className='font-semibold lg:text-[80px] md:text-[60px] sm:text-[50px]'>{maindata.title} </h1>
                    <p className='font-normal sm:text-sm text-xl'> {maindata.description} </p>
                </div>
                <div className="contact flex wrap items-center">
                    <Link href={'/contact-us'}> <ContactBtn /></Link>
                    <p> {t("contactAdvice")} </p>
                </div>
            </div>
            <div className="features">
                {features.map((feature: FeatureItem) => (
                    <div className="feature-card" key={feature.id}>
                        <img src={feature.icon} />
                        <div>{feature.value}</div>
                    </div>
                ))}

            </div>
        </div>
    );
}