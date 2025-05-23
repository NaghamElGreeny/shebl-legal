import SectionHero from '@/components/layout/SectionHero';
import OurServices from '@/components/Sections/OurServices';
// import React, { useEffect, useState } from 'react';
import { getServices } from '../../../../services/ApiHandler';
import type { ServicesResponse } from '../../../../types';

export default async function ServicesPage() {
    const services: ServicesResponse = await getServices();

    const banner = services?.banner;
    const our_services = services?.our_services;
    // console.log('services : ', our_services)

    return (
        <>
            {banner && (
                <SectionHero
                    title={banner.title}
                    description={banner.description}
                    image={banner.image}
                />
            )}
            {our_services && <OurServices servicesArray={our_services} />}

        </>
    );
}
