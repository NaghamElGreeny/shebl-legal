'use client'
import '../../styles/Faq.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';
import { FaqItem } from '../../../types';
import { useState } from 'react';

export default function Faq({ faq }: { faq: FaqItem[] }) {
    const t = useTranslations("Faq");
    const [openId, setOpenId] = useState<number | null>(null);
    function answer(id: number) {
        setOpenId(prevId => (prevId === id ? null : id));
    }
    return (
        <>
            <div data-aos="zoom-in" className="wrapper w-full flex justify-center items-center">
                <div className="faq relative flex justify-center items-center w-[95%] gap-16 rounded-[40px] bg-[url('/assets/images/faq.png')] bg-cover  ">
                    <div className="overlay absolute inset-0 rounded-[40px]"> </div>
                    <div className="container relative flex flex-col justify-center items-center  w-full px-3">
                        <div className="group1 flex justify-between w-full">
                            <h3 className='font-bold lg:text-[40px] text-2xl'>{t("title")}</h3>
                            <Link href={'/faq'}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} width='151px' classs='second-btn-clr' /></Link>
                        </div>
                        <div className="group2 flex flex-col justify-between w-full  ">
                            {faq.map((q) => (

                                <div key={q.id} className="question">
                                    <div className="q-ans gap-4 flex flex-col justify-between">
                                        <h4>
                                            1.
                                            {q.question}
                                        </h4>
                                        <p id={`${q.id}`} className={`${openId === q.id ? 'block' : 'hidden'}`}>{q.answer}</p>
                                    </div>
                                    <button type='button' className='showAns' onClick={() => answer(q.id)}>
                                        <img src={`/assets/icons/${openId === q.id ? 'hide' : 'show'}.svg`} alt='toggleicon' className='text-MainColor' />
                                    </button>
                                </div>

                            ))}
                            {/* <div className="question">
                                <div className="q-ans gap-4 flex flex-col justify-between">
                                    <h4>
                                        1.
                                        {t("q1")}
                                    </h4>
                                    <p>{t("ans1")}</p>
                                </div>
                                <h4>-</h4>

                            </div>
                            <div className="line"></div>
                            <div className="question">
                                <h4>
                                    2.
                                    {t("q1")}
                                </h4>
                                <h4>+</h4>

                            </div>
                            <div className="line"></div>
                            <div className="question">
                                <h4>
                                    3.
                                    {t("q1")}
                                </h4>
                                <h4>+</h4>
                            </div>
                            <div className="line"></div>
                            <div className="question">
                                <h4>
                                    4.
                                    {t("q1")}
                                </h4>
                                <h4>+</h4>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

