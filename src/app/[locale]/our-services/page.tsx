'use client'
import SectionHero from '@/components/layout/SectionHero'
import OurServices from '@/components/Sections/OurServices'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { getAllServices } from '../../../../services/ClientApiHandler'
import type { ServicesResponse, ServiceItem } from '../../../../types'
export default function ServicesPage() {
    // const t = useTranslations("Our-Services");
    const [services, setServices] = useState<ServicesResponse | null>(null);

    useEffect(() => {
        getAllServices().then((services: ServicesResponse) => {
            setServices(services);
        });
    }, []);

    if (!services) return <div>Loading...</div>;
    // console.log('array', arrServices)

    return (
        <>
            <SectionHero title={services.banner.title} description={services.banner.description} image={services.banner.image} />
            <OurServices servicesArray={services.our_services} />


        </>
    )
}

