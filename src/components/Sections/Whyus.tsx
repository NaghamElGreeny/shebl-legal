'use client'
import '../../styles/WhyUs.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';

export default function Whyus() {
    const t = useTranslations("Why-us-section");

    return (
        <>
            <div className="wrapper h-screen w-full flex justify-center items-center">
                <div className="why-us relative flex justify-center items-center w-[95%] h-[90%] rounded-[40px] bg-[url('/assets/images/image.png')] bg-cover ">
                    <div className="overlay absolute inset-0 rounded-[40px]"> </div>
                    <div className="container relative flex flex-col justify-center items-center rounded-[40px] w-full h-full">
                        <div className="arrow absolute lg:visible top-0 right-0"><img src={'/assets/icons/arrow.png'} alt="arrow" /></div>
                        <div className="group1 flex flex-col items-center justify-center gap-[16px]">
                            <h2 className='font-bold text-[40px]'>
                                {t("title")}
                            </h2>
                            <p style={{ color: 'var(--font-sub2)' }} className='text-base min-w-[633px] font-normal font-medium text-center text-[16px]'>
                                {t("description")}
                            </p>
                        </div>
                        <div className="group2 grid lg:grid-cols-4 sm:grid-cols-2 w-full place-items-center ">
                            <div className="card">
                                <div className="icon">
                                    <img src={"/assets/icons/card-1.png"} />
                                    <h2>+{t("card1-num")}</h2>
                                </div>
                                <p>{t("card1")}</p>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={"/assets/icons/card-2.png"} />
                                    <h2>+{t("card2-num")}</h2>
                                </div>
                                <p>{t("card2")}</p></div>
                            <div className="card">
                                <div className="icon">
                                    <img src={"/assets/icons/card-3.png"} />
                                    <h2>+{t("card3-num")}</h2>
                                </div>
                                <p>{t("card3")}</p></div>
                            <div className="card">
                                <div className="icon">
                                    <img src={"/assets/icons/card-4.png"} />
                                    <h2>+{t("card4-num")}</h2>
                                </div>
                                <p>{t("card4")}</p></div>
                        </div>
                        <div className="group3">
                            <Link href={''}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} width='255' /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

