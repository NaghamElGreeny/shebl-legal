'use client'
import axios from "axios";
import SectionHero from '@/components/layout/SectionHero'
import AboutUs from '@/components/Sections/AboutUs'
import OurGoals from '@/components/Sections/OurGoals'
import ValuseVision from '@/components/Sections/ValuseVision'
import Whyus from '@/components/Sections/Whyus'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { getAboutData } from '../../../../services/ApiHandler'
export default function AboutPage() {
    const t = useTranslations("About-section");
    // const data = getAboutData();
    // console.log(data);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://shebl9.azmy.aait-d.com/api/client/preview/why-us');
                setPosts(res.data);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();

    }, []);
    return (
        <>
            <SectionHero title={t("title")} description={t("description2")} image={t("image")} />
            <AboutUs />
            <OurGoals />
            <Whyus />
            <ValuseVision />
        </>
    )
}

