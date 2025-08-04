'use client'
import '../../styles/ContactUs.scss'
import { useTranslations } from 'next-intl';
import { Social } from '../../../types';
import TitleDescription from '../layout/TitleDescription';
import Image from 'next/image';

export default function ContactUs({ social }: {
    social: Social[];
}) {
    const t = useTranslations("Contact-us");
    const phone = social?.find(item => item.key === 'phone');
    const phone_code = social?.find(item => item.key === 'phone_code');
    const mail = social?.find(item => item.key === 'email');
    const address = social?.find(item => item.key === 'address');
    const appoitnments = social?.find(item => item.key === 'appoitnments');

    return (
        <>
            <div className="contact-us w-full  gap-14">

                <div className="wrapper grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1">
                    <div className="group1 flex flex-col gap-6 items-center justify-center">
                <TitleDescription title={t("title")} description={t("description")} />
                        <div className="shebl-contact-info grid lg:grid-cols-2  gap-4 py-5">
                            <div className="feature-card flex">
                                <Image src={'/assets/icons/sms.svg'} alt='mail' width={24} height={22}/>
                                <a href={`mailto:${mail?.value}`}>{mail?.value}</a>

                            </div>
                            <div className="feature-card flex">
                                <Image src={'/assets/icons/call.svg'}  alt='phone' width={24} height={22}/>
                                <a href={`tel:${phone?.value}`} dir='ltr'> {phone_code ? `${phone_code?.value}${phone?.value}` : `${phone?.value}`}</a>
                            </div>
                            <div className="feature-card flex">
                                <Image src={'/assets/icons/clock.svg'}  alt='appoitnments' width={24} height={22}/>
                                <p>{appoitnments?.value}</p>
                            </div>
                            <div className="feature-card flex">
                                <Image src={'/assets/icons/location.svg'}  alt='location' width={24} height={22}/>
                                <p>{address?.value}</p>
                            </div>
                        </div>

                    </div>
                    <div className="group2 flex justify-end">
                        <Image src={'/assets/images/contact.png'} alt='contact-img' width={470} height={460} />
                    </div>
                </div>
            </div>
        </>
    );
}