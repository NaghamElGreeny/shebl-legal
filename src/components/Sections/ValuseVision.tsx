import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import '../../styles/ValuesVision.scss'
export default function ValuseVision() {
    const t = useTranslations("Values-vision");
    const locale = useLocale();

    return (
        <>

            <div className="values w-full">
                <div className="main-dev flex flex-col items-center justify-center lg:gap-12 gap-3 lg:bg-[url('/assets/images/Rectangle.png')] bg-cover lg:bg-transparent bg-primaryCard rounded-3xl">
                    <div className="icon">
                        <img src="/assets/icons/card-2.png" />
                    </div>
                    <div className="title flex flex-col items-center gap-3">
                        <h3 >{t("title")}</h3>
                        <div className="description flex flex-row gap-2 items-center ">
                            <img src={`/assets/icons/${locale === 'ar' ? 'start' : 'end'}.png`} />
                            <p className='text-center'>{t("description")}</p>
                            <img src={`/assets/icons/${locale === 'ar' ? 'end' : 'start'}.png`} />
                        </div>

                    </div>
                    <div className="side-dev w-44 h-14 invisible lg:visible ">
                        <img src="/assets/images/values.png" className='w-44 h-14' />
                    </div>
                </div>
            </div>
            <div className="vision w-full h-[667px] relative rounded-full flex items-center justify-center">
                <h3>رؤيتنا</h3>
                <div className="img w-[560px] h-[560px] overflow-hidden rounded-full bg-transparent">
                    <img src="/assets/images/vision.png" className='relative top-[70px] left-[23px] w-[560px] h-[560px]' />
                </div>
                <div className="floating-dev absolute flex flex-row items-center gap-6 p-6 w-[448px] h-36 rounded-3xl bg-[#FFFFFFB2]">
                    <img src={`/assets/icons/${locale === 'ar' ? 'start' : 'end'}.png`} />
                    <p className='text-center'>{t("vision")}</p>
                    <img src={`/assets/icons/${locale === 'ar' ? 'end' : 'start'}.png`} />
                </div>
            </div>
        </>
    )
}

