'use client'
import '../../styles/AboutUsSection.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import TitleDescription from "../layout/TitleDescription"
import { useTranslations, useLocale } from 'next-intl';
import { FeatureItem, whyusdata } from '../../../types';
import Image from 'next/image';

export default function AboutUs({ about }: {
    about: whyusdata;
}) {
    const t = useTranslations("About-section");
    const locale = useLocale();
    const features = about.features;
    return (
        <>
            <div className="about-us w-full grid lg:grid-cols-2 grid-cols-1 gap-14 ">

                <div className="group1 flex flex-col gap-14" data-aos="fade-left">
                    <TitleDescription title={about.title} description={about.description} />
                    <div className="our-features grid lg:grid-cols-2  gap-4">
                        {features.map((feature: FeatureItem) => (
                            <div className="feature-card flex" key={feature.id}>
                                <Image src={feature.icon} alt='about' className='size-8' width={32} height={32}/>
                                <p className='text-primaryFont dark:text-darkFont'>{feature.value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="services-icons flex gap-4 items-center">
                        <div className="groupServices flex relative">
                            <Image src={'/assets/images/serv1.png'} alt='service' width={50} height={50} className={`z-30`} />
                            <Image src={'/assets/images/serv2.png'} alt='service' width={50} height={50} className={`z-20 ${locale === 'en' ? '-ml-[20]' : '-mr-[20]'}`} />
                            <Image src={'/assets/images/serv3.png'} alt='service' width={50} height={50} className={`z-10 ${locale === 'en' ? '-ml-[20]' : '-mr-[20]'}`} />
                        </div>
                        <p style={{ color: 'var(--font-sub2)' }}>{t("subDescription")}</p>
                    </div>
                    <div className="btn">
                        <Link href={'/about-us'}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} /></Link>
                    </div>
                </div>
                <div className="group2" data-aos="fade-right">
                    <img src={'/assets/images/group 1.png'} className='w-auto' />
                </div>
            </div>
        </>
    );
}