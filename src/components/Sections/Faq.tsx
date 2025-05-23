'use client'
import '../../styles/Faq.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';
import { FaqItem, FaqResponse } from '../../../types';
import { useEffect, useState } from 'react';
import { getFaq } from '../../../services/ClientApiHandler';

export default function Faq({ faqClass, btnClass, roundClass, bgClass, txtClass }: {
    faqClass: string,
    btnClass: string,
    roundClass: string,
    bgClass?: string,
    txtClass?: string,
}) {
    const t = useTranslations("Faq");
    const [openId, setOpenId] = useState<number | null>(null);
    const [faqData, setFaqData] = useState<FaqResponse | null>(null);
    function answer(id: number) {
        setOpenId(prevId => (prevId === id ? null : id));
    }
    useEffect(() => {
        getFaq().then((faqData: FaqResponse) => {
            setFaqData(faqData);
        });
    }, []);
    const faq = faqData?.faq;
    // console.log(faqData)
    // const faqClass = "w-[95%] gap-16 rounded-[40px] bg-[url('/assets/images/faq.png')] bg-cover p-5";
    return (
        <>
            <div data-aos="zoom-in" className="wrapper w-full flex justify-center items-center">
                {/* <div className="faq relative flex justify-center items-center w-[95%] gap-16 rounded-[40px] bg-[url('/assets/images/faq.png')] bg-cover p-5 "> */}
                <div className={`faq relative flex justify-center items-center ${faqClass}`}>
                    <div className={`overlay absolute inset-0 ${roundClass} ${bgClass}`}> </div>
                    <div className="container relative flex flex-col pt-5 items-center content-evenly  w-full py-3">
                        <div className="group1 flex justify-between w-full">
                            <h3 className={`font-bold lg:text-[40px] text-2xl  ${txtClass}`}>{t("title")}</h3>
                            <Link href={'/faq'} className={`${btnClass}`}>  <PrimaryBtn text={t("btnText")} arrow={t("arrow")} width='151px' classs='second-btn-clr' /></Link>
                        </div>
                        <div className="group2 flex flex-col justify-between w-full  ">
                            {faq?.map((q, index) => (
                                <div key={q.id} className={`question`}>
                                    <div className="q-ans gap-4 flex flex-col justify-between">
                                        <h4 className={`${txtClass}`}>
                                            {index + 1}  .  {q.question}
                                        </h4>
                                        <p id={`${q.id}`} className={`${openId === q.id ? 'block' : 'hidden'}`}>{q.answer}</p>
                                    </div>
                                    <button type='button' className='showAns' onClick={() => answer(q.id)}>
                                        <img src={`/assets/icons/${openId === q.id ? 'hide' : 'show'}.svg`} alt='toggleicon' className='text-MainColor' />
                                    </button>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

