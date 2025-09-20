import React from "react";
import { useLocale } from "next-intl";
import { whyusdata } from "../../../types";
import Image from "next/image";
import "../../styles/ValuesVision.scss";

export default function ValuesVision({
  values,
  vision,
}: {
  values: whyusdata;
  vision: whyusdata;
}) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      {/* Values Section */}
      <div className="values w-full px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="main-dev flex flex-col items-center justify-center gap-4 lg:gap-12 lg:bg-[url('/assets/images/Rectangle.png')] bg-cover lg:bg-transparent bg-primaryCard dark:bg-darkBg rounded-3xl relative min-h-[300px] sm:min-h-[342px]">
          {/* Icon */}
          <div className="icon">
            <Image
              loading="lazy"
              src="/assets/icons/card-2.png"
              alt="values icon"
              width={24}
              height={24}
            />
          </div>

          {/* Title + Description */}
          <div className="title flex flex-col items-center gap-3 text-center">
            <h3 className="values-title">{values.title}</h3>
            <div className="description flex flex-col sm:flex-row gap-2 items-center w-full sm:w-4/5 min-h-20 text-SharedFontSub">
              <Image
                loading="lazy"
                src={`/assets/icons/${isArabic ? "start" : "end"}.png`}
                alt="start"
                width={20}
                height={60}
                className="hidden sm:block"
              />
              <p className="text-center text-sm sm:text-base">
                {values.description}
              </p>
              <Image
                loading="lazy"
                src={`/assets/icons/${isArabic ? "end" : "start"}.png`}
                alt="end"
                width={20}
                height={60}
                className="hidden sm:block"
              />
            </div>
          </div>

          {/* Side Decoration */}
          <div className="side-dev absolute top-[1%] right-4 lg:left-[87.5%] w-32 h-10 sm:w-44 sm:h-14 invisible lg:visible">
            <Image
              loading="lazy"
              src="/assets/images/values.png"
              alt="values decoration"
              width={176}
              height={56}
              className="w-full h-full rounded-[32px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision w-full h-[400px] sm:h-[500px] lg:h-[667px] relative rounded-full flex items-center justify-center p-6 sm:p-10">
        <h3
          className={`vision-title ${
            isArabic
              ? "!text-[120px] sm:!text-[200px] lg:!text-[248px] !bottom-[53%]"
              : "!text-[60px] sm:!text-[100px] lg:!text-[120px] !bottom-[63%]"
          }`}
        >
          {vision.title}
        </h3>

        {/* Vision Image */}
        <div className="vision-img w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] lg:w-[560px] lg:h-[560px] overflow-hidden rounded-full bg-transparent">
          <Image
            loading="lazy"
            src="/assets/images/vision.png"
            alt="vision"
            width={560}
            height={560}
            className="relative top-[30px] sm:top-[50px] lg:top-[70px] left-[10px] sm:left-[15px] lg:left-[23px] w-full h-full"
          />
        </div>

        {/* Floating Box */}
        <div className="floating-dev absolute flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-6 w-[90%] sm:w-[350px] lg:w-[448px] min-h-[100px] lg:h-36 rounded-2xl lg:rounded-3xl bg-[#FFFFFFB2]">
          <Image
            loading="lazy"
            src={`/assets/icons/${isArabic ? "start" : "end"}.png`}
            alt="start"
            width={18}
            height={60}
            className="hidden sm:block"
          />
          <p className="text-center text-[#1a3348] text-sm sm:text-base">
            {vision.description}
          </p>
          <Image
            loading="lazy"
            src={`/assets/icons/${isArabic ? "end" : "start"}.png`}
            alt="end"
            width={18}
            height={60}
            className="hidden sm:block"
          />
        </div>
      </div>
    </>
  );
}
