"use client";
import React from "react";

export default function TitleDescription({
  title,
  description,
}: {
  readonly title: string;
  readonly description: string;
}) {
  return (
    <div className="title-description flex flex-col gap-4 ">
      <h2 className="font-bold md:text-[40px] text-[30px] text-primaryFont dark:text-darkFont" data-aos="fade-left">
        {title}
      </h2>
      <p className="text-SharedFontSub" data-aos="fade-left" data-aos-delay="200">
        {description}
      </p>
    </div>
  );
}
