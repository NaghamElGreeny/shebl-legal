'use client'
import '../../styles/ContactUs.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function ContactUs() {
    const t = useTranslations("Contact-us");

    return (
        <>
            <div className="contact-us w-full  gap-14">
                <div className="contact-us-header flex flex-col gap-4  ">
                    <h2 className='text-primary font-bold  text-4xl'>
                        {t("title")}
                    </h2>
                    <p style={{ color: 'var(--font-sub2)' }} className='text-sub'>
                        {t("description")}
                    </p>
                </div>
                <div className="wrapper grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1">
                    <div className="group1 flex flex-col gap-6 items-center justify-center">

                        <div className="shebl-quote flex flex-col items-center gap-4">
                            <h2 style={{ color: 'var(--font-main)' }} className='font-bold text-[40px]'>
                                {t("contacts-header")}
                            </h2>
                            <p style={{ color: 'var(--font-sub2)' }} className='text-base font-normal'>
                                {t("contacts-header-description")}
                            </p>
                        </div>
                        <div className="shebl-contact-info grid lg:grid-cols-2   gap-4">
                            <div className="feature-card flex">
                                <img src={'/assets/icons/sms.svg'} style={{ color: 'var(--secondary-btn-txt)' }} />
                                <p style={{ color: 'var(--font-main)' }}>{t("gmail")}</p>

                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/call.svg'} style={{ color: 'var(--secondary-btn-txt)' }} />
                                <p style={{ color: 'var(--font-main)' }}>{t("phone")}</p>
                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/clock.svg'} style={{ color: 'var(--secondary-btn-txt)' }} />
                                <p style={{ color: 'var(--font-main)' }}>{t("work-hrs")}</p>
                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/location.svg'} style={{ color: 'var(--secondary-btn-txt)' }} />
                                <p style={{ color: 'var(--font-main)' }}>{t("location")}</p>
                            </div>
                        </div>

                    </div>
                    <div className="group2 flex justify-end">
                        <img src={'/assets/images/contact.png'} className='' />
                    </div>
                </div>
            </div>
        </>
    );
}