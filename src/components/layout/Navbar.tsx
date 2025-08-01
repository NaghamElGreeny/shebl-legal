'use client'
import { useEffect, useState, useRef } from 'react';
import '../../styles/Nav.scss'
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import ChangeThem from './changeThem';
import Image from 'next/image';

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
        <nav className={`navBar fixed  md:flex-shrink-0 w-full z-20 md:px-8 px-1 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 p-0  ${scrolled ? 'on-scroll' : ''} `}>
            <div className='logodiv px-2'>
                <Link href="/" className="flex items-center space-x-8  rtl:space-x-reverse">
                    <Image src={"/assets/logo/Logo-main.png"} className='h-10' alt="shebl-logo" width={40} height={40}/>
                </Link>
            </div>
            <div className="iconsdiv flex md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse items-center">
                <Link href={'/contact-us'}>
                    <div className="contact-btn invisible !sm:invisible flex flex-row justify-around content-center gap-1">
                        <div className="btn-text">{tBtn("contact")}</div>
                        <div className="btn-icon">
                            <Image src={tBtn("arrow")} alt="arrow-vector" width={24} height={24}/>
                        </div>
                    </div>
                </Link>
                <button
                    onClick={toggleLocale}
                    className="items-center px-2 py-1 flex flex-row gap-1 "
                >
                    <Image src={'/assets/icons/lang-icon.png'} alt='lang' width={24} height={24}/>
                    {locale === 'en' ? 'AR' : 'EN'}
                </button>
                <button data-collapse-toggle="navbar-sticky" type="button" id='toggleBtn' className="inline-flex items-center  justify-center md:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={e => toggleMenu(e)}>
                    <span className="sr-only">Open main menu</span>
                    <div className="w-10 h-10 me-1" aria-hidden="true" >
                        <Image src={'/assets/icons/nav bar.png'} alt='navbar' width={40} height={40}/>
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
