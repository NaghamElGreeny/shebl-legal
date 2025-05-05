'use client'
import '../../styles/AboutUsSection.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';

import ContactBtn from '../ui/ContactBtn';
export default function name() {
    const t = useTranslations("About-section");


    return (
        <>
            <div className="about-us bg-green-300 w-full h-[707px] grid grid-cols-2 gap-14">

                <div className="group1">
                    <div className="who-r-we">
                        <h2 style={{ color: 'var(--font-main)' }}>
                            {t("title")}
                        </h2>
                        <p style={{ color: 'var(--font-sub2)' }}>
                            {t("description")}
                        </p>
                    </div>
                    <div className="our-features grid grid-col-2  gap-4">
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p>{t("card1")}</p></div>
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p>{t("card2")}</p></div>
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p>{t("card3")}</p></div>
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p>{t("card4")}</p></div>
                    </div>
                    <div className="services-icons flex ">
                        <img src={'assets/images/groupservices.png'} />
                        <p>{t("subDescription")}</p>
                    </div>
                    <div className="btn">
                        <PrimaryBtn text={t("btnText")} arrow={t("arrow")} />
                    </div>
                </div>
                <div className="group2">
                    <img src={'assets/images/group 1.png'} />
                </div>
            </div>
        </>
    );
}