'use client'
import '../../styles/AboutUsSection.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';

export default function name() {
    const t = useTranslations("About-section");


    return (
        <>
            <div className="about-us w-full h-[707px] grid lg:grid-cols-2 gap-14 ltr:ml-16">

                <div className="group1 flex flex-col gap-14">
                    <div className="who-r-we flex flex-col gap-4 ">
                        <h2 style={{ color: 'var(--font-main)' }} className='font-bold text-[40px]'>
                            {t("title")}
                        </h2>
                        <p style={{ color: 'var(--font-sub2)' }} className='text-base font-normal'>
                            {t("description")}
                        </p>
                    </div>
                    <div className="our-features grid lg:grid-cols-2  gap-4">
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p style={{ color: 'var(--font-main)' }}>{t("card1")}</p></div>
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p style={{ color: 'var(--font-main)' }}>{t("card2")}</p></div>
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p style={{ color: 'var(--font-main)' }}>{t("card3")}</p></div>
                        <div className="feature-card flex">
                            <img src={'/assets/icons/hero-title-icon.png'} /> <p style={{ color: 'var(--font-main)' }}>{t("card4")}</p></div>
                    </div>
                    <div className="services-icons flex gap-4">
                        <img src={'assets/images/groupservices.png'} />
                        <p style={{ color: 'var(--font-sub2)' }}>{t("subDescription")}</p>
                    </div>
                    <div className="btn">
                      <Link href={'/about-us'}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} /></Link>
                    </div>
                </div>
                <div className="group2">
                    <img src={'assets/images/group 1.png'} className='w-auto'/>
                </div>
            </div>
        </>
    );
}