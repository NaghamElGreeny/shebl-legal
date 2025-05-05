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
                        <img src={'/assets/logo/logo-main.png'} className='w-[78px] h-[98px]' />
                    </div>
                    <div className="description flex flex-col justify-end lg:w-[615px] md:w-[615px] h-[98px] gap-3">
                        <h3 className='font-bold text-2xl'>
                            {t("title")}
                        </h3>
                        <p className='text-sm font-normal'>
                            {t("description")}
                        </p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer-links flex  justify-between ">
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
