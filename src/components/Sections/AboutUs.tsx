'use client';

import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";
import TitleDescription from "../layout/TitleDescription";
import { useTranslations, useLocale } from "next-intl";
import { FeatureItem, whyusdata } from "@/types";
import Image from "next/image";

interface AboutUsProps {
  about: whyusdata;
}

export default function AboutUs({ about }: AboutUsProps) {
  const t = useTranslations("About-section");
  const locale = useLocale();
  const { title, description, features } = about;

  const serviceImages = [
    { src: "/assets/images/serv1.png", z: "z-30", delay: "0", alt: "Service 1" },
    { src: "/assets/images/serv2.png", z: "z-20", delay: "300", alt: "Service 2" },
    { src: "/assets/images/serv3.png", z: "z-10", delay: "600", alt: "Service 3" },
  ];

  const getAosProps = (delay: string) => ({
    "data-aos": locale === "ar" ? "fade-right" : "fade-left",
    "data-aos-delay": delay,
  });

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 py-10 lg:px-12 sm:px-8 px-4">
      {/* Left Section */}
      <div className="flex flex-col gap-10 md:gap-14">
        <TitleDescription title={title} description={description} />

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature: FeatureItem, index: number) => (
            <div
              key={feature.id}
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <Image
                src={feature.icon}
                alt={feature.value}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <p className="text-primaryFont dark:text-darkFont text-sm sm:text-base">
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        {/* Services Icons */}
        <div className="flex gap-4 items-center">
          <div className="flex relative ps-5">
            {serviceImages.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={50}
                height={50}
                className={`w-[50px] h-[50px] rounded-full border-[3.5px] border-[var(--bg-color)] ${img.z} ${
                  locale === "en" ? "-ml-[20px]" : "-mr-[20px]"
                }`}
                {...getAosProps(img.delay)}
              />
            ))}
          </div>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--font-sub2)" }}
            data-aos="fade-in"
            data-aos-delay="800"
          >
            {t("subDescription")}
          </p>
        </div>

        {/* Button */}
        <div>
          <Link href="/about-us">
            <PrimaryBtn text={t("btnText")} />
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]"
        data-aos="fade-right"
      >
        <Image
          src="/assets/images/group 1.png"
          alt="About us group"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
