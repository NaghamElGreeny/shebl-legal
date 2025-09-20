"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import "@/src/styles/Nav.scss";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import ChangeThem from "./changeThem";
import Image from "next/image";
import PrimaryBtn from "../ui/PrimaryBtn";

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /** ----------   Event Handlers   ---------- */

  const handleClickOutside = useCallback(
    (e: PointerEvent) => {
      if (!isOpen) return;
      const toggleButton = document.getElementById("toggleBtn");
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleButton &&
        !toggleButton.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  // تابع وضع التمرير لتغيير شكل الشريط
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 900);
  }, []);

  // التبديل بين اللغات
  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    router.push(`/${segments.join("/")}`);
  };

  // فتح/إغلاق القائمة في الموبايل
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  /** ----------   Effects   ---------- */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]);

  /** ----------   Data   ---------- */
  const navLinks = [
    { href: "/about-us", label: t("about") },
    { href: "/our-services", label: t("services") },
    { href: "/faq", label: t("faq") },
    { href: "/contact-us", label: t("contact") },
  ];

  /** ----------   Render   ---------- */
  return (
    <nav
      className={`navBar fixed w-full z-50 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-8 px-4 sm:p-4 p-0 ${
        scrolled ? "on-scroll" : ""
      }`}
    >
      {/* Logo */}
      <div className="logodiv md:px-2">
        <Link
          href="/"
          className="flex items-center space-x-8 rtl:space-x-reverse"
        >
          <Image
            src="/assets/logo/Logo-main.png"
            alt="shebl-logo"
            width={56}
            height={64}
            className="w-14 h-16"
            priority
          />
        </Link>
      </div>

      {/* Right side buttons */}
      <div className="iconsdiv flex md:order-2 items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <Link href="/contact-us" className="hidden md:block">
          <PrimaryBtn text={t("contact")} width="130px" />
        </Link>

        <button
          onClick={toggleLocale}
          className="flex items-center gap-1 px-2 py-1"
        >
          <Image
            loading="lazy"
            src="/assets/icons/lang-icon.png"
            alt="lang"
            width={24}
            height={24}
          />
          {locale === "en" ? "AR" : "EN"}
        </button>

        <button
          id="toggleBtn"
          type="button"
          aria-controls="navbar-sticky"
          // aria-expanded={isOpen}
          className="inline-flex items-center justify-center md:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <Image
            loading="lazy" 
            src="/assets/icons/nav bar.png"
            alt="navbar"
            width={40}
            height={40}
          />
        </button>

        <ChangeThem />
      </div>

      {/* Links (Desktop + Mobile) */}
      <div
        ref={menuRef}
        id="navbar-sticky"
        className={`linksdiv items-center justify-between w-full md:flex md:w-auto md:order-1 ${
          isOpen ? "absolute top-[100px] menublock" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2 px-3 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
