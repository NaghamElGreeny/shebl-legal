'use client'
import '../../styles/ContactUs.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';
import TitleDescription from "../layout/TitleDescription"

export default function ContactUs() {
    const t = useTranslations("Contact-us");

    return (
        <>
            <div className="contact-us w-full  gap-14">
                <TitleDescription title={t("title")} description={t("description")} />
                {/* <div className="contact-us-header flex flex-col gap-4  ">
                    <h2 className='text-primaryFont font-bold  text-4xl'>
                        {t("title")}
                    </h2>
                    <p style={{ color: 'var(--font-sub2)' }} className='text-sub'>
                        {t("description")}
                    </p>
                </div> */}
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
                                <img src={'/assets/icons/sms.svg'} />
                                <p>{t("gmail")}</p>

                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/call.svg'} />
                                <p>{t("phone")}</p>
                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/clock.svg'} />
                                <p>{t("work-hrs")}</p>
                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/location.svg'} />
                                <p>{t("location")}</p>
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