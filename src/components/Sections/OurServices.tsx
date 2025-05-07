'use client'
import '../../styles/OurServices.scss'
import { useTranslations } from 'next-intl';

export default function OurServices() {
    const t = useTranslations("Our-Services");

    return (
        <>
            <div className="wrapper h-fit w-full flex justify-center items-center px-[48px]">
                <div className="our-services relative flex flex-col gap-[64px]  w-full h-full">
                    <div className="group1 w-[835px] flex flex-col lg:gap-10 md:gap-4  gap-3">
                        <h2 style={{ color: 'var(--font-main)' }} className='font-bold lg:text-[40px] text-xl'>
                            {t("title")}
                        </h2>
                        <p style={{ color: 'var(--font-sub2)' }} className='lg:text-base text-xs font-normal'>
                            {t("description")}
                        </p>
                    </div>
                    <div className="group2 grid w-full lg:grid-cols-3 lg:grid-row-2 ">
                        <div className="card">
                            <div className="icon">
                                <img src={'assets/icons/icon1.png'} />
                            </div>
                            <div className="service">
                                <h3>{t("service1-title")}</h3>
                                <p>{t("service1-description")}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={'assets/icons/icon2.png'} />
                            </div>
                            <div className="service">
                                <h3>{t("service2-title")}</h3>
                                <p>{t("service2-description")}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={'assets/icons/icon3.png'} />
                            </div>
                            <div className="service">
                                <h3>{t("service3-title")}</h3>
                                <p>{t("service3-description")}</p>
                            </div>
                        </div>
                        <div className="card lg:col-span-2">
                            <div className="icon">
                                <img src={'assets/icons/icon4.png'} />
                            </div>
                            <div className="service">
                                <h3>{t("service4-title")}</h3>
                                <p>{t("service4-description")}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={'assets/icons/hero-2.png'} />

                            </div>
                            <div className="service">
                                <h3>{t("service4-title")}</h3>
                                <p>{t("service4-description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

