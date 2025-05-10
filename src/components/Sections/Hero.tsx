'use client'
import '../../styles/Hero.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';

import ContactBtn from '../ui/ContactBtn';

export default function HeroSection() {
    const t = useTranslations("Hero");
    return (
        <div className="hero-section relative flex flex-col  min-h-[1000px] w-full">
            <div className="hero-container relative lg:ps-12 md:ps-12 sm:ps-3 xs:ps-3 lg:p-48 pt-[150px] ">
                <div className="title flex wrap ">
                    <img src={'/assets/icons/hero-title-icon.png'} />
                    <p>{t("title")}</p>
                </div>
                <div className="description">
                    <h1 className='font-semibold lg:text-[80px] md:text-[60px] sm:text-[50px]'>{t("description")} </h1>
                    <p className='font-normal sm:text-sm text-xl'> {t("subDescription")} </p>
                </div>
                <div className="contact flex wrap items-center">
                    <Link href={'/contact-us'}> <ContactBtn /></Link>
                    <p> {t("contactAdvice")} </p>
                </div>
            </div>
            <div className="features">
                <div className="feature-card">
                    <img src={'/assets/icons/hero-1.png'} />
                    <div>{t("card1")}</div>
                </div>
                <div className="feature-card">
                    <img src={'/assets/icons/hero-2.png'} />
                    <div>{t("card2")}</div>
                </div>
                <div className="feature-card">
                    <img src={'/assets/icons/hero-3.png'} />
                    <div>{t("card3")}</div>
                </div>

            </div>
        </div>
    );
}