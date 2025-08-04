"use client";
import "../../styles/AboutUsSection.scss";
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";
import TitleDescription from "../layout/TitleDescription";
import { useTranslations, useLocale } from "next-intl";
import { FeatureItem, whyusdata } from "../../../types";
import Image from "next/image";

export default function AboutUs({ about }: { about: whyusdata }) {
  const t = useTranslations("About-section");
  const locale = useLocale();
  const features = about.features;

  const serviceImages = [
    { src: "/assets/images/serv1.png", z: "z-30", delay: "0" },
    { src: "/assets/images/serv2.png", z: "z-20", delay: "300" },
    { src: "/assets/images/serv3.png", z: "z-10", delay: "600" },
  ];

  const getAosProps = (delay: string) => ({
    "data-aos": locale === "ar" ? "fade-right" : "fade-left",
    "data-aos-delay": delay,
  });

  return (
    <div className="about-us w-full grid md:grid-cols-2 grid-cols-1 gap-14 pt-7">
      <div className="group1 flex flex-col gap-14">
        <TitleDescription title={about.title} description={about.description} />

        <div className="our-features grid lg:grid-cols-2 gap-4">
          {features.map((feature: FeatureItem, index: number) => (
            <div
              className="feature-card flex"
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <Image
                src={feature.icon}
                alt="about"
                className="size-8"
                width={32}
                height={32}
              />
              <p className="text-primaryFont dark:text-darkFont">
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        <div className="services-icons flex gap-4 items-center">
          <div className="groupServices flex relative">
            {serviceImages.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt="service"
                width={50}
                height={50}
                className={`${img.z} ${
                  locale === "en" ? "-ml-[20px]" : "-mr-[20px]"
                }`}
                {...getAosProps(img.delay)}
              />
            ))}
          </div>
          <p
            style={{ color: "var(--font-sub2)" }}
            data-aos="fade-in"
            data-aos-delay="800"
          >
            {t("subDescription")}
          </p>
        </div>

        <div className="btn">
          <Link href="/about-us">
            <PrimaryBtn text={t("btnText")} />
          </Link>
        </div>
      </div>

      <div className="group2 relative w-full h-[400px]" data-aos="fade-right">
        <Image
          src="/assets/images/group 1.png"
          alt="group-1"
          fill
          //   className="object-contain"
          className="object-contain h-fit"
        />
      </div>
    </div>
  );
}
