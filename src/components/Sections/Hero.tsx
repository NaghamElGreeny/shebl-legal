'use client'
import '../../styles/Hero.scss'
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';

import { FeatureItem, whyusdata } from '../../../types';
import Image from 'next/image';
import PrimaryBtn from '../ui/PrimaryBtn';

export default function HeroSection({ maindata }: {
    maindata: whyusdata;
}) {    
      const locale = useLocale();
    
    const t = useTranslations("Hero");
    if (!maindata) return
    const features = maindata.features;
    return (
        <div className="hero-section relative flex flex-col  h-[110vh] w-full">
            <div className="hero-container relative md:ps-12 p-4 lg:p-40 pt-[150px]">
                <div className="title flex wrap items-center">
                    <Image src={'/assets/icons/hero-title-icon.png'} alt='hero' width={50} height={50}/>
                    <p>{t("title")}</p>
                </div>
                <div className="description md:w-[80%]">
                    <h1 className={`font-semibold ${locale==='en'?'lg:text-[60px]':'lg:text-[80px]'}  md:text-[60px] sm:text-[50px] text-[30px]`}>{maindata.title} </h1>
                    <p className='font-normal sm:text-sm text-xl'> {maindata.description} </p>
                </div>
                <div className="contact flex wrap items-center">
                    <Link href={'/contact-us'}>  <PrimaryBtn text={t("contact")} width='130px' /></Link>
                    <p> {t("contactAdvice")} </p>
                </div>
            </div>
            <div className="features">
                {features.map((feature: FeatureItem) => (
                    <div className="feature-card" key={feature.id}>
                        <Image src={feature.icon} alt={feature.value} width={24} height={24}/>
                        <div>{feature.value}</div>
                    </div>
                ))}

            </div>
        </div>
    );
}