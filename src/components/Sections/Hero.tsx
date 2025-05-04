'use client'
import '../../styles/Hero.scss'
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import ContactBtn from '../ui/ContactBtn';

export default function HeroSection() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations("Hero");
    return (
        <div className="hero-section flex bg-[url('/assets/images/hero-bg.jpg')] bg-cover">
            <div className="hero-container">
                <div className="title">
                    <img src={'/assets/icons/hero-title-icon.png'} />
                    <p>{t("title")}</p>
                </div>
                <div className="description">
                    <h1>{t("description")} </h1>
                    <p> {t("subDescription")} </p>
                </div>
                <div className="contact">
                    <ContactBtn />
                    <p> {t("contactAdvice")} </p>
                </div>
            </div>

        </div>
    );
}