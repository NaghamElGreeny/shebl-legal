"use client";

import "@/src/styles/Footer.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Social } from "@/types";
import { useEffect, useState } from "react";
import Popup from "../ui/PopUp";
import { getSocial } from "@/services/ClientApiHandler";

export default function Footer() {
  const t = useTranslations("Footer");
  const [social, setSocial] = useState<Social[] | null>(null);

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const data = await getSocial();
        setSocial(data);
      } catch (error) {
        console.error("Failed to load social links:", error);
      }
    };

    fetchSocial();
  }, []);

  const findValue = (key: string) =>
    social?.find((item) => item.key === key)?.value || "";

  const whatsapp = findValue("phone");
  const facebook = findValue("facebook");
  const x = findValue("x");
  const instagram = findValue("instagram");
  const description = findValue("desc") || t("description");

  const socialLinks = [
    {
      key: "whatsapp",
      url: `https://wa.me/${whatsapp}`,
      icon: "/assets/footer/whatsapp.png",
    },
    { key: "x", url: x, icon: "/assets/footer/x.png" },
    { key: "instagram", url: instagram, icon: "/assets/footer/instagram.png" },
    { key: "facebook", url: facebook, icon: "/assets/footer/facebook.png" },
  ];

  return (
    <footer className="w-full mt-auto relative flex justify-center items-center gap-16 bg-[url('/assets/footer/footer.png')] bg-cover">
      <div className="overlay absolute inset-0" />

      <div className="foot-container w-full relative flex flex-col gap-10">
        {/* Logo and Description */}
        <div className="footer-shebl flex gap-6">
          <div className="logo">
            <Image
              loading="lazy"
              src="/assets/logo/Logo-main.png"
              alt="shebl-logo"
              width={64}
              height={64}
              className="w-14 h-17"
            />
          </div>
          <div className="description flex flex-col justify-end lg:w-[615px] md:w-[615px] w-[299px] min-h-[98px] gap-3">
            <h3 className="font-bold text-base">{t("title")}</h3>
            <p className="lg:text-sm font-normal text-xs">{description}</p>
          </div>
        </div>

        <div className="line" />

        {/* Links and Social */}
        <div className="footer-links flex flex-col md:flex-row lg:flex-row items-center gap-5 justify-between">
          <div className="terms-privacy flex gap-4">
            <Popup />
          </div>

          <ul className="social-links flex gap-5 md:gap-8">
            {socialLinks.map(({ key, url, icon }) => (
              <li key={key}>
                {url ? (
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <Image
                      loading="lazy"
                      src={icon}
                      alt={key}
                      width={32}
                      height={32}
                    />
                  </Link>
                ) : (
                  <span className="opacity-40 cursor-not-allowed">
                    <Image
                      loading="lazy"
                      src={icon}
                      alt={key}
                      width={32}
                      height={32}
                    />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
