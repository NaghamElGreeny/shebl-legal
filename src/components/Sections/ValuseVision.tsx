import React from 'react'
import { useTranslations } from 'next-intl'
import '../../styles/ValuesVision.scss'
export default function ValuseVision() {
    const t = useTranslations("Values-vision");
    return (
        <>

            <div className="values w-full h-[502px]">
                <div className="main-dev flex flex-col items-center justify-center gap-12 bg-[url('/assets/images/Rectangle.png')] bg-cover">
                    <div className="icon">
                        <img src="/assets/icons/card-2.png" />
                    </div>
                    <div className="title flex flex-col items-center gap-2">
                        <h3 >{t("title")}</h3>
                        <div className="description flex flex-row gap-2 items-center ">
                            <img src="/assets/icons/start.png" />
                            <p className='text-center'>{t("description")}</p>
                            <img src="/assets/icons/end.png" />

                        </div>
                    </div>
                    <div className="side-dev w-44 h-14">
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
                    <img src="/assets/icons/start.png" />
                    <p className='text-center'>{t("vision")}</p>
                    <img src="/assets/icons/end.png" />
                </div>
            </div>
        </>
    )
}

