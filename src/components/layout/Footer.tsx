'use client'
import '../../styles/Footer.scss'
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';


export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const router = useRouter();
    return (
        <footer className='w-full bg-cover bg-no-repeat bg-[url("/assets/footer/footer.png")] relative '>
            <div className="foot-container w-full flex gap-10 flex-col">
                <div className="footer-shebl flex gap-6">
                    <div className="logo">
                        <img src={'/assets/logo/logo-main.png'} className='lg:w-[78px] lg:h-[98px] md:w-[62px] md:h-[78px] w-[46px] h-[58px]' />
                    </div>
                    <div className="description flex flex-col justify-end lg:w-[615px] md:w-[615px] w-[299px] h-[98px] gap-3">
                        <h3 className='font-bold text-base '>
                            {t("title")}
                        </h3>
                        <p className='lg:text-sm font-normal text-xs'>
                            {t("description")}
                        </p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer-links flex md:flex-row lg:flex-row flex-col items-center gap-3 justify-between ">
                    <div className="terms-privacy flex flex-row gap-4">
                        <p>{t("Terms")}</p>
                        <p>{t("privacyPolicy")}</p>
                    </div>
                    <div className="social-links">
                        <ul className="flex gap-8">
                            <li>
                                <Link href="https://www.whatsapp.com" target='_blank'>
                                    <img src={'/assets/footer/whatsapp.png'} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.twitter.com" target='_blank'>
                                    <img src={'/assets/footer/x.png'} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com" target='_blank' >
                                    <img src={'/assets/footer/instagram.png'} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com" target='_blank' >
                                    <img src={'/assets/footer/facebook.png'} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
