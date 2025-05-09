'use client'
import { useEffect, useState, useRef } from 'react';
import '../../styles/Nav.scss'
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import ChangeThem from './changeThem';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Nav');
    const tBtn = useTranslations('Btns');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 902);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en';
        const segments = pathname.split('/').filter(Boolean);
        segments[0] = newLocale; // نبدل اللغة في أول جزء من الرابط
        const newPath = `/${segments.join('/')}`;
        router.push(newPath);
    };

    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // يمنع الكليك من الوصول للـ document
        setIsOpen(prevState => !prevState);
    };
    // useEffect(() => {
    //     const handleClick = () => {
    //         setTimeout(() => {
    //             setIsOpen(false);
    //         }, 50);
    //     };

    //     document.addEventListener('mousedown', handleClick);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClick);
    //     };
    // }, []);

    useEffect(() => {
        const handleClickOutside = (e: PointerEvent) => {
            const toggleButton = document.getElementById('toggleBtn');
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                toggleButton &&
                !toggleButton.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('pointerdown', handleClickOutside);
        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className={`navBar fixed  md:flex-shrink-0 w-full z-10 px-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ${scrolled ? 'on-scroll' : ''} `}>
            <div className='logodiv px-2'>
                <Link href="/" className="flex items-center space-x-8  rtl:space-x-reverse">
                    <img src={"/assets/logo/Logo-main.png"} className='h-10' alt="shebl-logo" />
                </Link>
            </div>
            <div className="iconsdiv flex md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse ">
                <Link href={'/contact-us'}>
                    <div className="contact-btn invisible !sm:invisible flex flex-row justify-around content-center gap-1">
                        <div className="btn-text">{tBtn("contact")}</div>
                        <div className="btn-icon">
                            <img src={tBtn("arrow")} alt="arrow-vector" />
                        </div>
                    </div>
                </Link>
                <button
                    onClick={toggleLocale}
                    className="items-center px-2 py-1 flex flex-row gap-1 "
                >
                    <img src={'/assets/icons/lang-icon.png'} />
                    {locale === 'en' ? 'AR' : 'EN'}
                </button>
                <button data-collapse-toggle="navbar-sticky" type="button" id='toggleBtn' className="inline-flex items-center  justify-center md:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={e => toggleMenu(e)}>
                    <span className="sr-only">Open main menu</span>
                    <div className="w-10 h-10" aria-hidden="true" >
                        <img src={'/assets/icons/nav bar.png'} />
                    </div>
                </button>
                <ChangeThem />
            </div>
            <div ref={menuRef} className={`linksdiv items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block menublock' : 'hidden'}`} id="navbar-sticky">
                <ul className="flex flex-col  p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li>
                        <Link href="/about-us" className="block py-2 px-3 md:p-0" aria-current="page" onClick={() => setIsOpen(false)}> {t("about")} </Link>
                    </li>
                    <li>
                        <Link href="/our-services" className="block py-2 px-3 md:p-0" onClick={() => setIsOpen(false)}>{t("services")}</Link>
                    </li>
                    <li>
                        <Link href="/faq" className="block py-2 px-3 md:p-0 " onClick={() => setIsOpen(false)}> {t("faq")}</Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className="block py-2 px-3 md:p-0 " onClick={() => setIsOpen(false)}> {t("contact")}</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}
