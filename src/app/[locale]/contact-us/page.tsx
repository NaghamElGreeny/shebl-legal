import SectionHero from '@/components/layout/SectionHero';
import ContactUs from '@/components/Sections/ContactUs';
import { getSections, getSocial } from '../../../../services/ApiHandler';
import { getTranslations } from 'next-intl/server';
import { Section, Social } from '../../../../types';
interface PageProps {
    params: {
        locale: string;
    };
}
export default async function ContactPage(props: { params: any }) {
    const { locale } = await props.params;
    const t = await getTranslations('Contact-us');
    const social: Social[] = await getSocial();
    const data: any = await getSections();
    const banner = data.sections.find((section: Section) => section.type === "contact_banner");
    // console.log('data : ', data)
    // console.log('banner : ', banner)
    return (
        <div className="space-y-6">
            <SectionHero
                title={banner.title}
                description={banner.description}
                image={banner.image}
            />
            <ContactUs social={social} />
        </div>
    );
}




// 'use client'
// import SectionHero from '@/components/layout/SectionHero'
// import ContactUs from '@/components/Sections/ContactUs'
// import { useTranslations } from 'next-intl'
// import React, { useEffect, useState } from 'react'
// import { Social, SocialResponse } from '../../../../types';
// import { getSocial } from '../../../../services/ClientApiHandler'

// export default function ContactPage() {
//     const t = useTranslations("Contact-us");
//     const [social, setSocial] = useState<Social[] | null>(null);
//     useEffect(() => {
//         getSocial().then((social: Social[]) => {
//             setSocial(social);
//         });
//     }, []);

//     if (!social) return <div>Loading...</div>;
//     // console.log(social);
//     // if (!social || !social.data || social.data.length === 0) return <div>Loading...</div>;
//     return (
//         <div className=" space-y-6">
//             <SectionHero title={t("title")} description={t("description")} image={t("image")} />

//             <ContactUs social={social} />
//         </div>
//     )
// }




