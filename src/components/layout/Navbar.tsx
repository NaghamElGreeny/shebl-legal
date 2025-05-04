'use client'
import { useEffect, useState } from 'react';
import '../../styles/Nav.scss'
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={`navBar fixed w-full z-10 p-x-8 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  ${scrolled ? 'on-scroll' : ''
            } `}>

            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={"/assets/logo/Layer 1.png"} className='h-8' alt="shebl-logo" />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <img src={'/assets/icons/lang-icon.png'} />
                <p>EN</p>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <div className="w-5 h-5" aria-hidden="true" >
                        <img src={'/assets/icons/nav bar.png'} />
                    </div>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    <li>
                        <Link href="#" className="block py-2 px-3 md:p-0" aria-current="page">من نحن</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 md:p-0">خدماتنا</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 md:p-0 ">اسئلة شائعة</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 md:p-0 ">تواصل معنا</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}
