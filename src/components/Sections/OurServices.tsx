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
                    {Array.isArray(servicesArray) && servicesArray.length > 0 ?
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
                        : <div className='!h-96 w-full bg-zinc-700 text-center flex items-center justify-center'>
                            <h2 className='text-red-500'>No services to display</h2></div>
                    }
                </div>
            </div>

        </>
    )
}

