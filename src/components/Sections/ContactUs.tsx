'use client'
import '../../styles/ContactUs.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';
import TitleDescription from "../layout/TitleDescription"
import { Social, SocialResponse } from '../../../types';

export default function ContactUs({ social }: {
    social: Social[];
}) {
    const t = useTranslations("Contact-us");
    const phone = social?.find(item => item.key === 'phone');
    const mail = social?.find(item => item.key === 'email');
    const address = social?.find(item => item.key === 'address');
    const appoitnments = social?.find(item => item.key === 'appoitnments');
    return (
        <>
            <div className="contact-us w-full  gap-14">
                {/* <TitleDescription title={t("title")} description={t("description")} /> */}

                <div className="wrapper grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1">
                    <div className="group1 flex flex-col gap-6 items-center justify-center">

                        <div className="shebl-quote flex flex-col items-center gap-4">
                            <h2 className='font-bold text-[40px] text-primaryFont dark:text-darkFont'>
                                {t("contacts-header")}
                            </h2>
                            <p className='text-base font-normal text-SharedFontSub'>
                                {t("contacts-header-description")}
                            </p>
                        </div>
                        <div className="shebl-contact-info grid lg:grid-cols-2   gap-4">
                            <div className="feature-card flex">
                                <img src={'/assets/icons/sms.svg'} />
                                <a href={`mailto:${mail?.value}`}>{mail?.value}</a>

                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/call.svg'} />
                                <a href={`tel:${phone?.value}`}>{phone?.value}</a>
                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/clock.svg'} />
                                <p>{appoitnments?.value}</p>
                            </div>
                            <div className="feature-card flex">
                                <img src={'/assets/icons/location.svg'} />
                                <p>{address?.value}</p>
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