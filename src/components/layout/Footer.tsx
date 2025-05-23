'use client'
import '../../styles/Footer.scss'
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Social } from '../../../types';
import { useEffect, useState } from 'react';
import { getSocial } from '../../../services/ClientApiHandler';


export default function Footer() {
    const [social, setSocial] = useState<Social[] | null>(null);
    useEffect(() => {
        getSocial().then((social: Social[]) => {
            setSocial(social);
        });
    }, []);

    // const social = await getData();

    const t = useTranslations('Footer');
    const whatsapp = social?.find(social => social.key === "phone");
    const facebook = social?.find(social => social.key === "facebook");
    const x = social?.find(social => social.key === "x");
    const instagram = social?.find(social => social.key === "instagram");
    const description = social?.find(social => social.key === "desc");
    // if (!whatsapp && !facebook && !x && !instagram && !description) {
    //     return <div className='!h-96 w-full bg-zinc-700 text-center flex items-center justify-center'>
    //         <h2 className='text-red-500'>Footer data</h2></div>;
    // }
    return (
        <>
            <footer className="w-full mt-auto  relative flex justify-center items-center gap-16 bg-[url('/assets/footer/footer.png')] bg-cover  ">
                <div className="overlay absolute inset-0"> </div>
                <div className="foot-container w-full relative flex gap-10 flex-col">
                    <div className="footer-shebl flex gap-6">
                        <div className="logo">
                            <img src={'/assets/logo/logo-main.png'} className='lg:w-[78px] lg:h-[98px] md:w-[62px] md:h-[78px] w-[46px] h-[58px]' />
                        </div>
                        <div className="description flex flex-col justify-end lg:w-[615px] md:w-[615px] w-[299px] h-[98px] gap-3">
                            <h3 className='font-bold text-base '>
                                {t("title")}
                            </h3>
                            <p className='lg:text-sm font-normal text-xs'>
                                {description ? description.value : t("description")}
                            </p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="footer-links flex md:flex-row lg:flex-row flex-col items-center gap-5 justify-between ">
                        <div className="terms-privacy flex flex-row gap-4">
                            <p>{t("Terms")}</p>
                            <p>{t("privacyPolicy")}</p>
                        </div>
                        {/*
                        بوب اب اليرايفسي والتيرمز
                        <div className="popup-overlay" id="popup">
                            <div className="popup-content">
                                <p>دي رسالة من البوب أب!</p>
                                <button className="close-btn" id="closePopup">إغلاق</button>
                            </div>
                        </div> */}
                        <div className="social-links">
                            <ul className="flex gap-8">
                                <li>
                                    <Link href={`https://wa.me/${whatsapp?.value}`} target='_blank'>
                                        <img src={'/assets/footer/whatsapp.png'} />
                                    </Link>
                                </li>
                                <li>
                                    {x?.value ? (
                                        <Link href={x?.value} target='_blank'>
                                            <img src={'/assets/footer/x.png'} />
                                        </Link>
                                    ) : (
                                        <Link href='' target='_blank'>
                                            <img src={'/assets/footer/x.png'} />
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    {instagram?.value ? (
                                        <Link href={instagram?.value} target='_blank'>
                                            <img src={'/assets/footer/instagram.png'} />
                                        </Link>
                                    ) : (
                                        <Link href='' target='_blank'>
                                            <img src={'/assets/footer/instagram.png'} />
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    {facebook?.value ? (
                                        <Link href={facebook?.value} target='_blank' >
                                            <img src={'/assets/footer/facebook.png'} />
                                        </Link>
                                    ) : (<Link href='' target='_blank' >
                                        <img src={'/assets/footer/facebook.png'} />
                                    </Link>)}

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
