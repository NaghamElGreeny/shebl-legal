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
        <footer className='w-full bg-cover bg-no-repeat bg-[url("/assets/footer/footer.png")] min-h-72 relative '>
            <div className="foot-container w-full h-full flex flex-col justify-between py-10 px-6">
                <div className="footer-shebl">
                    <div className="logo">
                        <img src={'/assets/logo/logo-main.png'} className='w-8' />
                    </div>
                    <div className="description">
                        <h3>
                            {t("title")}
                        </h3>
                        <p>
                            {t("description")}
                        </p>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="terms-privacy">
                        <p>{t("Terms")}</p>
                        <p>{t("privacyPolicy")}</p>
                    </div>
                    <div className="social-links">
                        <ul className="flex  p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse flex-row md:mt-0  ">
                            <li>
                                <Link href="whatsapp.com" className="block py-2 px-3 md:p-0"> <img src={'/assets/footer/whatsapp.png'} /> </Link>
                            </li>
                            <li>
                                <Link href="twitter.com" className="block py-2 px-3 md:p-0"><img src={'/assets/footer/x.png'} /></Link>
                            </li>
                            <li>
                                <Link href="instagram.com" className="block py-2 px-3 md:p-0 "> <img src={'/assets/footer/instagram.png'} /></Link>
                            </li>
                            <li>
                                <Link href="facebook.com" className="block py-2 px-3 md:p-0 "> <img src={'/assets/footer/facebook.png'} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
