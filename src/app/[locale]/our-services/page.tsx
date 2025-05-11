'use client'
import SectionHero from '@/components/layout/SectionHero'
import OurServices from '@/components/Sections/OurServices'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { getServicesDAta } from '../../../../services/ApiHandler'
export default function ServicesPage() {
    const t = useTranslations("Our-Services");
    // const [ServicesData, setServicesData] = useState<any>(null); // لتخزين البيانات التي نرجعها من الـ API
    // const [loading, setLoading] = useState<boolean>(true); // لحالة التحميل
    // const [error, setError] = useState<string>(''); // لحالة الخطأ

    // // استدعاء البيانات عند تحميل الصفحة
    // useEffect(() => {
    //     const fetchServices = async () => {
    //         setLoading(true); // بداية التحميل
    //         try {
    //             const data = await getServicesDAta(); // جلب بيانات Services باستخدام الدالة
    //             setServicesData(data); // تخزين البيانات في حالة state
    //         } catch (err: any) {
    //             setError('حدث خطأ أثناء تحميل البيانات'); // التعامل مع الخطأ
    //         } finally {
    //             setLoading(false); // إنهاء حالة التحميل
    //         }
    //     };

    //     fetchServices(); // استدعاء الدالة عند تحميل الصفحة
    // }, []); // هذا سيعمل مرة واحدة عند تحميل الصفحة

    // عرض حالة التحميل أو الخطأ
    // if (loading) return <p>جاري التحميل...</p>;
    // if (error) return <p>{error}</p>;
    // console.log(ServicesData.message)
    return (
        <>
            <SectionHero title={t("title")} description={t("description")} image={t("image")} />
            <OurServices />

        </>
    )
}

