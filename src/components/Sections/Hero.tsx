'use client'
import '../../styles/Hero.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';

import ContactBtn from '../ui/ContactBtn';

export default function HeroSection() {
    const t = useTranslations("Hero");
    return (
        <div className="hero-section flex bg-[url('/assets/images/hero-bg.jpg')] bg-cover">
            <div className="hero-container">
                <div className="title flex wrap">
                    <img src={'/assets/icons/hero-title-icon.png'} />
                    <p>{t("title")}</p>
                </div>
                <div className="description">
                    <h1>{t("description")} </h1>
                    <p> {t("subDescription")} </p>
                </div>
                <div className="contact flex wrap items-center">
                    <ContactBtn />
                    <p> {t("contactAdvice")} </p>
                </div>
            </div>

        </div>
    );
}