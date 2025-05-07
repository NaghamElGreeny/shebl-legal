'use client'
import '../../styles/Hero.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';

import ContactBtn from '../ui/ContactBtn';

export default function HeroSection() {
    const t = useTranslations("Hero");
    return (
        <div className="hero-section relative flex flex-col  h-[1000px] w-full">
            {/* <div className="overlay absolute inset-0 z-0 w-full h-full top-0 left-0"> </div> */}
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
                    <ContactBtn />
                    <p> {t("contactAdvice")} </p>
                </div>
            </div>
            <div className="features h-[104px] z-2 flex wrap  overflow-x-auto overflow-y-hidden">
                <div className="feature-card min-w-[330px]">
                    <img src={'/assets/icons/hero-1.png'} />
                    <div>{t("card1")}</div>
                </div>
                <div className="feature-card min-w-[330px]">
                    <img src={'/assets/icons/hero-2.png'} />
                    <div>{t("card2")}</div>
                </div>
                <div className="feature-card min-w-[330px]">
                    <img src={'/assets/icons/hero-3.png'} />
                    <div>{t("card3")}</div>
                </div>

            </div>
        </div>
    );
}