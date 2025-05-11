'use client'
import { ServiceItem } from '../../../types';
import '../../styles/OurServices.scss'
import { useTranslations } from 'next-intl';
import SectionHero from '../layout/SectionHero';

export default function OurServices({ servicesArray }: {
    servicesArray: ServiceItem[];
}) {
    const t = useTranslations("Our-Services");
    const services = servicesArray;
    // console.log('services: ', services);
    return (
        <>
            <div className="wrapper  w-full flex justify-center items-center">
                <div className="our-services relative grid lg:grid-cols-3 lg:grid-row-2 grid-cols-1 gap-6 w-full">
                    {
                        services.map((service: ServiceItem) => (
                            <div
                                key={service.id}
                                className={service.id === 5 ? 'card lg:col-span-2' : 'card'}
                            >
                                <div className="icon">
                                    <img src={service.icon} />
                                </div>
                                <div className="service">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                    }

                    {/* <div className="group2 grid w-full lg:grid-cols-3 lg:grid-row-2 "> */}
                    {/* <div className="card">
                        <div className="icon">
                            <img src={'/assets/icons/icon1.png'} />
                        </div>
                        <div className="service">
                            <h3 className=''>{t("service1-title")}</h3>
                            <p className=''>{t("service1-description")}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={'/assets/icons/icon2.png'} />
                        </div>
                        <div className="service">
                            <h3>{t("service2-title")}</h3>
                            <p>{t("service2-description")}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={'/assets/icons/icon3.png'} />
                        </div>
                        <div className="service">
                            <h3>{t("service3-title")}</h3>
                            <p>{t("service3-description")}</p>
                        </div>
                    </div>
                    <div className="card lg:col-span-2">
                        <div className="icon">
                            <img src={'/assets/icons/icon4.png'} />
                        </div>
                        <div className="service">
                            <h3>{t("service4-title")}</h3>
                            <p>{t("service4-description")}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={'/assets/icons/hero-2.png'} />

                        </div>
                        <div className="service">
                            <h3>{t("service4-title")}</h3>
                            <p>{t("service4-description")}</p>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* </div> */}

        </>
    )
}

