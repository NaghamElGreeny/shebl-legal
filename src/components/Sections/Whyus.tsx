'use client'
import '../../styles/WhyUs.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';

type Card = {
    count: string,
    icon: string,
    description: string
};
export default function Whyus() {
    const t = useTranslations("Why-us-section");
    const cards: Card[] = [
        { "count": t("card1-num"), "icon": "/assets/icons/card-1.png", "description": t("card1") },
        { "count": t("card2-num"), "icon": "/assets/icons/card-2.png", "description": t("card2") },
        { "count": t("card3-num"), "icon": "/assets/icons/card-3.png", "description": t("card3") },
        { "count": t("card4-num"), "icon": "/assets/icons/card-4.png", "description": t("card4") }
    ];
    return (
        <>
            <div className="wrapper w-full flex justify-center items-center">
                <div className="why-us relative flex justify-center items-center w-[95%] h-[90%] rounded-[40px] bg-[url('/assets/images/image.png')] bg-cover ">
                    <div className="overlay absolute inset-0 rounded-[40px]"> </div>
                    <div className="container relative flex flex-col justify-center items-center rounded-[40px] w-full">
                        <div className="arrow absolute lg:visible top-0 right-0"><img src={'/assets/icons/arrow.png'} alt="arrow" /></div>
                        <div className="group1 flex flex-col items-center justify-center gap-[16px]">
                            <h2 className='font-bold text-[40px]'>
                                {t("title")}
                            </h2>
                            <p style={{ color: 'var(--font-sub2)' }} className='text-base font-medium text-center text-[16px]'>
                                {t("description")}
                            </p>
                        </div>
                        <div className="group2 grid lg:grid-cols-4 lg:gap-0 lg:gap-0 gap-3 gap-x-5 grid-cols-2 w-full place-items-center relative ">
                            {cards.map((card: Card) => (
                                <div className="card place-items-center" key={card.count}>
                                    <div className="icon" dir='ltr'>
                                        <h2>{card.count}</h2>
                                        <div className="plus relative">+
                                            <img src={card.icon} className='left-5' />
                                        </div>
                                    </div>
                                    <p>{card.description}</p>
                                </div>
                            ))
                            }
                        </div>
                        <div className="group3">
                            <Link href={''}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} width='255px' /></Link>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

