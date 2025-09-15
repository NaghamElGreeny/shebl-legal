'use client'
import Image from 'next/image';
import { ServiceItem } from '../../../types';
import '../../styles/OurServices.scss'


export default function OurServices(servicesArray: {
    servicesArray: ServiceItem[];
}) {
    const services = servicesArray.servicesArray;
    return (
        <>
            <div className="wrapper  w-full flex justify-center items-center">
                <div className="our-services relative grid md:grid-cols-3 md:grid-row-2 grid-cols-1 justify-center md:justify-start gap-6 w-full">
                    {Array.isArray(services) && services.length > 0 ?
                        services.map((service: ServiceItem) => (
                            <div
                                key={service.id}
                                className={service.id === 5 ? 'card md:col-span-2' : 'card'}
                            >
                                <div className="icon">
                                    <Image src={service.icon} alt='service-icon' width={40} height={40} />
                                </div>
                                <div className="service">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))
                        : ''
                    }
                </div>
            </div>

        </>
    );
}

